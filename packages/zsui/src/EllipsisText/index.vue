<template>
  <ExpandableText v-if="expandable" v-bind="$props">
    <slot />
  </ExpandableText>
  <TipText v-else v-bind="$props">
    <slot />
  </TipText>
</template>

<script setup lang="ts">
import ExpandableText from './ExpandableText/index.vue';
import TipText from './TipText/index.vue';

import propsDef from './props';

defineProps(propsDef);
</script>
