<template>
    <q-page
        :class="{
            'q-py-md' : isMobile,
            'bg-nv-ultra-dark flex flex-center' : !isMobile
        }"
        style="height: 100vh;"
        >
        <q-card
            :class="{
                'no-padding flex column justify-between' : isMobile,
                'bg-nv-dark' : Dark.isActive,
                'bg-nv-light' : !Dark.isActive,
                'br-18' : !isMobile,
                'wp-90' : Screen.gt.sm,
                'wp-100' : isMobile
            }"
            :style="`${ !isMobile ? 'height: 80vh !important; contain: content;' : '' }`"
            flat
            class="no-margin hp-100">
            <div class="mb-20">
                <div
                    :class="{
                        'pt-20 flex items-center q-px-lg' : isMobile,
                        'flex justify-end q-px-xl q-pt-xl' : !isMobile
                    }"
                >
                    {{ $t('balance.totalBalance') }}
                    <q-icon
                        @click="changeViewBalance()"
                        class="fs-20 ml-5 mb-8"
                        :name="`img:icons/${getIcon}.svg`"
                    />
                    <h4
                        class="q-mx-none q-mb-none text-light wp-100 q-mt-sm"
                        :class="{
                            'text-nv-light' : Dark.isActive,
                            'text-nv-dark' : !Dark.isActive,
                            'text-right' : !isMobile
                        }"
                    >
                        {{ HideText(viewBalance, '$'.concat(getBalance)) }}
                    </h4>
                </div>

                <q-separator
                    size="0.3em"
                    :color="Dark.isActive ? 'nv-ultra-dark' : 'nv-light-grey'"
                    class="mt-20"
                />
            </div>

            <div
                :class="{
                    'hp-82 q-px-xl pb-90' : !isMobile
                }"
                :style="`${
                    isMobile ? `height: ${isMobile && screenSize.height > 667 ? (isMobile && screenSize.height > 760 ? '80' : '79') : '74'}vh;`
                    : ''
                }`"
                style="contain: content !important;"
                class="no-margin"
            >
                <div
                    :class="{
                        'q-px-lg' : isMobile
                    }"
                    class="flex justify-between mb-10">
                    <div class="flex flex-inline justify-start">
                        <div
                            :class="`
                                ${
                                    tab === 'cards'
                                    ? `bg-nv-${GetSuffix('secondary')}
                                    ${!Dark.isActive ? 'text-nv-light-accent' : 'text-white'}`
                                    : `text-nv-${GetSuffix(
                                        `${
                                            !Dark.isActive
                                            ? 'tertiary'
                                            : 'secondary'
                                        }`
                                    )}`
                                }
                            `"
                            class="flex items-center justify-center px-17 br-30 fs-12 ls-2 q-mr-sm cursor-pointer"
                            @click="changeView('cards')"
                        >
                            {{ $t('balance.cards') }}
                        </div>

                        <div
                            :class="`
                            ${
                                tab === 'wallets'
                                ? `bg-nv-${GetSuffix('secondary')}
                                ${!Dark.isActive ? 'text-nv-light-accent' : 'text-white'}`
                                : `text-nv-${GetSuffix(
                                    `${
                                        !Dark.isActive
                                        ? 'tertiary'
                                        : 'secondary'
                                    }`
                                )}`
                            }
                        `"
                            class="flex items-center justify-center px-17 br-30 fs-12 ls-2 cursor-pointer"
                            @click="changeView('wallets')"
                        >
                                    {{ $t('balance.wallets') }}
                        </div>
                    </div>

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

                <q-tab-panels
                    :class="`bg-nv-${Dark.isActive ? 'dark' : 'light'} text-nv-light-tertiary`"
                    v-model="tab"
                    swipeable
                    class="hp-100 no-margin no-padding"
                    animated>

                    <q-tab-panel
                        class="no-margin pb-30 q-px-none no-scroll hp-100"
                        name="cards"
                        :class="{
                            'q-px-lg' : isMobile
                        }"
                    >
                        <q-scroll-area
                            :thumb-style="{
                                right: '0px',
                                borderRadius: '9px',
                                backgroundColor: `${
                                    Screen.lt.md ? 'transparent' : (Dark.isActive ? '#016608' : '#52B301')
                                }`,
                                width: '3px',
                                opacity: '0.7'
                            }"
                            :barStyle="{
                                right: '0px',
                                borderRadius: '5px',
                                backgroundColor: `
                                    ${ Screen.lt.md ? 'transparent' : '#C4C4C4' }
                                `,
                                width: '3px',
                                opacity: '0.4'
                            }"
                            class="no-margin no-padding hp-100"
                        >
                            <q-scroll-observer @scroll="onScroll" />
                            <div
                                :class="{
                                    'flex flex-inline q-gutter-x-md' : !isMobile,
                                    'justify-between' : Screen.md
                                }"
                            >
                                <q-card
                                    v-for="(card, index) in cards"
                                    :key="index"
                                    flat
                                    class="mb-10 br-20 py-5 cursor-pointer"
                                    @click="$router.push(`/cards/${card.name.replace(' ', '-')}`)"
                                    :class="`bg-nv-${GetSuffix('tertiary')}-opacity ${ !isMobile ? (Screen.gt.lg ? 'wp-30' : 'wp-45') : '' }`"
                                >
                                    <q-card-section class="flex flex-inline" style="opacity: 1 !important;">
                                        <div
                                            :class="{
                                                'wp-100' : !isMobile,
                                                'wp-70' : isMobile
                                            }"
                                            class="flex flex-inline">
                                            <q-avatar
                                                :size="Screen.gt.sm ? '3em' : '3.9em'"
                                                :style="`background-color: ${Dark.isActive ? '#717A8A' : '#CDCDCD'};`"
                                            >
                                                <q-icon
                                                    size="1.5em"
                                                    v-show="card.type === 'VISA'"
                                                    :name="`img:icons/visa-${Dark.isActive ? 'light' : 'dark'}.svg`" />
                                            </q-avatar>

                                            <div class="ml-15">
                                                <h5
                                                    class="no-margin text-light"
                                                    :class="{
                                                        'text-nv-light' : Dark.isActive,
                                                        'text-nv-light-accent' : !Dark.isActive,
                                                        'fs-16' : Screen.gt.sm,
                                                        'fs-17' : Screen.lt.md
                                                    }"
                                                    >
                                                    {{ card.name }}
                                                </h5>
                                                <p
                                                    :class="{
                                                        'text-nv-light-tertiary' : Dark.isActive,
                                                        'text-nv-light-accent' : !Dark.isActive,
                                                        'fs-12' : Screen.gt.sm,
                                                        'fs-13' : Screen.lt.md
                                                    }"
                                                    class="no-margin q-mt-xs text-light">
                                                    {{ card.user }}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            :class="{
                                                'text-nv-light' : Dark.isActive,
                                                'text-nv-light-accent' : !Dark.isActive,
                                                'wp-30 flex items-center justify-end' : isMobile,
                                                'wp-100 text-right mt-40' : !isMobile
                                            }"
                                            class="fs-17">
                                            {{ HideText(viewBalance, '$'.concat(card.quantity)) }}
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </q-scroll-area>
                    </q-tab-panel>

                    <q-tab-panel
                        class="no-margin pb-30 q-px-none no-scroll hp-100"
                        name="wallets"
                        :class="{
                            'q-px-lg' : isMobile
                        }"
                    >
                        <q-scroll-area
                            :thumb-style="{
                                right: '0px',
                                borderRadius: '9px',
                                backgroundColor: `${
                                    Screen.lt.md ? 'transparent' : (Dark.isActive ? '#016608' : '#52B301')
                                }`,
                                width: '3px',
                                opacity: '0.7'
                            }"
                            :barStyle="{
                                right: '0px',
                                borderRadius: '5px',
                                backgroundColor: `
                                    ${ Screen.lt.md ? 'transparent' : '#C4C4C4' }
                                `,
                                width: '3px',
                                opacity: '0.4'
                            }"
                            class="no-margin no-padding hp-100"
                        >
                            <q-scroll-observer @scroll="onScroll" />
                            <div
                                :class="{
                                    'flex flex-inline q-gutter-x-md justify-around' : !isMobile,
                                    'justify-between' : Screen.md
                                }"
                            >
                                <q-card
                                    v-for="(currency, index) in wallets"
                                    :key="index"
                                    flat
                                    @click="$router.push(`/currency/${currency.acronym}`)"
                                    class="mb-10 br-20 py-5 cursor-pointer"
                                    :class="`bg-nv-${GetSuffix('tertiary')}-opacity ${ !isMobile ? (Screen.gt.md ? 'wp-30' : 'wp-45') : '' }`"
                                >
                                    <q-card-section class="flex flex-inline" style="opacity: 1 !important;">
                                        <div
                                            :class="{
                                                'wp-100' : !isMobile,
                                                'wp-70' : isMobile
                                            }"
                                            class="flex flex-inline">
                                            <q-avatar
                                                :size="Screen.gt.sm ? '3em' : '3.9em'"
                                                :style="`background-color: ${Dark.isActive ? '#717A8A' : '#CDCDCD'};`"
                                            >
                                                <span
                                                    :class="{ 'text-nv-light-accent' : !Dark.isActive }"
                                                    class="fs-15">
                                                    {{ currency.acronym }}
                                                </span>
                                            </q-avatar>

                                            <div class="ml-15">
                                                <h5
                                                    class="no-margin text-medium"
                                                    :class="{
                                                        'text-nv-light' : Dark.isActive,
                                                        'text-nv-dark' : !Dark.isActive,
                                                        'fs-16' : Screen.gt.sm,
                                                        'fs-17' : Screen.lt.md
                                                    }"
                                                    >
                                                    {{ currency.acronym }}
                                                </h5>
                                                <p
                                                    :class="{
                                                        'text-nv-light-tertiary' : Dark.isActive,
                                                        'text-nv-light-accent' : !Dark.isActive,
                                                        'fs-12' : Screen.gt.sm,
                                                        'fs-13' : Screen.lt.md
                                                    }"
                                                    class="no-margin q-mt-xs text-light">
                                                    {{ currency.name }}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            :class="{
                                                'text-nv-light' : Dark.isActive,
                                                'text-nv-light-accent' : !Dark.isActive,
                                                'wp-30 flex items-center justify-end' : isMobile,
                                                'wp-100 text-right mt-40' : !isMobile
                                            }"
                                            class="fs-17">
                                            {{ HideText(viewBalance, '$'.concat(currency.quantity)) }}
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </q-scroll-area>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
        </q-card>
    </q-page>
</template>

<script lang="ts" setup>
import { Screen, Dark } from 'quasar';
import { computed, ref, reactive, onUnmounted } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useSettingsStore } from 'stores/settings';
import HideText from '../../app/shared/helpers/HideText';
import { Router, useRouter } from 'vue-router';
import SecuritySettings from '../../Settings/pages/SecuritySettings.vue';

// CONSTANTS AND REFERENCES
const settingsStore = useSettingsStore();
const $router: Router = useRouter();

const search = ref<string>('');
const screenSize = reactive({
    height: 0,
    width: 0
});
const onFocus = ref<boolean>(false);
const tab = ref<string>('cards');

const cards = [
    {
        name: 'Mi tarjeta',
        user: 'User crypto',
        type: 'VISA',
        quantity: '4.565,00'
    },
    {
        name: 'Mi tarjeta 2',
        user: 'User crypto',
        type: 'VISA',
        quantity: '1.565,00'
    }
];

const wallets = [
    {
        acronym: 'BTC',
        name: 'Bitcoin',
        quantity: '0,00'
    },
    {
        acronym: 'USDT',
        name: 'Tether USDT',
        quantity: '1,00'
    },
    {
        acronym: 'ETH',
        name: 'Ethereum',
        quantity: '3.34,00'
    },
    {
        acronym: 'BTC',
        name: 'Bitcoin',
        quantity: '4.565,00'
    },
    {
        acronym: 'BTC',
        name: 'Bitcoin',
        quantity: '4.565,00'
    },
    {
        acronym: 'BTC',
        name: 'Bitcoin',
        quantity: '0,00'
    },
    {
        acronym: 'USDT',
        name: 'Tether USDT',
        quantity: '1,00'
    },
    {
        acronym: 'ETH',
        name: 'Ethereum',
        quantity: '3.34,00'
    }
];


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

const changeView = (view: string) =>
{
    tab.value = view;
    $router.replace({
        path: '/',
        query: {
            tab: view
        }
    });
    if (!settingsStore.showMobileMenu)
    {
        settingsStore.setShowMobileMenu(true);
    }
};

const onScroll = (info: any) =>
{
    if (info.direction === 'down')
    {
        settingsStore.setShowMobileMenu(false);
    }
    else
    {
        settingsStore.setShowMobileMenu(true);
    }
};

const onResize = (): void =>
{
    screenSize.height = window.innerHeight;
    screenSize.width = window.innerWidth;
};


// LIFECYCLE HOOKS
if ($router.currentRoute.value.query.tab)
{
    $router.replace({
        path: '/',
        query: {
            tab: $router.currentRoute.value.query.tab
        }
    });
}

onResize();
window.addEventListener('resize', onResize, { passive: true });

onUnmounted(() =>
{
    if (typeof window !== 'undefined')
    {
        window.removeEventListener('resize', onResize, true);
    }
});

settingsStore.setShowMobileMenu(true);

if ($router.currentRoute.value.query.tab)
{
    tab.value = $router.currentRoute.value.query.tab;
}
</script>
