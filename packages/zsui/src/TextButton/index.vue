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

<style lang="less">
.ant-btn {
  &.zsui-text-button {
    display: inline-flex;
    align-items: center;

    padding: 2px 4px;
    height: auto;
    border-radius: 6px;
  }
}

.zsui-text-button.ant-btn-sm {
  display: inline-flex;
  align-items: center;

  font-size: 12px;
}

.zsui-text-button {
  &.zsui-text-button--primary {
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

  &.zsui-text-button--warning {
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

  &:disabled {
    color: #bbbfc4;
    background: none;

    &:hover,
    &:active {
      color: #bbbfc4;
      background: none;
    }
  }
}
</style>
