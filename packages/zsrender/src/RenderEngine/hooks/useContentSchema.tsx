import { ref, watchEffect, Ref, provide } from 'vue';

import { SchemaType, NodeType } from '../interface';
import { isComponent, isModule } from '../util';

// 内部使用map格式的schema， 更新也更新map，不更新tree；
export const useContentSchema = (schema: Ref<SchemaType>) => {
    // 根据name， 获取schema
    const schemaMap = ref({} as Record<string, NodeType>);

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

    provide('schemaMap', schemaMap);
}