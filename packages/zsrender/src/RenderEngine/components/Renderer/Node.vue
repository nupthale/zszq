<template>
    <div>
        <template v-if="isModule(node)">
            <div v-if="node.title" :class="node.titleClass">{{ node.title }}</div>
            <template v-for="(item, index) in node.content" :key="index">
                <NodeRender :node="item" />
            </template>
        </template>

        <Field :node="node" v-if="isField(node)" />
        <CustomComponent :node="node" v-if="isComponent(node)" />
    </div>
</template>
  
<script setup lang="ts">
import { PropType } from 'vue';

import Field from './Field.vue';
import CustomComponent from './Component.vue';

import { NodeType } from '../../interface';
import { isModule, isField, isComponent } from '../../util';

defineOptions({
    name: 'NodeRender'
});

defineProps({
    node: Object as PropType<NodeType>,
});
</script>