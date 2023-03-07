<template>
    <q-page
        :class="{
            'q-py-md' : isMobile,
            'flex flex-center br-18' : !isMobile,
            'bg-nv-light' : !Dark.isActive,
            'bg-nv-dark' : Dark.isActive
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
                        :name="`img:/icons/${getIcon}.svg`"
                    />
                    <h4
                        class="q-mx-none q-mb-none text-light wp-100 q-mt-sm"
                        :class="{
                            'text-nv-light' : Dark.isActive,
                            'text-black' : !Dark.isActive,
                            'text-right' : !isMobile
                        }"
                    >
                        {{ HideText(viewBalance, '$'.concat(getBalance)) }}
                    </h4>
                </div>

                <q-separator
                    size="0.3em"
                    :color="Dark.isActive ? 'nv-ultra-dark' : 'grey-4'"
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
                                    tab === 'accounts'
                                    ? `text-bold bg-nv-${GetSuffix('secondary')}
                                    ${!Dark.isActive ? 'text-nv-light-accent' : 'text-white'}`
                                    : `text-nv-${GetSuffix(
                                        `${
                                            !Dark.isActive
                                            ? 'tertiary'
                                            : 'light-grey'
                                        }`
                                    )}`
                                }
                            `"
                            class="flex items-center justify-center px-17 br-30 fs-12 q-mr-sm cursor-pointer"
                            @click="changeView('accounts')"
                        >
                            {{ $t('balance.accounts') }}
                        </div>

                        <div
                            :class="`
                                ${
                                    tab === 'cards'
                                    ? `text-bold bg-nv-${GetSuffix('secondary')}
                                    ${!Dark.isActive ? 'text-nv-light-accent' : 'text-white'}`
                                    : `text-nv-${GetSuffix(
                                        `${
                                            !Dark.isActive
                                            ? 'tertiary'
                                            : 'light-grey'
                                        }`
                                    )}`
                                }
                            `"
                            class="flex items-center justify-center px-17 br-30 fs-12 q-mr-sm cursor-pointer"
                            @click="changeView('cards')"
                        >
                            {{ $t('balance.cards') }}
                        </div>

                        <div
                            :class="`
                            ${
                                tab === 'wallets'
                                ? `text-bold bg-nv-${GetSuffix('secondary')}
                                ${!Dark.isActive ? 'text-nv-light-accent' : 'text-white'}`
                                : `text-nv-${GetSuffix(
                                    `${
                                        !Dark.isActive
                                        ? 'tertiary'
                                        : 'light-grey'
                                    }`
                                )}`
                            }
                        `"
                            class="flex items-center justify-center px-17 br-30 fs-12 cursor-pointer"
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
                                    'text-nv-dark' : !Dark.isActive,
                                    'text-white' : $q.dark.isActive
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
                    <!-- ALL PANEL --->
                    <q-tab-panel
                        class="no-margin pb-30 q-px-none no-scroll hp-100"
                        name="all"
                        :class="{
                            'q-px-lg' : isMobile
                        }"
                    >
                        <q-scroll-area
                            :thumb-style="{
                                right: '0px',
                                borderRadius: '9px',
                                backgroundColor: `${
                                    Screen.lt.md ? 'transparent' : (Dark.isActive ? '#DACB04' : '#f9eb37')
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
                            <div class="wp-98 q-ml-sm">
                                <q-expansion-item
                                    class="wp-100"
                                    default-opened
                                    :header-class="`br-30 ${!$q.dark.isActive ? 'text-black' : ''}`"
                                    :label="$t('balance.accounts')"
                                >
                                    <q-list class="q-mt-md">
                                        <q-item
                                            v-for="(account, index) in accounts"
                                            class="q-mb-md br-40 q-px-lg"
                                            :class="{
                                                'text-black' : !$q.dark.isActive
                                            }"
                                            :style="`background-color: rgba(53, 62, 73, ${$q.dark.isActive ? '.5' : '.08'}) !important;`"
                                            :key="index">
                                            <q-item-section avatar>
                                                <q-avatar :style="`${!$q.dark.isActive ? 'border: 1px solid black;' : ''}`" color="nv-light-primary" size="35px" text-color="black">
                                                    <q-icon class="ml-2" :name="account.currency === 'USD' ? 'attach_money' : 'euro'" size="30px" />
                                                </q-avatar>
                                            </q-item-section>

                                            <q-item-section>
                                                <q-item-label>{{ account.name }}</q-item-label>
                                            </q-item-section>

                                            <q-item-section :class="{ 'text-black' : !$q.dark.isActive }" side>
                                                {{ HideText(viewBalance, '$'.concat(account.amount)) }}
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-expansion-item>

                                <q-expansion-item
                                    class="wp-100 q-mt-md"
                                    default-opened
                                    :header-class="`br-30 ${!$q.dark.isActive ? 'text-black' : ''}`"
                                    :label="$t('balance.cards')"
                                >
                                    <q-list class="q-mt-md">
                                        <q-item
                                            v-for="(card, index) in cards"
                                            :class="{
                                                'text-black' : !$q.dark.isActive
                                            }"
                                            class="q-mb-md br-40 q-px-lg"
                                            :style="`background-color: rgba(53, 62, 73, ${$q.dark.isActive ? '.5' : '.08'}) !important;`"
                                            :key="index">
                                            <q-item-section avatar>
                                                <q-avatar
                                                :size="Screen.gt.sm ? '3em' : '3.9em'"
                                                :style="`background-color: ${Dark.isActive ? '#161B22' : '#f9eb37'}; ${!$q.dark.isActive ? 'border: 1px solid black;' : ''}`">
                                                <q-icon
                                                    size="1.4em"
                                                    class="mr-2"
                                                    v-show="card.type === 'VISA'"
                                                    :name="`img:/icons/visa-${Dark.isActive ? 'light' : 'dark'}.svg`" />
                                            </q-avatar>
                                            </q-item-section>

                                            <q-item-section>
                                                <q-item-label>{{ card.name }}</q-item-label>
                                            </q-item-section>

                                            <q-item-section :class="{ 'text-black' : !$q.dark.isActive }" side>
                                                {{ HideText(viewBalance, '$'.concat(card.quantity)) }}
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-expansion-item>

                                <q-expansion-item
                                    class="wp-100 q-mt-md"
                                    default-opened
                                    :header-class="`br-30 ${!$q.dark.isActive ? 'text-black' : ''}`"
                                    :label="$t('balance.wallets')"
                                >
                                    <q-list class="q-mt-md">
                                        <q-item
                                            v-for="(wallet, index) in wallets"
                                            class="q-mb-md br-40 q-px-lg"
                                            :class="{
                                                'text-black' : !$q.dark.isActive
                                            }"
                                            :style="`background-color: rgba(53, 62, 73, ${$q.dark.isActive ? '.5' : '.08'}) !important;`"
                                            :key="index">
                                            <q-item-section avatar>
                                                <q-avatar
                                                    :size="Screen.gt.sm ? '3em' : '3.9em'"
                                                    class="bg-transparent">
                                                 <span
                                                     :data-icon="wallet.logo"
                                                     class="fs-30 iconify" />
                                                </q-avatar>
                                            </q-item-section>

                                            <q-item-section>
                                                <q-item-label>{{ wallet.acronym }}</q-item-label>
                                                <q-item-label
                                                    :class="{ 'text-nv-light-tertiary' : Dark.isActive, 'text-nv-dark' : !Dark.isActive, }"
                                                    caption>{{ wallet.name }}
                                                </q-item-label>
                                            </q-item-section>

                                            <q-item-section :class="{ 'text-black' : !$q.dark.isActive }" side>
                                                {{ HideText(viewBalance, '$'.concat(wallet.quantity)) }}
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-expansion-item>
                            </div>
                        </q-scroll-area>
                    </q-tab-panel>
                    <!-- ACCOUNTS PANEL --->
                    <q-tab-panel
                        class="no-margin pb-30 q-px-none no-scroll hp-100"
                        name="accounts"
                        :class="{
                            'q-px-lg' : isMobile
                        }"
                    >
                        <q-scroll-area
                            :thumb-style="{
                                right: '0px',
                                borderRadius: '9px',
                                backgroundColor: `${
                                    Screen.lt.md ? 'transparent' : (Dark.isActive ? '#DACB04' : '#f9eb37')
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
                            <q-list class="q-mt-sm">
                                <q-item
                                    v-for="(account, index) in accounts"
                                    class="q-mb-md br-40 q-px-lg"
                                    :class="{
                                                'text-black' : !$q.dark.isActive
                                            }"
                                    :style="`background-color: rgba(53, 62, 73, ${$q.dark.isActive ? '.5' : '.08'}) !important;`"
                                    :key="index">
                                    <q-item-section avatar>
                                        <q-avatar :style="`${!$q.dark.isActive ? 'border: 1px solid black;' : ''}`" color="nv-light-primary" size="35px" text-color="black">
                                            <q-icon class="ml-2" :name="account.currency === 'USD' ? 'attach_money' : 'euro'" size="30px" />
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>{{ account.name }}</q-item-label>
                                    </q-item-section>

                                    <q-item-section :class="{ 'text-black' : !$q.dark.isActive }" side>
                                        {{ HideText(viewBalance, '$'.concat(account.amount)) }}
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-scroll-area>
                    </q-tab-panel>
                    <!-- CARDS PANEL --->
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
                                    Screen.lt.md ? 'transparent' : (Dark.isActive ? '#DACB04' : '#f9eb37')
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
                            <q-list class="q-mt-sm">
                                <q-item
                                    v-for="(card, index) in cards"
                                    :class="{
                                        'text-black' : !$q.dark.isActive
                                    }"
                                    class="q-mb-md br-40 q-px-lg"
                                    :style="`background-color: rgba(53, 62, 73, ${$q.dark.isActive ? '.5' : '.08'}) !important;`"
                                    :key="index">
                                    <q-item-section avatar>
                                        <q-avatar
                                            :size="Screen.gt.sm ? '3em' : '3.9em'"
                                            :style="`background-color: ${$q.dark.isActive ? '#161B22' : '#f9eb37'} ${!$q.dark.isActive ? 'border: 1px solid black;' : ''}`">
                                            <q-icon
                                                size="1.4em"
                                                class="mr-3"
                                                v-show="card.type === 'VISA'"
                                                :name="`img:/icons/visa-${Dark.isActive ? 'light' : 'dark'}.svg`" />
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>{{ card.name }}</q-item-label>
                                    </q-item-section>

                                    <q-item-section :class="{ 'text-black' : !$q.dark.isActive }" side>
                                        {{ HideText(viewBalance, '$'.concat(card.quantity)) }}
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-scroll-area>
                    </q-tab-panel>
                    <!-- WALLETS PANEL --->
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
                                    Screen.lt.md ? 'transparent' : (Dark.isActive ? '#DACB04' : '#f9eb37')
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
                            <q-list class="q-mt-sm">
                                <q-item
                                    v-for="(wallet, index) in wallets"
                                    class="q-mb-md br-40 q-px-lg"
                                    :class="{
                                                'text-black' : !$q.dark.isActive
                                            }"
                                    :style="`background-color: rgba(53, 62, 73, ${$q.dark.isActive ? '.5' : '.08'}) !important;`"
                                    :key="index">
                                    <q-item-section avatar>
                                        <q-avatar
                                            :size="Screen.gt.sm ? '3em' : '3.9em'"
                                            class="bg-transparent">
                                                 <span
                                                     :data-icon="wallet.logo"
                                                     class="fs-30 iconify" />
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>{{ wallet.acronym }}</q-item-label>
                                        <q-item-label
                                            :class="{ 'text-nv-light-tertiary' : Dark.isActive, 'text-nv-dark' : !Dark.isActive, }"
                                            caption>{{ wallet.name }}
                                        </q-item-label>
                                    </q-item-section>

                                    <q-item-section :class="{ 'text-black' : !$q.dark.isActive }" side>
                                        {{ HideText(viewBalance, '$'.concat(wallet.quantity)) }}
                                    </q-item-section>
                                </q-item>
                            </q-list>
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
const tab = ref<'all' | 'accounts' | 'cards' | 'wallets'>('all');

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

const accounts = [
    {
        name: 'USD',
        currency: 'USD',
        amount: '4.565,00'
    },
    {
        name: 'USD Ahorros',
        currency: 'USD',
        amount: '4.565,00'
    }
];

const wallets = [
    {
        acronym: 'BTC',
        logo: 'logos:bitcoin',
        name: 'Bitcoin',
        quantity: '0,00'
    },
    {
        acronym: 'USDT',
        logo: 'cryptocurrency-color:usdt',
        name: 'Tether USDT',
        quantity: '1,00'
    },
    {
        acronym: 'ETH',
        logo: 'logos:ethereum',
        name: 'Ethereum',
        quantity: '3.34,00'
    },
    {
        acronym: 'BTC',
        logo: 'logos:bitcoin',
        name: 'Bitcoin',
        quantity: '4.565,00'
    },
    {
        acronym: 'BTC',
        name: 'Bitcoin',
        logo: 'logos:bitcoin',
        quantity: '4.565,00'
    },
    {
        acronym: 'BTC',
        name: 'Bitcoin',
        logo: 'logos:bitcoin',
        quantity: '0,00'
    },
    {
        acronym: 'USDT',
        logo: 'cryptocurrency-color:usdt',
        name: 'Tether USDT',
        quantity: '1,00'
    },
    {
        acronym: 'ETH',
        logo: 'logos:ethereum',
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

const changeView = (view: 'all' | 'accounts' | 'cards' | 'wallets') =>
{
    tab.value = tab.value === view ? 'all' : view;
    $router.replace({
        path: '/',
        query: {
            tab: tab.value
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
    tab.value = $router.currentRoute.value.query.tab.toString();
}
</script>
