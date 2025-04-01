import { ref, watchEffect, Ref, provide, onMounted, onUnmounted } from 'vue';

import { SchemaType, NodeType, LifeCycleEnum } from '../../interface';
import { isComponent, isField, isModule } from '../../util';
import { useLifeCycleEffect } from '../useLifeCycleEffect';
import { useValidate } from './useValidate';

// 内部使用map格式的schema， 更新也更新map，不更新tree；
export const useForm = (schema: Ref<SchemaType>, values: Ref<Record<string, any> | undefined>) => {
    // 根据name， 获取schema
    const schemaMap = ref({} as Record<string, NodeType>);

    const formModel = ref({} as Record<string, any>);

    // 深层遍历schema， 然后生成schemaMap， key是name， value是FieldNode | ComponentNode
    const updateSchemaMap = (schema: SchemaType) => {
        const traverse = (node: NodeType) => {
            if (node?.name) {
                schemaMap.value[node.name] = node;
            }

            if (isModule(node) || isComponent(node)) {
                node.content?.forEach(traverse);
            }
        }

        schema.content?.forEach(traverse);
    }

    watchEffect(() => {
        schemaMap.value = {};
        updateSchemaMap(schema.value);
    });

    watchEffect(() => {
        formModel.value = {
            ...values.value,
        };
    });

    const updateNodeSchema = (name: string, propName: string, propValue: any) => {
        const node = schemaMap.value[name];

        if (!node) return;

        schemaMap.value = {
            ...schemaMap.value,
            [name]: {
                ...schemaMap.value[name],
                [propName]: propValue
            }
        };
    }

    const updateFieldProps = (name: string, propName: string, propValue: any) => {
        const node = schemaMap.value[name];

        if (!node || !isField(node)) return;

        updateNodeSchema(name, 'fieldProps', {
            ...node.fieldProps,
            [propName]: propValue
        });
    }

    const updateComponentProps = (name: string, propName: string, propValue: any) => {
        const node = schemaMap.value[name];

        if (
            !node ||
            (
                !isComponent(node) &&
                !isField(node)
            )
        ) return;
        
        updateNodeSchema(name, 'componentProps', {
           ...node.componentProps,
            [propName]: propValue
        });
    }

    const updateFieldValue = (name: string, value: any) => {
        schema.value?.lifeCycleEffects?.forEach(effect => {
            if (effect.triggerOn === LifeCycleEnum.FORM_CHANGE) {
                effect.tap(context, name, value);
            }
        });
        
        formModel.value = {
            ...formModel.value,
            [name]: value
        };
        console.info('###', formModel.value);
    }

    const { validate, errors } = useValidate(schemaMap, formModel);

    const context = {
        schema,
        schemaMap,
        formModel,
        errors,
        validate,
        updateNodeSchema,
        updateFieldProps,
        updateComponentProps,
        updateFieldValue,
    };

    provide('context', context);

    useLifeCycleEffect(
        context,
        [LifeCycleEnum.FORM_MOUNT, LifeCycleEnum.FORM_UNMOUNT]
    );

    return context;
}