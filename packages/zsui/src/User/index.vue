<template>
  <span class="zsui-user">
    <avatar :size="avatarSize" class="zsui-user__avatar" :style="avatarStyle">
      {{ slicedName }}
    </avatar>
    <span v-if="showText" class="zsui-user__namewrap" :style="textStyle">
      <span class="zsui-user__name">{{ username }}</span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

import { Avatar } from 'ant-design-vue';

import { nameToColor } from './util';

import { SizeEnum } from './interface';

const props = defineProps({
  username: String,
  showText: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
  },
});

const avatarSizeMap = {
  [SizeEnum.SMALL]: 20,
  [SizeEnum.DEFAULT]: 24,
  [SizeEnum.XLARGE]: 80,
};

const fontSizeMap = {
  [SizeEnum.SMALL]: 12,
  [SizeEnum.DEFAULT]: 14,
  [SizeEnum.XLARGE]: 24,
};

const sizeRef = computed(() => (props.size as SizeEnum) || SizeEnum.DEFAULT);
const slicedName = computed(() => props.username?.slice(-2));
const avatarSize = computed(() => avatarSizeMap[sizeRef.value]);
const textStyle = computed(() => ({
  fontSize: `${fontSizeMap[sizeRef.value]}px`,
  lineHeight: `${avatarSizeMap[sizeRef.value]}px`,
}));

const avatarStyle = computed(() => ({
  fontSize: `${fontSizeMap[sizeRef.value]}px`,
  background: nameToColor(props.username),
}));
</script>

<style>
.zsui-user {
  display: inline-flex;
  align-items: center;
  vertical-align: top;

  height: 22px;
}

.zsui-user__avatar {
  display: inline-flex;
  align-items: center;
  color: #fff;
  border: none;
}

.zsui-user__namewrap {
  display: flex;
  margin-left: 4px;
  max-width: 100px;
}

.zsui-user__name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
