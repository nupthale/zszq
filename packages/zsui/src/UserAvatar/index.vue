<template>
  <span class="zsui-userAvatar">
    <avatar :size="avatarSize" class="zsui-userAvatar__avatar" :style="avatarStyle">
      {{ slicedName }}
    </avatar>
    <span v-if="showText" class="zsui-userAvatar__namewrap" :style="textStyle">
      <span class="zsui-userAvatar__name">{{ username }}</span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Avatar } from 'ant-design-vue';

import { nameToColor, getChineseNameInitial } from './util';

import propsDef from './props';
import { SizeEnum } from './interface';

const props = defineProps(propsDef);

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
const slicedName = computed(() => getChineseNameInitial(props.username));
const avatarSize = computed(() => avatarSizeMap[sizeRef.value]);
const textStyle = computed(() => ({
  fontSize: `${fontSizeMap[sizeRef.value]}px`,
  lineHeight: `${avatarSizeMap[sizeRef.value]}px`,
}));

const avatarStyle = computed(() => ({
  fontSize: `12px`,
  background: nameToColor(props.username),
}));
</script>

<style>
.zsui-userAvatar {
  display: inline-flex;
  align-items: center;
  vertical-align: top;

  height: 22px;
}

.zsui-userAvatar__avatar {
  display: inline-flex;
  align-items: center;
  color: #000000e5!important;
  border: none;
  font-size: 12px;
  font-weight: 400;
  font-family: "Styrene Display", sans-serif -apple-system,BlinkMacSystemFont,Helvetica Neue,Tahoma,PingFang SC,Microsoft Yahei,Arial,Hiragino Sans GB,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
}

.zsui-userAvatar__namewrap {
  display: flex;
  margin-left: 4px;
  max-width: 100px;
}

.zsui-userAvatar__name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
