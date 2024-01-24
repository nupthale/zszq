<template>
  <Alert class="zsui-alert" v-bind="$attrs">
    <!-- 插槽透传 -->
    <template v-for="(item, key) in $slots" :key="key" v-slot:[key]>
      <slot :name="key" />
    </template>
  </Alert>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-vue';
</script>

<style lang="less">
.zsui-alert {
  border-radius: 6px;
  border: none;
  color: #1f2329;
}

.zsui-alert.ant-alert-netrual {
  background: #f5f6f7;
}

.zsui-alert.ant-alert-success {
  background: #d9f5d6;
}

.zsui-alert.ant-alert-warning {
  background: #feead2;
}

.zsui-alert.ant-alert-error {
  background: #fde2e2;
}

.zsui-alert.ant-alert-info {
  background: #e1eaff;
}
</style>
