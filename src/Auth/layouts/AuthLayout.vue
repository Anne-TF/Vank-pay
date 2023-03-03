<template>
    <q-layout class="no-scroll" style="overflow-x: hidden !important;" view="lHh Lpr lFf">
        <div class="bg-nv-light-primary" style="height: 100%; width: 50%; position: absolute; right: 0;" />
        <q-page-container
            :class="{ 'light--bg' : !Dark.isActive, 'dark--bg' : Dark.isActive }"
            :style="`height: ${isMobile ? '100vmax' : '100vh'} !important;`">
            <router-view v-slot="{ Component, route }" >
            <Transition
                :appear-active-class="route.meta.enterAnimation"
                :leave-active-class="route.meta.leaveAnimation"
                :duration="{
                  enter: 100,
                  leave: 200
                }"
                appear
              >
              <component style="height: 100% !important;" :is="Component" />
            </Transition>
            </router-view>
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
    background-color: #F5F5F5 !important;
}

.dark--bg {
    background-color: #161B22 !important;
}

.fade-enter-from, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.9s ease-out;
}
</style>
