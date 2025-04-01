<template>
    <div v-if="isComponent(node)">
        <component 
            :is="component" 
            v-bind="node.componentProps"
        >
            <Node v-for="subNode in node.content" :node="subNode"></Node>
        </component>
    </div>
</template>
  
<script setup lang="ts">
import { PropType, computed } from 'vue';

import { NodeType } from '../../interface';
import { isComponent } from '../../util';

import Node from './Node.vue';
import { context } from '../../../context';

const props = defineProps({
    node: Object as PropType<NodeType>,
});

const componentsMap = context.componentsMap;
const component = computed(() => {
    if (isComponent(props.node)) {
        return componentsMap[props.node.componentType];
    }
})
</script>