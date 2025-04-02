<template>
    <Module :node="node" v-if="isModule(node) && isVisible(node)" />
    <Field :node="node" v-else-if="isField(node) && isVisible(node)" />
    <CustomComponent :node="node" v-else-if="isComponent(node) && isVisible(node)" />
</template>
  
<script setup lang="ts">
import { PropType } from 'vue';

import Field from './Field.vue';
import CustomComponent from './Component.vue';
import Module from './Module.vue';

import { NodeType } from '../../interface';
import { isModule, isField, isComponent, isVisible, isEditable } from '../../util';

defineOptions({
    name: 'NodeRender'
});

defineProps({
    node: Object as PropType<NodeType>,
});
</script>