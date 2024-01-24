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
.zsui-alert.ant-alert {
  border-radius: 6px!important;
  border: none!important;
  color: #1f2329!important;
}

.zsui-alert.ant-alert-netrual {
  background-color: #f5f6f7!important;
}

.zsui-alert.ant-alert-success {
  background-color: #d9f5d6!important;
}

.zsui-alert.ant-alert-warning {
  background-color: #feead2!important;
}

.zsui-alert.ant-alert-error {
  background-color: #fde2e2!important;
}

.zsui-alert.ant-alert-info {
  background-color: #e1eaff!important;
}
</style>
