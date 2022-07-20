<template>
    <router-view />
</template>

<script lang="ts" setup>
import { Dark, Platform } from 'quasar';
import { onMounted, watchEffect } from 'vue';

watchEffect(() =>
{
    if (Dark.isActive && Platform.is.android)
    {
        StatusBar.styleLightContent();
    }
    else if (!Dark.isActive && Platform.is.android)
    {
        StatusBar.styleDefault();
    }
});

onMounted(() =>
{
    const aux = process.env.APP_NAME === 'Qoripay' ? true : 'auto';
    Dark.set(aux);
    if (Platform.is.android)
    {
        StatusBar.overlaysWebView(true);
        StatusBar.backgroundColorByHexString('rgba(255,255,255,0)');
    }
});

</script>
