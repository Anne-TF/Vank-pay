<template>
    <div
        class="q-py-md"
        style="height: 100%; contain: content;">
        <div
            :class="{
                'q-py-md' : isMobile,
                'mt-5' : !isMobile
            }"
            class="q-px-md">
            <div class="wp-100 flex q-mb-xs justify-end" v-if="!isMobile">
                <q-icon
                    color="nv-light-tertiary"
                    @click="$emit('close')"
                    class="cursor-pointer"
                    size="1.8em"
                    name="cancel"
                />
            </div>
            <div class="q-py-sm flex flex-inline justify-between items-center">
                <q-icon
                    color="nv-light-tertiary"
                    v-if="isMobile"
                    @click="$router.back()"
                    class="cursor-pointer"
                    size="2em"
                    name="arrow_back"
                />
                <div
                    :class="{
                        'wp-90' : !isMobile
                    }"
                    class="text-center">
                    <h5
                        class="no-margin fs-18"
                        :class="{
                            'text-nv-light' : Dark.isActive,
                            'text-nv-dark' : !Dark.isActive,
                        }"
                    >
                        {{ $t('notifications.title') }}
                    </h5>
                </div>
                <q-icon
                    class="fs-20 cursor-pointer"
                    style="color:  #939BA6;"
                    @click="$router.push('/notifications/manage')"
                    name="fa-solid fa-pen-to-square"
                />
            </div>
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile,
                'q-px-md' : !isMobile
            }"
            class="hide-scrollbar q-mt-md"
            :style="`
                height: 87vh; overflow-y: auto;
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
import NotificationComponent from '../components/NotificationComponent.vue';
import { useI18n } from 'vue-i18n';

// CONSTANTS
const $q = useQuasar();
const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const { t } = useI18n({ useScope: 'global' });

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
</script>
