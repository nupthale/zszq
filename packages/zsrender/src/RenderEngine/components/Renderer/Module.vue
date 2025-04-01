<template>
    <div v-if="isModule(node)">
        <div v-if="node.title" :class="node.titleClass">{{ node.title }}</div>
        <div :class="node.contentClass" v-for="(item, index) in node.content" :key="index">
            <Node :node="item" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { PropType } from 'vue';

import Node from './Node.vue';
import { NodeType } from '../../interface';
import { isModule } from '../../util';

defineProps({
    node: Object as PropType<NodeType>,
});
</script>