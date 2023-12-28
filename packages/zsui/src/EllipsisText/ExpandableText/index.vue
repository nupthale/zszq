<template>
  <div class="zsui-ellipsis-text--expandable" :style="containerStyle">
    <template v-if="hasOverflowChildren">
      <div v-if="isFold" class="zsui-ellipsis-text__fold" :style="foldStyle">
        <div class="zsui-ellipsis-text__foldWrap" :style="foldWrapStyle">
          <span class="zsui-ellipsis-text__foldAction">
            {{ ellipsisSymbol }}
            <TextButton
              size="small"
              type="primary"
              class="zsui-ellipsis-text__foldButton"
              :style="foldButtonStyle"
              @click="isFold = false"
              >展开</TextButton
            >
          </span>
          <slot />
        </div>
      </div>
      <div v-else class="zsui-ellipsis-text__unfold">
        <slot />

        <TextButton
          size="small"
          type="primary"
          class="zsui-ellipsis-text__foldButton"
          :style="foldButtonStyle"
          @click="isFold = true"
          >收起</TextButton
        >
      </div>
    </template>
    <div v-else ref="targetRef">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick, computed, onUpdated } from 'vue';
import { Button } from 'ant-design-vue';
import TextButton from '../../TextButton/index.vue';

import propsDef from './props';

/**
 * Const
 */
const lineHeightMap: { [key: number]: number } = {
  12: 20,
  14: 22,
};

/**
 * Props
 */
const props = defineProps(propsDef);
const lineHeight = computed(() => lineHeightMap[props.fontSize]);

/**
 * State
 */
const hasOverflowChildren = ref(false);
const isFold = ref(true);
const targetRef = ref(null);

/**
 * Styles
 */
const containerStyle = computed(() => ({
  fontSize: `${props.fontSize}px`,
  lineHeight: `${lineHeight.value}px`,
}));

const foldStyle = computed(() => ({
  maxHeight: `${lineHeight.value * props.lineClamp}px`,
}));

const foldWrapStyle = computed(() => ({
  lineHeight: `${lineHeight.value}px`,
}));

const foldButtonStyle = computed(() => ({
  fontSize: `${props.fontSize}px`,
  lineHeight: `${lineHeight.value}px`,
  height: `${lineHeight.value}px`,
}));

const beforeStyle = computed(() => `calc(100% - ${lineHeight.value})`);

const boxShadowStyle = computed(
  () =>
    `inset calc(100px - 999vw) calc(${lineHeight.value} - 999vw) 0 0 ${props.overlayColor}`,
);

const style = {
  fontSize: `${props.fontSize}px`,
  lineHeight: `${lineHeight.value}px`,
  maxHeight: `${lineHeight.value * props.lineClamp}px`,
  foldBtnLH: `${lineHeight.value - 4}px`,
};

const update = () => {
  // 组件挂载之后先根据实际高度计算是否有行溢出的情况
  hasOverflowChildren.value =
    Boolean(targetRef.value) &&
    targetRef.value.offsetHeight / lineHeight.value > props.lineClamp;
};

onMounted(() => {
  update();
});

watch(
  () => [props.lineClamp, props.fontSize],
  async () => {
    hasOverflowChildren.value = false;

    await nextTick();

    update();
  },
);
</script>

<style lang="scss">
.zsui-ellipsis-text--expandable {
  display: inline-flex;
  position: relative;
}

.zsui-ellipsis-text__fold {
  display: flex;
  overflow: hidden;
}

.zsui-ellipsis-text__foldWrap {
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  text-justify: inter-ideograph;
  word-break: break-all;

  &:before {
    content: ' ';
    height: v-bind(beforeStyle);
    float: right;
  }

  &:after {
    position: absolute;
    content: '';
    width: 999vw;
    height: 999vw;

    box-shadow: v-bind(boxShadowStyle);
    margin-left: -100px;
    z-index: 2;
  }
}

.zsui-ellipsis-text__foldAction {
  position: relative;
  float: right;
  clear: both;
  display: inline-flex;
  z-index: 1;
}

.zsui-ellipsis-text__foldButton {
  margin: 0 0 0 4px;
  display: flex;
  align-items: center;
}

.zsui-ellipsis-text__unfold {
  text-align: justify;
  text-justify: inter-ideograph;
  word-break: break-all;
  line-break: anywhere;
}
</style>
