<template>
    <router-view v-if="!splashLoading"/>
    <q-inner-loading :showing="splashLoading"
        :class="{
            'bg-nv-dark' : Dark.isActive,
            'bg-nv-light' : !Dark.isActive
        }"
    >
        <q-img
            alt="Muza logo"
            :src="getUrl"
            style="position:fixed;"
            width="10em"
            height="10em"
        >
        </q-img>
    </q-inner-loading>
</template>

<script lang="ts" setup>
import { Dark, Platform, useQuasar } from 'quasar';
import {computed, onMounted, ref, watchEffect} from 'vue';
import { useSettingsStore } from 'stores/settings';
import { useAuthStore } from 'stores/auth';
import { useI18n } from 'vue-i18n';

// Capacitor Plugins
import { StatusBar, Style } from '@capacitor/status-bar';
import { Keyboard, KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const { locale, availableLocales } = useI18n({ useScope: 'global' });

const $q = useQuasar();
const getUrl = computed(() =>
{
    return new URL(`./assets/icons/muza-${$q.dark.isActive ? 'dark' : 'light'}.svg`, import.meta.url).href;
});

const splashLoading = ref<boolean>(true);

// STORE
const settingsStore = useSettingsStore();
const authStore = useAuthStore();

setTimeout(() =>
{
    splashLoading.value = false;
}, 3000 + 1500);

watchEffect(async() =>
{
    if (Dark.isActive && Platform.is.android && Platform.is.capacitor && !authStore.FullAuth)
    {
        await StatusBar.setOverlaysWebView({ overlay: true });
        await StatusBar.setStyle({ style: Style.Dark });
        await Keyboard.setStyle({ style: KeyboardStyle.Dark });
        // NavigationBar.backgroundColorByHexString('#1D2229', true);
    }
    else if (!Dark.isActive && Platform.is.android && Platform.is.capacitor && !authStore.FullAuth)
    {
        await StatusBar.setOverlaysWebView({ overlay: true });
        await StatusBar.setStyle({ style: Style.Light });
        await Keyboard.setStyle({ style: KeyboardStyle.Light });
        // NavigationBar.backgroundColorByHexString('#fff', false);
    }
});

watchEffect(async() =>
{
    if (Dark.isActive && Platform.is.android && Platform.is.capacitor && authStore.FullAuth)
    {
        await StatusBar.setOverlaysWebView({ overlay: false });
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: '#1D2229' });
        await Keyboard.setStyle({ style: KeyboardStyle.Dark });
        // NavigationBar.backgroundColorByHexString('#1D2229', true);
    }
    else if (!Dark.isActive && Platform.is.android && Platform.is.capacitor && authStore.FullAuth)
    {
        await StatusBar.setOverlaysWebView({ overlay: false });
        await StatusBar.setStyle({ style: Style.Light });
        await StatusBar.setBackgroundColor({ color: '#FFFFFF' });
        await Keyboard.setStyle({ style: KeyboardStyle.Light });
        // NavigationBar.backgroundColorByHexString('#fff', false);
    }
});

watchEffect(() =>
{
    locale.value = settingsStore.Lang ?? 'es-ES';
});

onMounted(() =>
{
    if (Platform.is.android && Platform.is.capacitor)
    {
        if (!authStore.FullAuth)
        {
            StatusBar.setOverlaysWebView({ overlay: true });
        }
        else
        {
            StatusBar.setOverlaysWebView({ overlay: false });
        }
    }

    settingsStore.setDarkMode(<boolean> settingsStore.DarkMode ?? 'auto');

    const deviceLang = <string> availableLocales.find(l => l === $q.lang.getLocale());

    const defaultLang =  settingsStore.Lang ?? 'es-ES';

    settingsStore.setLang(deviceLang ?? defaultLang);

    locale.value = <string> settingsStore.Lang;
});

</script>

<style lang="scss">
@keyframes scale {
    from { transform: none; }
    50% { transform: scale(1.5); }
    to { transform: none; }
}
.scale {
    animation: scale 3s infinite;
    transform-origin: center;
}
.dark--card {
    background-color: #1d2229;
}
</style>
