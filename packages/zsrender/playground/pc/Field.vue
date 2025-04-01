<template>
    <div :class="['formItem', layout === 'vertical' ? 'vertical' : '']">
      <div class="formItem__label">
        <div class="truncate mr-1">{{ label }}</div>
        <div v-if="required" class="formItem__required">*</div>
      </div>
      <div class="flex-1 w-full">
        <slot />

        <div v-if="error && layout !== 'vertical'" class="formItem__error">
            {{ error }}
        </div>
      </div> 

      <div v-if="error && layout === 'vertical'" class="formItem__error">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { PropType, inject, computed } from 'vue';
  
  const props = defineProps({
    layout: String as PropType<'vertical' | 'horizontal'>,
    required: Boolean,
    label: String,
    name: String,
  });

  const formErrors = inject('formErrors', null);

  const name = computed(() => {
    return props.name;
  });

  const error = computed(() => {
    // @ts-ignore
    return formErrors?.value?.fields?.[name.value]?.[0]?.message || '';
  });
  </script>
  
  <style scoped lang="scss">
  .formItem {
    display: flex;
    align-items: baseline;
  }

  .formItem.vertical {
    flex-direction: column;
  }

  .formItem__label {
    display: flex;

    max-width: 200rpx;
    margin-right: 32rpx;
  }

  .formItem.vertical .formItem__label {
    display: flex;

    width: 100%;
    max-width: none;
    margin-right: 0;
  }
  
  .formItem__required, .formItem__error {
    color: #f54a45;
  }
  </style>
  