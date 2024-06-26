<script setup lang="ts">
import { computed } from 'vue';

// iconfont
import './iconfont/iconfont.js';


const props = defineProps({
  icon: String,
  size: String,
})

const icon = computed(() => `#icon-icon_${props.icon}`);

const style = computed(() => ({
  width: props.size,
  height: props.size,
}));

</script>

<template>
  <svg class="es-iconfont" :style="style" aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<style>
.es-iconfont {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>