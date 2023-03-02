<template>
  <component :is="layout"> <router-view /> </component>
</template>

<script lang="ts" setup>
import { Screen } from 'quasar';
import { computed } from 'vue';
import DesktopMainLayoutVue from './DesktopMainLayout.vue';
import MobileMainLayout from './MobileMainLayout.vue';


const layout = computed(() =>
{
    return Screen.gt.sm ? DesktopMainLayoutVue : MobileMainLayout;
});
</script>