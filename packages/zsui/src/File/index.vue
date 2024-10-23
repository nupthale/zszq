<template>
    <div class="zsui-file">
        <div class="zsui-file__main">
            <FileIcon :fileName="fileName" class="zsui-file__icon" />
            <div class="zsui-file__info">
                <div class="zsui-file__namewrap">
                    <div class="zsui-file__name">
                        <EllipsisText :title="fileName" :lineClamp="1">
                            <span>{{ fileName }}</span>
                        </EllipsisText>
                    </div> 
                    <slot name="nameExtra" class="zsui-file__nameExtra" />
                </div>
                <slot name="extra"></slot>
            </div>
        </div>
        <slot name="actions" class="zsui-file__actions"></slot>

        <div v-if="showPercentBar" class="zsui-file__percentbar">
            <div class="zsui-file__percent" :style="{ width: `${percent || 0}%` }"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  import EllipsisText from '../EllipsisText/index.vue';
  import FileIcon from './FileIcon.vue';

  defineProps({
    fileName: String,
    showPercentBar: Boolean,
    percent: Number,
  });

  const fileType = computed(() => {

  });
</script>

<style>
.zsui-file {
    position: relative;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;

    border: 1px solid rgba(187, 191, 196, 0.5);
    border-radius: 6px;
    padding: 12px 16px 12px 12px;

    font-size: 14px;
    overflow: hidden;
}

.zsui-file:hover {
    border-color: rgb(51, 112, 255);
}

.zsui-file__main {
    flex: 1;

    display: flex;
    align-items: center;
}

.zsui-file__actions {
    flex-shrink: 0;
}

.zsui-file__icon {
    flex-shrink: 0;
    margin-right: 10px;
}

.zsui-file__info {
    flex: 1;
    margin-right: 6px;
}

.zsui-file__namewrap {
    display: flex;
    align-items: center;
}

.zsui-file__name {
    display: flex;
    align-items: center;

    margin-right: 6px;
}

.zsui-file__nameExtra {
    flex-shrink: 0;
}

.zsui-file__percentbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgb(222, 224, 227);
}

.zsui-file__percent {
    width: 0%;
    height: 3px;
    transition: .3s linear;
    background: rgb(51, 112, 255);
}
</style>