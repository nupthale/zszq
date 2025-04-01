<template>
    <div>
        <Module :node="node" v-if="isModule(node)" />
        <Field :node="node" v-if="isField(node)" />
        <CustomComponent :node="node" v-if="isComponent(node)" />
    </div>
</template>
  
<script setup lang="ts">
import { PropType } from 'vue';

import Field from './Field.vue';
import CustomComponent from './Component.vue';
import Module from './Module.vue';

import { NodeType } from '../../interface';
import { isModule, isField, isComponent } from '../../util';

defineOptions({
    name: 'NodeRender'
});

defineProps({
    node: Object as PropType<NodeType>,
});
</script>