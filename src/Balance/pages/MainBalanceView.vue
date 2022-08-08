<template>
    <q-page
        :class="{
            'q-py-md' : isMobile
        }"
        class="hp-100">
        <div
            :class="{
                'mt-40 flex items-center q-px-lg' : isMobile
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
                    'text-nv-dark' : !Dark.isActive
                }"
            >
                {{ HideText(viewBalance, '$'.concat(getBalance)) }}
            </h4>
        </div>

        <q-separator size="0.3em" :color="Dark.isActive ? 'nv-ultra-dark' : 'nv-light-grey'" class="mt-30" />

         <div
            :class="{
                'mt-10 q-px-lg' : isMobile
            }"
        >
            <div class="flex justify-between mb-30">
                <span class="fs-16">{{ $t('balance.cards') }}</span>

                <q-input
                    outlined
                    v-model="search"
                    @focus="onFocus = true"
                    @blur="onFocus = false"
                    :class="{
                        'wp-35' : !onFocus,
                        'wp-50' : onFocus,
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

            <q-card
                v-for="(card, index) in cards"
                :key="index"
                flat
                class="mb-10 br-20 py-5 cursor-pointer"
                @click="$router.push(`/cards/${card.name.replace(' ', '-')}`)"
                :class="`bg-nv-${GetSuffix('tertiary')}-opacity`"
            >
                <q-card-section class="flex flex-inline" style="opacity: 1 !important;">
                    <div class="flex flex-inline wp-70">
                        <q-avatar
                            size="3.9em"
                            :style="`background-color: ${Dark.isActive ? '#717A8A' : '#CDCDCD'};`"
                        >
                            <q-icon
                                size="1.5em"
                                v-show="card.type === 'VISA'"
                                :name="`img:icons/visa-${Dark.isActive ? 'light' : 'dark'}.svg`" />
                        </q-avatar>

                        <div class="ml-15">
                            <h5
                                class="no-margin text-light fs-17"
                                :class="{
                                    'text-nv-light' : Dark.isActive,
                                    'text-nv-light-accent' : !Dark.isActive
                                }"
                                >
                                {{ card.name }}
                            </h5>
                            <p
                                :class="{
                                    'text-nv-light-tertiary' : Dark.isActive,
                                    'text-nv-light-accent' : !Dark.isActive
                                }"
                                class="no-margin fs-13 q-mt-xs text-light">
                                {{ card.user }}
                            </p>
                        </div>
                    </div>

                    <div
                        :class="{
                            'text-nv-light' : Dark.isActive,
                            'text-nv-light-accent' : !Dark.isActive
                        }"
                        class="wp-30 flex items-center justify-end fs-17">
                        {{ HideText(viewBalance, '$'.concat(card.quantity)) }}
                    </div>
                </q-card-section>
            </q-card>
        </div>

        <q-separator size="0.3em" :color="Dark.isActive ? 'nv-ultra-dark' : 'nv-light-grey'" class="mt-13" />

        <div
            :class="{
                'mt-10 q-px-lg' : isMobile
            }"
        >
            <div class="flex justify-between mb-30">
                <span class="fs-16">{{ $t('balance.wallets') }}</span>

                <q-input
                    outlined
                    v-model="search2"
                    @focus="onFocus2 = true"
                    @blur="onFocus2 = false"
                    :class="{
                        'wp-35' : !onFocus2,
                        'wp-50' : onFocus2,
                        'ultra-dense-input--dark' : Dark.isActive,
                        'ultra-dense-input--light' : !Dark.isActive
                    }"
                    color="transparent"
                    rounded
                >
                <template v-slot:prepend>
                    <span
                        :class="{
                            'text-nv-dark' : !Dark.isActive
                        }"
                        class="iconify fs-18"
                        data-icon="arcticons:xiaoyuan-search"></span>
                </template>
                </q-input>
            </div>

            <q-card
                v-for="(currency, index) in wallets"
                :key="index"
                flat
                @click="$router.push(`/currency/${currency.acronym}`)"
                class="mb-10 br-20 py-5 cursor-pointer"
                :class="`bg-nv-${GetSuffix('tertiary')}-opacity`"
            >
                <q-card-section class="flex flex-inline" style="opacity: 1 !important;">
                    <div class="flex flex-inline wp-70">
                        <q-avatar
                            size="3.9em"
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
                                class="no-margin text-medium fs-17"
                                :class="{
                                    'text-nv-light' : Dark.isActive,
                                    'text-nv-dark' : !Dark.isActive
                                }"
                                >
                                {{ currency.acronym }}
                            </h5>
                            <p
                                :class="{
                                    'text-nv-light-tertiary' : Dark.isActive,
                                    'text-nv-light-accent' : !Dark.isActive
                                }"
                                class="no-margin fs-13 q-mt-xs text-light">
                                {{ currency.name }}
                            </p>
                        </div>
                    </div>

                    <div
                        :class="{
                            'text-nv-light' : Dark.isActive,
                            'text-nv-light-accent' : !Dark.isActive
                        }"
                        class="wp-30 flex items-center justify-end fs-17">
                        {{ HideText(viewBalance, '$'.concat(currency.quantity)) }}
                    </div>
                </q-card-section>
            </q-card>
        </div>

    </q-page>
</template>

<script lang="ts" setup>
import { Screen, Dark } from 'quasar';
import { computed, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useSettingsStore } from 'stores/settings';
import HideText from '../../app/shared/helpers/HideText';

// CONSTANTS AND REFERENCES
const settingsStore = useSettingsStore();

const search = ref<string>('');
const search2 = ref<string>('');
const onFocus = ref<boolean>(false);
const onFocus2 = ref<boolean>(false);
const morphGroupModel = ref('btn');

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
</script>
