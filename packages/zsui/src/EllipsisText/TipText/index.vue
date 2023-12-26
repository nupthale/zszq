<template>
  <Tooltip v-if="hasOverflowChildren" :title="title" destroy-tooltip-on-hide>
    <div :style="containerStyle" class="zsui-ellipsis-text">
      <slot />
    </div>
  </Tooltip>

  <div
    v-else
    ref="targetRef"
    :style="containerStyle"
    class="zsui-ellipsis-text"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { Tooltip } from 'ant-design-vue';

import propsDef from './props';

const props = defineProps(propsDef);

const hasOverflowChildren = ref(false);

const containerStyle = computed(() => ({
  lineClamp: props.lineClamp || 1,
}));

const targetRef = ref(null);

const handleUpdateOverflow = () => {
  const el = targetRef.value;

  if (!el) {
    return;
  }

  if (!hasOverflowChildren.value && el.scrollHeight > el.clientHeight) {
    hasOverflowChildren.value = true;
  } else {
    hasOverflowChildren.value = false;
  }
};

onMounted(() => {
  handleUpdateOverflow();
});

watch(
  () => [props.lineClamp],
  async () => {
    hasOverflowChildren.value = false;

    await nextTick();

    handleUpdateOverflow();
  },
);
</script>

<style scoped lang="scss" src="./index.scss"></style>
