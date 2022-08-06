<template>
    <router-view v-if="!splashLoading"/>
    <q-inner-loading :showing="splashLoading"
        :class="{
            'bg-nv-dark' : Dark.isActive,
            'bg-nv-ligth' : !Dark.isActive
        }"
    >
        <q-img
            alt="Qory pay logo"
            src="~assets/icons/QoriPay.svg"
            style="position:fixed;"
            width="10em"
        >
        </q-img>
    </q-inner-loading>
</template>

<script lang="ts" setup>
import { Dark, Platform, useQuasar } from 'quasar';
import { onMounted, ref, watchEffect } from 'vue';
import { useSettingsStore } from 'stores/settings';
import { useI18n } from 'vue-i18n';

// Capacitor Plugins
import { StatusBar, Style } from '@capacitor/status-bar';
import { Keyboard, KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const { locale, availableLocales } = useI18n({ useScope: 'global' });

const $q = useQuasar();

const splashLoading = ref<boolean>(true);

// STORE
const settingsStore = useSettingsStore();

setTimeout(() =>
{
    splashLoading.value = false;
}, 3000 + 1500);

watchEffect(async() =>
{
    if (Dark.isActive && Platform.is.android && Platform.is.capacitor)
    {
        await StatusBar.setStyle({ style: Style.Dark });
        await Keyboard.setStyle({ style: KeyboardStyle.Dark });
        // NavigationBar.backgroundColorByHexString('#1D2229', true);
    }
    else if (!Dark.isActive && Platform.is.android && Platform.is.capacitor)
    {
        await StatusBar.setStyle({ style: Style.Light });
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
        StatusBar.setOverlaysWebView({ overlay: true });
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
