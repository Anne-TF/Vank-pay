<template>
  <Vue3Lottie
    :animationData="animationJSON"
    :height="animationSize"
    :loop="loop"
    :width="animationSize"
  />
</template>

<script lang="ts">
import 'vue3-lottie/dist/style.css';
import { Vue3Lottie } from 'vue3-lottie';

export default {
    components: {
        Vue3Lottie
    },
    props: {
        animationSize: {
            type: Number,
            default: 100,
            required: true
        },
        loop: {
            type: Boolean,
            default: false
        },
        animationJSON: {
            type: Object,
            default: () => null,
            required: true
        }
    }
};
</script>
