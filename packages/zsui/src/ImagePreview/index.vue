<script setup lang="ts">
import { defineProps, Teleport, ref, computed, watch } from 'vue';
import { Tooltip } from 'ant-design-vue';

import Loading from '../Loading/index.vue';

import Icon from '../__shared/Icon/index.vue';

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    filename: {
        type: String,
        default: '-'
    }
});

const emit = defineEmits(['close', 'download']);

const isLoading = ref(true);

const MIN_SCALE = 0.1;
const MAX_SCALE = 3;

const isMouseMove = ref(false);
const scale = ref(1);
const rotate = ref(0);
const translate3d = ref([0, 0]);

const imageStyle = computed(() => ({
    transform: `rotate(${rotate.value}deg) translate3d(${translate3d.value[0]}px, ${translate3d.value[1]}px, 1px) scale(${scale.value})`,
}));

watch([props.src], () => {
    isLoading.value = true;

    const $img = document.createElement('img');
    $img.src = props.src;

    $img.onload = () => {
        isLoading.value = false;
    };
}, {
    immediate: true,
});

const scaleUp = () => scale.value = Math.min(scale.value + 0.1, MAX_SCALE);
const scaleDown = () => scale.value = Math.max(scale.value - 0.1, MIN_SCALE);
const scaleReset = () => {
    scale.value = 1;
    rotate.value = 0;
    translate3d.value = [0, 0];
};

const handleWheel = (e) => {
    if (e.deltaY > 0) {
        scaleDown();
    } else {
        scaleUp();
    }
}

const handleRotate = () => rotate.value = (rotate.value - 90) % 360;

const handleMouseDown = () => {
    isMouseMove.value = true;
}

const handleMouseMove = (e) => {
    if (!isMouseMove.value) return;

    translate3d.value = [
        translate3d.value[0] + e.movementX,
        translate3d.value[1] + e.movementY,
    ];
}

const handleMouseUp = () => {
    isMouseMove.value = false;
}
</script>

<template>
    <Teleport to="body">
        <div class="zsui-imagePreview">
            <div class="zsui-imagePreviewHeader">
                <div class="zsui-imagePreviewHeader__title">
                    {{ filename }}
                </div>
                <div class="zsui-imagePreviewHeader__close" @click="emit('close')">
                    <Icon icon="close_outlined" />
                </div>
            </div>

            <div v-show="isLoading">
                <Loading></Loading>
            </div>
            <div
                v-show="!isLoading"
                class="zsui-imagePreviewBody"
                @touchstart="handleMouseDown"
                @touchend="handleMouseUp"
                @touchmove="handleMouseMove"

                @wheel="handleWheel"

                @mousedown="handleMouseDown" 
                @mousemove="handleMouseMove"
                @mouseup="handleMouseUp"
            >
                <img
                    
                    :src="src" 
                    class="zsui-imagePreview__image" 
                    :style="imageStyle"
                />
            </div>

            <div class="zsui-imagePreviewActionBar">
                <Tooltip title="放大">
                    <div class="zsui-imagePreviewAction" @click="scaleUp">
                        <Icon icon="zoom-out_outlined" />
                    </div>
                </Tooltip>
                <div class="zsui-imagePreviewPercentage">
                    {{ parseInt(scale * 100 + '') }}%
                </div>
                <Tooltip title="缩小">
                    <div class="zsui-imagePreviewAction" @click="scaleDown">
                        <Icon icon="zoom-in_outlined" />
                    </div>
                </Tooltip>
                <Tooltip title="还原">
                    <div class="zsui-imagePreviewAction" @click="scaleReset">
                        <Icon icon="original_outlined" />
                    </div>
                </Tooltip>

                <div class="zsui-imagePreviewAction__divider"></div>

                <Tooltip title="旋转">
                    <div class="zsui-imagePreviewAction" @click="handleRotate">
                        <Icon icon="rotate_outlined" />
                    </div>
                </Tooltip>
                <Tooltip title="下载">
                    <div class="zsui-imagePreviewAction" @click="emit('download')">
                        <Icon icon="download_outlined" />
                    </div>
                </Tooltip>
            </div>
        </div>
    </Teleport>
</template>

<style>
.zsui-imagePreview {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #08090ac7;

    z-index: 1000;
}

.zsui-imagePreviewHeader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 80px;
    padding-left: 24px;
}

.zsui-imagePreviewHeader__title {
    color: #fff;
}

.zsui-imagePreviewHeader__close {
    position: absolute;
    top: 18px;
    right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    color: #fff;
    width: 40px;
    height: 40px;

    background: rgba(31, 35, 41, 0.4);
    cursor: pointer;
    border-radius: 6px;
}

.zsui-imagePreviewHeader__close:hover {
    background: rgba(31, 35, 41, 0.8);
    box-shadow: rgba(31, 35, 41, 0.1) 0px 4px 8px;
}

.zsui-imagePreviewActionBar {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    height: 32px;

    background: hsla(0,0%,4%,.9);
    backdrop-filter: blur(24px) saturate(140%);
    opacity: 0.9;
    backdrop-filter: blur(28.995px);
    padding: 8px 12px;
    border-radius: 16px;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.08);

    color: #fff;
    font-size: 16px;
    user-select: none;
}

.zsui-imagePreviewAction__divider {
    border-right: 1px solid rgb(100, 106, 115);
    height: 16px;
    margin: 8px;
}

.zsui-imagePreviewAction {
    margin: 0px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 24px;
    height: 24px;

    border-radius: 2px;
    cursor: pointer;
}

.zsui-imagePreviewAction:hover {
    background: rgba(255, 255, 255, 0.2);
}

.zsui-imagePreviewPercentage {
    width: 40px;
    font-size: 14px;
    text-align: center;
}

.zsui-imagePreviewBody {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: grab;
}

.zsui-imagePreview__image {
    max-width: 100%;
    max-height: 100%;
    transform: scale(1) rotate(0deg) translate3d(0px, 0px, 1px);
   
    user-select: none;
    -webkit-user-drag: none;
}
</style>