<template>
    <div
        class="q-py-md"
        style="height: 100%; contain: content;">
        <div
            :class="{
                'q-py-md' : isMobile,
                'mt-5' : !isMobile
            }"
            class="q-px-md flex flex-inline justify-center items-center">
            <div
                :class="{
                    'justify-end' : !isMobile,
                    'justify-start' : isMobile
                }"
                class="wp-100 flex mb-5">
                <q-icon
                    color="nv-light-tertiary"
                    @click="$emit('close')"
                    v-if="!isMobile"
                    class="cursor-pointer"
                    size="1.8em"
                    name="cancel"
                />
                 <q-icon
                    v-if="isMobile"
                    class="cursor-pointer wp-10"
                    @click="$router.back()"
                    size="2em"
                    name="arrow_back"
                />
            </div>
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
                        'text-nv-light-accent' : !Dark.isActive,
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
            class="flex flex-inline justify-between items-center q-px-lg q-py-md text-nv-light-tertiary"
        >
            {{ $t(`transactions.${withdrawalOrDeposit}`) }}
            <q-input
                outlined
                v-model="search"
                @focus="onFocus = true"
                @blur="onFocus = false"
                :class="{
                    'wp-35' : !onFocus,
                    'wp-40' : onFocus,
                    'ultra-dense-input--dark' : Dark.isActive,
                    'ultra-dense-input--light' : !Dark.isActive
                }"
                color="transparent"
                rounded
            >
                <template v-slot:prepend>
                    <span
                        class="iconify fs-18"
                        :class="{
                            'text-nv-dark' : !Dark.isActive
                        }"
                        data-icon="arcticons:xiaoyuan-search"></span>
                </template>
            </q-input>
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile,
                'q-px-md' : !isMobile
            }"
            class="hide-scrollbar q-mt-xs"
            :style="`
                height: 80vh; overflow-y: auto;
            `">
            <q-expansion-item
                v-for="(option, index) in options"
                :key="index"
                class="q-mb-md"
                :header-class="`bg-nv-${GetSuffix('tertiary')}-opacity q-px-md q-py-lg br-13`"
            >
                <template v-slot:header>
                    <q-item-section avatar>
                        <q-avatar color="lv-light-tertiary" text-color="white">
                            <span
                                :data-icon="option.icon"
                                class="fs-38 iconify"
                                :style="`
                                    ${
                                        option.color ?
                                        `color: ${option.color};` :
                                        ''
                                    }
                                `"
                            />
                        </q-avatar>
                    </q-item-section>

                    <q-item-section
                        :class="{
                            'text-nv-light' : Dark.isActive,
                            'text-nv-light-accent' : !Dark.isActive,
                        }"
                    >
                       {{ $t(`${option.titleKey}`) }}
                    </q-item-section>
                </template>

                <q-card
                    :class="{
                        'bg-nv-dark' : Dark.isActive,
                        'bg-nv-light' : !Dark.isActive
                    }"
                >
                    <q-card-section>
                        <q-item v-for="(opt) in option.items" :key="opt">
                            <q-item-section>
                                {{ opt }}
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
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
import { useRouter } from 'vue-router';

// CONSTANTS
const $q = useQuasar();
const authStore = useAuthStore();
const $router = useRouter();
const settingsStore = useSettingsStore();
const { t } = useI18n({ useScope: 'global' });

const options = [
    {
        titleKey: 'transactions.cryptos',
        icon: 'logos:bitcoin',
        color: null,
        items: [
            'item1',
            'item2'
        ]
    },
    {
        titleKey: 'transactions.bss',
        icon: 'emojione:flag-for-venezuela',
        color: null,
        items: [
            'Pago móvil',
            'item2'
        ]
    },
    {
        titleKey: 'transactions.usd',
        icon: 'cryptocurrency:usdc',
        color: '#24b97a',
        items: [
            'item1',
            'item2'
        ]
    },
    {
        titleKey: 'transactions.soles',
        icon: 'emojione:flag-for-argentina',
        color: null,
        items: [
            'item1',
            'item2'
        ]
    }
];

// REFS
const onFocus = ref<boolean>(false);
const search = ref<string>('');

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
const getBalance = computed(() => '80.60');
const viewBalance = computed(() => settingsStore.ViewBalance);
const getIcon = computed(() =>
{
    return !viewBalance.value ? `eye-${Dark.isActive ? 'dark' : 'light'}` : `eye-closed-${Dark.isActive ? 'dark' : 'light'}`;
});
const withdrawalOrDeposit = computed(() =>
{
    const aux = $router.currentRoute.value.path.split('/');
    return aux.find((e: string) => e === 'deposit' || e === 'withdraw')?.concat('Methods');
});

// FUNCTIONS

const changeViewBalance = () =>
{
    settingsStore.setBalance(!viewBalance.value);
};

</script>
