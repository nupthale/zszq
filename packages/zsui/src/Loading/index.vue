<template>
    <div class="zsui-loading">
        <LottieAnimation 
            :animation-data="LoadingJSON"
            :auto-play="true"
            :loop="true"
            :speed="1"
            ref="anim" 
        />
    </div>
</template>

<script setup lang="ts">
  import { LottieAnimation } from 'lottie-web-vue';
  import LoadingJSON from './loading.json';

</script>

<style>
.zsui-loading {
    width: 68px;
}
</style>