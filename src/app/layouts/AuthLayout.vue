<template>
    <q-layout style="overflow-x: hidden !important;" view="lHh Lpr lFf">
        <q-page-container
            :class="{ 'light--bg' : !Dark.isActive }"
            :style="`height: ${isMobile ? '100vmax' : '100vh'} !important;`">
            <span
              :style="`
                top: -40px;
                right: -80px;
                `"
                class="balls"
                :class="{ 'light--balls' : !Dark.isActive, 'dark--balls' : Dark.isActive }"
            ></span>
             <span
              :style="`
                top: 201px;
                left: -120px;
                `"
                class="balls"
                :class="{ 'light--balls' : !Dark.isActive, 'dark--balls' : Dark.isActive }"
            ></span>
            <router-view style="height: 100% !important;" />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed } from 'vue';

const isMobile = computed(() => Screen.lt.md);
</script>

<style lang="scss" scoped>
.light--bg {
    background-color: #F8EFA3 !important;
}

.light--balls {
    background-color: #D9D9D9;
}

.dark--balls {
    background-color: #016608;
}

.balls {
    height: 220px;
    width: 220px;
    border-radius: 50%;
    position: absolute;
}

.balls:nth-child(1) {
    animation: pulse1 10s linear infinite;
}

.balls:nth-child(2) {
    animation: pulse2 10s linear infinite;
}

@keyframes pulse1 {
  0% {
    -webkit-transform: scale(1.17);
    transform: scale(1.17);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.17);
    transform: scale(1.17);
  }
}

@keyframes pulse2 {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.17);
    transform: scale(1.17);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
