<script setup lang="ts">
import { toRef, computed } from 'vue';
import Icon from '../__shared/Icon/index.vue';

import { 
    getFileSuffix, 
    isPdf, 
    isWord, 
    isImage,
    isExcel,
    isPPT,
    isAudio,
    isVideo,
    isZip,
} from './util';

const props = defineProps({
    fileName: String,
});

const fileNameRef = toRef(props, 'fileName');

const fileIcon = computed(() => {
    const name = fileNameRef.value || '';

    if (isPdf(name)) {
        return 'file-pdf_colorful1';
    }

    if (isWord(name)) {
        return 'file-word_colorful1';
    }

    if (isImage(name)) {
        return 'file-image_colorful1';
    }

    if (isExcel(name)) {
        return 'file-sheet_colorful1';
    }

    if (isPPT(name)) {
        return 'file-ppt_colorful1';
    }

    if (isAudio(name)) {
        return 'file-audio_colorful1';
    }

    if (isVideo(name)) {
        return 'file-video_colorful1';
    }

    if (isZip(name)) {
        return 'file-zip_colorful1';
    }

    return 'file-unknow_colorful1';
});
</script>

<template>
    <Icon class="zsui-fileIcon" :icon="fileIcon" />
</template>

<style scoped>
.zsui-fileIcon {
    font-size: 28px;
}
</style>