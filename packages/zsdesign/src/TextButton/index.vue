<template>
  <Button type="text" :class="['zsui-text-button', className]">
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Button } from 'ant-design-vue';

import propsDef from './props';

const props = defineProps(propsDef);

const className = computed(() => `zsui-text-button--${props.type}`);
</script>

<style scoped>
.zsui-text-button {
  display: inline-flex;
  align-items: center;

  padding: 2px 4px;
  height: 26px;
}

.zsui-text-button.ant-btn-sm {
  display: inline-flex;
  align-items: center;

  padding: 2px 4px;
  height: 20px;
  font-size: 12px;
}

.zsui-text-button--primary {
  color: #3370ff;

  &:hover {
    color: #3370ff;
    background-color: rgba(51, 112, 255, 0.08);
  }

  &:active {
    color: #3370ff;
    background-color: rgba(51, 112, 255, 0.2);
  }
}

.zsui-text-button--warning {
  color: #f54a45;

  &:hover {
    color: #f54a45;
    background-color: rgba(245, 74, 69, 0.08);
  }

  &:active {
    color: #f54a45;
    background-color: rgba(245, 74, 69, 0.2);
  }
}
</style>
