<template>
  <q-img
    spinner-color="nv-primary"
    spinner-size="70px"
    :width="size"
    :src="getUrl"
  />
</template>

<script setup>
import { computed } from 'vue';
import { Dark } from "quasar";

defineProps({
    size: {
        type: String,
        default: '120px'
    }
});

const getUrl = computed(() =>
{
    return new URL(`../../assets/icons/${process.env.APP_NAME}-${Dark.isActive ? 'dark' : 'light'}.svg`, import.meta.url).href;
});
</script>
