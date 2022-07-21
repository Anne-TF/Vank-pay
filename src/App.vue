<template>
    <router-view />
</template>

<script lang="ts" setup>
import { Dark, Platform, useQuasar } from 'quasar';
import { onMounted, watchEffect } from 'vue';
import { useSettingsStore } from 'stores/settings';
import { useI18n } from 'vue-i18n';
const { locale, availableLocales } = useI18n({ useScope: 'global' });

const $q = useQuasar();

// STORE
const settingsStore = useSettingsStore();

watchEffect(() =>
{
    if (Dark.isActive && Platform.is.android && Platform.is.cordova)
    {
        // @ts-ignore
        StatusBar.styleLightContent();
    }
    else if (!Dark.isActive && Platform.is.android && Platform.is.cordova)
    {
        // @ts-ignore
        StatusBar.styleDefault();
    }
});

watchEffect(() =>
{
    locale.value = settingsStore.Lang ?? 'es-ES';
});

onMounted(() =>
{
    if (Platform.is.android && Platform.is.cordova)
    {
        // @ts-ignore
        StatusBar.overlaysWebView(true);
        // @ts-ignore
        StatusBar.backgroundColorByHexString('rgba(255,255,255,0)');
    }

    settingsStore.setDarkMode(<boolean> settingsStore.DarkMode ?? 'auto');

    const deviceLang = availableLocales.find(l => l === $q.lang.getLocale());

    const defaultLang =  settingsStore.Lang ?? 'es-ES';

    settingsStore.setLang(deviceLang ?? defaultLang);

    locale.value = <string> settingsStore.Lang;
});

</script>
