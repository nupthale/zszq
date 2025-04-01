<template>
    <div>
        <div v-for="node in schema.content">
            <Node :node="node"></Node>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { PropType, toRef } from 'vue';

import { useForm } from './hooks/useForm';
import { Node } from './components/Renderer/index';
import { SchemaType } from './interface';

const props = defineProps({
    schema: {
        type: Object as PropType<SchemaType>,
        default: () => {},
    },
    values: Object,
});

const context = useForm(toRef(props, 'schema'), toRef(props, 'values'));

defineExpose(context);
</script>