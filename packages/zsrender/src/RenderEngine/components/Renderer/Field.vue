<template>
    <div v-if="isField(node)">
        <component :is="field" v-bind="fieldProps">
            <component 
                :is="component" 
                v-bind="node.componentProps"
            /> 
        </component>  
    </div>
</template>
  
<script setup lang="ts">
import { PropType, computed, inject, Ref } from 'vue';

import { FieldNode, NodeType } from '../../interface';
import { isField } from '../../util';

import { context } from '../../../context';

const props = defineProps({
    node: Object as PropType<NodeType>,
});

const schemaMapRef = inject('schemaMap') as Ref<Record<string, NodeType>>;

const fieldProps = computed(() => {
    const node = props.node as FieldNode;

    const schemaMap = schemaMapRef.value;
    const schema = (schemaMap[node.name] || {}) as FieldNode;

    return {
        ...(schema.fieldProps || {}),
        name: schema.name,
    };
});


const component = computed(() => {
    const componentsMap = context.componentsMap;

    if (isField(props.node)) {
        const node = props.node as FieldNode;

        const schemaMap = schemaMapRef.value;
        const schema = (schemaMap[node.name] || {}) as FieldNode;

        return componentsMap[schema.fieldType];
    }
});

const field = context.fieldComponent;
</script>