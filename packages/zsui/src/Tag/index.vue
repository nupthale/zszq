<template>
  <div :class="['zsui-tag']" :style="customStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Button } from 'ant-design-vue';

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

  height: 24px;
  line-height: 24px;
  padding: 0 6px;
  border-radius: 4px;

  white-space: nowrap;
}
</style>
