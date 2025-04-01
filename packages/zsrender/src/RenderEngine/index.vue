<template>
    <Form>
        <div v-for="node in schema.content">
            <Node :node="node"></Node>
        </div>
    </Form>
</template>
  
<script setup lang="ts">
import { PropType, toRef } from 'vue';

import { useContentSchema } from './hooks/useContentSchema';
import { Form } from './components/Form/index';
import { Node } from './components/Renderer/index';
import { SchemaType, NodeType } from './interface';

const props = defineProps({
    schema: {
        type: Object as PropType<SchemaType>,
        default: () => {},
    },
    data: Object,
});

useContentSchema(toRef(props, 'schema'));
</script>