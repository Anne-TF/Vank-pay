<template>
    <div
        class="q-py-md"
        style="height: 100%; contain: content;">
        <div
            :class="{
                'q-py-md' : isMobile,
                'mt-5' : !isMobile
            }"
            class="q-px-md q-py-sm flex flex-inline justify-center items-center">
            <div class="text-nv-light-tertiary">
                {{ $t('balance.totalBalance') }}
                <q-icon
                    @click="changeViewBalance()"
                    class="fs-20 ml-5 mb-8"
                    :name="`img:icons/${getIcon}.svg`"
                />
                <h4
                    class="q-mx-none q-mb-none text-light wp-100 q-mt-sm text-center"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
                        'text-right' : !isMobile
                    }"
                >
                    {{ HideText(viewBalance, '$'.concat(getBalance)) }}
                </h4>
            </div>
        </div>

        <q-separator
            size="0.09em"
            :color="Dark.isActive ? 'nv-dark-tertiary' : 'nv-light-grey'"
            class="mt-20"
        />

        <div
            :class="{
                'q-px-lg' : isMobile,
                'q-px-md' : !isMobile
            }"
            class="hide-scrollbar q-mt-lg"
            :style="`
                height: 81vh; overflow-y: auto;
            `">
            <NotificationComponent :hasIcon="(item%2 !== 0)" v-for="item in 15" :key="item" />
        </div>
    </div>
 </template>

<script lang="ts" setup>
import { Screen, Dark, useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useAuthStore } from 'stores/auth';
import { useSettingsStore } from 'stores/settings';
import NotificationComponent from '../../Notifications/components/NotificationComponent.vue';
import { useI18n } from 'vue-i18n';
import HideText from '../../app/shared/helpers/HideText';

// CONSTANTS
const $q = useQuasar();
const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const { t } = useI18n({ useScope: 'global' });


// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
const getBalance = computed(() => '80.60');
const viewBalance = computed(() => settingsStore.ViewBalance);
const getIcon = computed(() =>
{
    return !viewBalance.value ? `eye-${Dark.isActive ? 'dark' : 'light'}` : `eye-closed-${Dark.isActive ? 'dark' : 'light'}`;
});

// FUNCTIONS

const changeViewBalance = () =>
{
    settingsStore.setBalance(!viewBalance.value);
};

</script>