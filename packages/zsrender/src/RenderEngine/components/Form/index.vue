<template>
    <div>
        <slot />
    </div>
</template>
  
<script setup lang="ts">
import Schema from 'async-validator';
import { provide, ref } from 'vue';

const props = defineProps({
    model: Object,
    rules: Object,
});

const validator = new Schema(props.rules || {});

const errors = ref<{
    errors: Array<{
        field: string,
        message: string,
    }>,
    fields: Record<string, Array<{
        field: string,
        message: string,
    }>>,
} | null>(null);

provide('formErrors', errors);

const validate = async () => {
    try {
        await validator.validate(props.model || {});
        errors.value = null;

        return true;
    } catch(e) {
        errors.value = e as any;

        return false;
    }
};


defineExpose({ validate });
</script>