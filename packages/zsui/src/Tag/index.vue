<template>
  <div :class="['zsui-tag', `zsui-tag--${size}`]" :style="customStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import propsDef from './props';

const props = defineProps(propsDef);

const colorMap = {
  neutral: {
    color: '#646a73',
    background: '#1f23291a',
  },
  blue: {
    color: '#245bdb',
    background: '#3370ff33',
  },
  red: {
    color: '#d83931',
    background: '#f54a4533',
  },
  green: {
    color: '#237b19',
    background: '#34c72433',
  },
  orange: {
    color: '#b26206',
    background: '#f803',
  },
};

const customStyle = computed(() => colorMap[props.color] || colorMap.neutral);
</script>

<style lang="less">
.zsui-tag {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;

  padding: 0 6px;
  border-radius: 4px;

  white-space: nowrap;
}

.zsui-tag--default {
  height: 24px;
  line-height: 24px;
}

.zsui-tag--small {
  font-size: 12px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
}
</style>
