<template>
    <div>
        <div v-if="node?.title" :class="node?.titleClass">{{ node?.title }}</div>
        <div :class="node?.contentClass" v-for="(item, index) in node?.content" :key="index">
            <Node :node="item" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { PropType } from 'vue';

import Node from './Node.vue';
import { ModuleNode } from '../../interface';

defineProps({
    node: Object as PropType<ModuleNode>,
});
</script>