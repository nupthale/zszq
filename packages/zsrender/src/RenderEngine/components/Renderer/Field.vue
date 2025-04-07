<template>
    <component :is="field" v-bind="fieldBindingProps">
        <component 
            :is="component" 
            v-bind="componentBindingProps"
        /> 
    </component>  
</template>
  
<script setup lang="ts">
import { PropType, computed, inject, toRef, watchEffect, ref } from 'vue';
import { get } from 'lodash-es';

import { ContextType, FieldNode, LifeCycleEnum, NodeType } from '../../interface';

import { useLifeCycleEffect } from '../../hooks/useLifeCycleEffect';
import { components } from '../../../components';

const props = defineProps({
    node: Object as PropType<FieldNode>,
});

const componentBindingProps = ref({});
const fieldBindingProps = ref({});

const context = inject('context') as ContextType;
const schemaMapRef = toRef(() => context.schemaMap.value);
const formModelRef = toRef(() => {
    return context.formModel.value || {};
});
const formErrorRef = toRef(() => {
    return context.errors.value;
});

const fieldProps = computed(() => {
    const node = props.node as FieldNode;

    const schemaMap = schemaMapRef.value;
    const schema = get(schemaMap, node.name, {}) as FieldNode;

    return {
        ...(schema.fieldProps || {}),
        name: schema.name,
    };
});


const component = computed(() => {
    const componentsMap = components.componentsMap;

    const node = props.node as FieldNode;

    const schemaMap = schemaMapRef.value;
    const schema = get(schemaMap, node.name, {}) as FieldNode;

    return componentsMap[schema.fieldType];
});

const field = components.fieldComponent;

useLifeCycleEffect(
    context,
    [LifeCycleEnum.FIELD_MOUNT, LifeCycleEnum.FIELD_UNMOUNT],
);

watchEffect(() => {
    const name = fieldProps.value?.name;
    const value = get(formModelRef.value, name, undefined);

    const valueBindingProps = {
        value,
        'onUpdate:value': (value: any) => {
            context.updateFieldValue(fieldProps.value?.name, value)
        },
        // wot-design-uni
        modelValue: value,
        'onUpdate:modelValue': (value: any) => {
            context.updateFieldValue(fieldProps.value?.name, value)
        },
    };

    componentBindingProps.value = {
        ...props.node?.componentProps,
        ...valueBindingProps,
    };
});

watchEffect(() => {
    const errors = get(formErrorRef.value?.fields, fieldProps.value?.name, []);

    const validateProps = {
        error: errors?.[0]?.message || undefined,
    };


    fieldBindingProps.value = {
        ...fieldProps.value,
       ...validateProps,
    };
});
</script>