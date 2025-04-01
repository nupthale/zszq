<template>
    <div>
        <component 
            :is="component" 
            v-bind="node?.componentProps"
        >
            <Node v-for="subNode in node?.content" :node="subNode"></Node>
        </component>
    </div>
</template>
  
<script setup lang="ts">
import { PropType, computed, inject } from 'vue';

import { ComponentNode, ContextType, LifeCycleEnum } from '../../interface';

import Node from './Node.vue';
import { components } from '../../../components';
import { useLifeCycleEffect } from '../../hooks/useLifeCycleEffect';

const props = defineProps({
    node: Object as PropType<ComponentNode>,
});

const context = inject('context') as ContextType;

const componentsMap = components.componentsMap;
const component = computed(() => {
    return componentsMap[props.node?.componentType!];
})

useLifeCycleEffect(
    context,
    [LifeCycleEnum.COMPONENT_MOUNT, LifeCycleEnum.COMPONENT_UNMOUNT],
);
</script>