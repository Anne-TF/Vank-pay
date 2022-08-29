<template>
    <div
        class="q-py-md"
        style="height: 100%; contain: content;">
        <div
            class="q-px-md"
            :class="{
                'q-py-md' : isMobile,
                'mt-5' : !isMobile
            }">
            <div class="wp-100 flex q-mb-xs justify-end" v-if="!isMobile">
                <q-icon
                    color="nv-light-tertiary"
                    @click="$emit('close')"
                    class="cursor-pointer"
                    size="1.8em"
                    name="cancel"
                />
            </div>
            <div class="flex flex-inline justify-between items-center q-py-sm">
                <q-icon
                    color="nv-light-tertiary"
                    @click="$router.back()"
                    class="cursor-pointer"
                    size="2em"
                    name="arrow_back"
                />
                <div class="text-center">
                    <h5
                        class="no-margin fs-18"
                        :class="{
                            'text-nv-light' : Dark.isActive,
                            'text-nv-dark' : !Dark.isActive,
                        }"
                    >
                        {{ $t('notifications.manageNotifications') }}
                    </h5>
                </div>
                <span
                    :class="`text-nv-${GetSuffix('accent')}`"
                    class="fs-14 cursor-pointer text-medium"
                >
                    {{ $t('buttons.done') }}
                </span>
            </div>
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile,
                'q-px-md' : !isMobile
            }"
            :style="`
                height: 88vh; overflow-y: auto;
            `">
            <q-scroll-area
                :thumb-style="{
                    right: '0px',
                    borderRadius: '9px',
                    backgroundColor: 'transparent',
                    width: '3px',
                    opacity: '0.7'
                }"
                :barStyle="{
                    right: '0px',
                    borderRadius: '5px',
                    backgroundColor: 'transparent',
                    width: '3px',
                    opacity: '0.4'
                }"
                class="hp-100 q-pt-md"
            >
                <q-scroll-observer @scroll="onScroll" />

                <NotificationComponent :hasIcon="(item%2 !== 0)" v-for="item in 15" :key="item" />
            </q-scroll-area>
        </div>

        <transition
            mode="out-in"
            enter-active-class="animated fadeInUp"
            :duration='{ enter: 200, leave: 200 }'
            leave-active-class="animated fadeOutDown">

            <div
                v-show="showBtns"
                :class="{
                    'bg-nv-dark' : Dark.isActive,
                    'bg-nv-light' : !Dark.isActive
                }"
                class="fixed-bottom flex flex-inline justify-between q-px-lg q-pt-sm">
                <q-btn
                    no-caps
                    unelevated
                    class="wp-48 br-15 fs-13 py-10"
                    :color="`nv-${GetSuffix('tertiary')}`"
                >
                    {{ $t('buttons.markAsRead') }}
                </q-btn>

                <q-btn
                    no-caps
                    unelevated
                    class="wp-48 br-15 fs-13 py-10"
                    :color="`nv-${GetSuffix('primary')}`"
                >
                    {{ $t('buttons.cleanAll') }}
                </q-btn>
            </div>
        </transition>
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

// REFERENCES

const showBtns = ref<boolean>(true);

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);


// FUNCTIONS

const onScroll = (info: any) =>
{
    if (info?.direction === 'down')
    {
        showBtns.value = false;
    }
    else
    {
        setTimeout(() =>
        {
            showBtns.value = true;
        }, 50);
    }
};

</script>
