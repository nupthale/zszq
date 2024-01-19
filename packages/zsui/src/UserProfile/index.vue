<script setup lang="ts">
import { ref, computed } from 'vue';
import { Popover } from 'ant-design-vue';
import User from '../User/index.vue';
import { SizeEnum } from '../User/interface';
import propsDef from './props';

defineProps(propsDef);
const isShrink = ref(false);
const scrollRef = ref<HTMLDivElement | null>(null);
const headerRef = ref<HTMLDivElement | null>(null);
const bodyRef = ref<HTMLDivElement | null>(null);

const handleMouseWheel = (e: any) => {
    if (!headerRef.value || !scrollRef.value) {
        return;
    }

    const headerHeight = headerRef.value.clientHeight;

    // 向上滚动
    if (e.wheelDelta > 0) {
        if (isShrink.value) {
            scrollRef.value.style.marginTop = '0';
            isShrink.value = false;
        }
    } else {
        if (!isShrink.value) {
            // 移动header到上方，隐藏
            scrollRef.value.style.marginTop = `-${headerHeight - 48}px`;
            // 展示shrinkHeader
            isShrink.value = true;
        }
    }
}

const shrinkHeaderStyle = computed(() => ({
    opacity: isShrink.value ? '1' : 0,
    background: isShrink.value ? '#fff' : '#0000',
}));
</script>

<template>
    <Popover overlayClassName="zsui-profile-popover" trigger="click">
        <template #content>
            <div class="zsui-profile" @mousewheel="handleMouseWheel">
                <div ref="scrollRef" class="zsui-profile-scroll">
                    <div class="zsui-profile-header" ref="headerRef">
                        <div class="zsui-profile-headerBg"></div>
                        <div class="zsui-profile-base">
                            <div class="zsui-profile-avatar">
                                <User :showText="false" :username="username" :size="SizeEnum.XLARGE" />
                            </div>
                            <slot name="header" />
                            <div v-if="!$slots.header" class="zsui-profile-username">
                                {{ username }}
                            </div>
                        </div>
                    </div>
                    <div class="zsui-profile-shrinkHeader" :style="shrinkHeaderStyle">
                        <div class="zsui-profile-shrinkHeaderBg">
                            <img src="./background.png" />
                            <div class="zsui-profile-shrinkHeaderMask"></div>
                        </div>
                        <div class="zsui-profile-shrinkHeader-avatar">
                            <User :username="username" />
                        </div>

                    </div>
                    <div class="zsui-profile-body" ref="bodyRef">
                        <slot name="profile" />
                    </div>
                </div>
            </div>

        </template>
        <slot name="user" />
    </Popover>
</template>

<style>
/* Popover override */
.zsui-profile-popover {
    -webkit-font-smoothing: antialiased;

    padding: 0!important;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 24px 8px #1f23290a, 0 6px 12px #1f23290a, 0 4px 8px -8px #1f23290f;
}

.zsui-profile-popover .ant-popover-inner-content {
    padding: 0;
}

.zsui-profile-popover .ant-popover-content {
    border-radius: 8px;
}

.zsui-profile-popover .ant-popover-arrow {
    display: none;
}

.zsui-profile-popover .ant-popover-inner {
    padding: 0;
    box-shadow: none;
}

/* Profile */
.zsui-profile {
    width: 320px;
    height: 520px;
    overflow-y: overlay;
}

.zsui-profile::-webkit-scrollbar {
    display: none;
}

.zsui-profile-scroll {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    margin-top: 0;
    transition: all .4s cubic-bezier(.39,.58,.57,1);
}

.zsui-profile-body {
    flex: 1;
}

/* ProfileHeader */
.zsui-profile-header {
    position: relative;
    
}

.zsui-profile-headerBg {
    height: 136px;
    background-image: url('./background.jpeg');
    background-size: cover;
}

.zsui-profile-base {
    position: relative;

    margin: -44px 0 0 12px;
}

.zsui-profile-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 84px;
    border-radius: 100%;
    background: #fff;

    box-shadow: 0 4px 8px #1f23291a;
}

.zsui-profile-username {
    color: #1f2329;
    font-size: 20px;
    line-height: 26px;

    margin: 12px 0 0 3px;
}

/* ProfileShrinkHeader */
.zsui-profile-shrinkHeader {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;

    transition: all .4s cubic-bezier(.39, .58, .57, 1);
}

.zsui-profile-shrinkHeaderBg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    filter: blur(20px);
    opacity: .3;
}

.zsui-profile-shrinkHeaderBg img {
    width: 320px;
    height: 48px;
    object-fit: cover;
}

.zsui-profile-shrinkHeader-avatar {
    margin-left: 16px;
}

.zsui-profile-shrinkHeaderMask {
    position: absolute;
    top: 0;
    background-image: linear-gradient(180deg, #00000029, #0000000a);
    width: 100%;
    height: 100%;
}
</style>