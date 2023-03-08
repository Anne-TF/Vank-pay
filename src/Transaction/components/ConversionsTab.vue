<template>
    <div class="flex column justify-between hp-97">
        <div :class="{ 'q-px-md' : $q.screen.gt.sm }">
            <div
                v-if="showBanner"
                class="q-py-sm  br-5 text-bold q-mt-md flex items-center justify-between"
                :class="`bg-nv-${GetSuffix('accent')} text-${$q.dark.isActive ? 'black' : 'white'} ${$q.screen.lt.md ? 'fs-11 q-px-sm' : 'q-px-md'}`">
                    <span class="flex items-center">
                        <q-icon name="info" :class="{ 'q-mr-md' : $q.screen.gt.sm, 'q-mr-sm' : $q.screen.lt.md }" :size="$q.screen.gt.sm ? '20px' : '15px'" />
                        {{ $t('transactions.convert.banner') }}
                    </span>
                <q-icon name="close" class="cursor-pointer" :size="$q.screen.gt.sm ? '20px' : '15px'" @click="showBanner = false" />
            </div>

            <div class="flex justify-between q-mt-lg">
                <p class="no-margin justify-lg-center flex column">
                    <span :class="{ 'fs-18' : $q.screen.gt.sm }" class="text-semi-bold q-mb-xs" v-text="$t('transactions.convert.whatToExchange')" />
                    <span :class="{ 'fs-12' : $q.screen.lt.md }" class="text-nv-light-tertiary" v-text="$t('transactions.convert.selectCurrency')" />
                </p>
                <p class="no-margin flex column justify-end text-right">
                    <span :class="{ 'fs-11' : $q.screen.lt.md }" class="text-nv-light-tertiary" v-text="$t('transactions.convert.actualBalance')" />
                    <span :class="{ 'fs-20' : $q.screen.gt.sm, 'fs-16' : $q.screen.lt.md }" v-text="'$'.concat(getBalance)" />
                </p>
            </div>

            <p class="text-semi-bold q-mt-xl">
                1 {{ form.to }} = 24,093.00 {{ form.from }}
            </p>

            <q-input
                rounded
                outlined
                v-model="form.amountFrom"
                :color="'transparent'"
                :prefix="options1.find((e) => e.currency === form.from)?.preffix"
                reverse-fill-mask
                mask="##.##"
                :suffix="form.from"
                class="q-mb-md"
                :class="{
                            'fs-13' : $q.screen.lt.md,
                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                        }"
            >
                <template v-slot:prepend>
                            <span
                                class="fs-14 cursor-pointer">
                                <q-avatar class="q-mr-xs" color="transparent" size="3em">
                                    <q-icon :name="`img:/flags/${options1.find((e) => e.currency === form.from)?.icon}.svg`" />
                                </q-avatar>
                                <q-icon
                                    size="21px"
                                    :name="!dialog ? 'expand_more' : 'expand_less'"
                                />
                            </span>
                </template>
            </q-input>

            <span class="iconify fs-45" :class="{ 'text-nv-light-accent' : !$q.dark.isActive, 'text-white' : $q.dark.isActive }" data-icon="gg:arrows-exchange-alt" data-rotate="90deg" />

            <q-input
                rounded
                outlined
                v-model="form.amountTo"
                :color="'transparent'"
                mask="##.#"
                readonly
                :prefix="options2.find((e) => e.currency === form.to)?.preffix"
                reverse-fill-mask
                :suffix="form.to"
                class="q-mt-md"
                :class="{
                            'fs-13' : $q.screen.lt.md,
                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                        }"
            >
                <template v-slot:prepend>
                            <span
                                class="fs-14 cursor-pointer">
                                <q-avatar class="q-mr-xs" color="transparent" size="3em">
                                    <span :data-icon="`${options2.find((e) => e.currency === form.to)?.icon}`" class="iconify" />
                                </q-avatar>
                                <q-icon
                                    size="21px"
                                    :name="!dialog ? 'expand_more' : 'expand_less'"
                                />
                            </span>
                </template>
            </q-input>

            <p :class="{ 'fs-12' : $q.screen.lt.md }" class="q-mt-lg text-nv-light-tertiary" v-text="$t('transactions.convert.includedComissions')" />

            <q-item
                clickable
                @click="$router.push('/transactions/convert-history')"
                :active="$route.path.includes('convert-history')"
                :class="{
                        'text-nv-light-tertiary' : !$route.path.includes('history'),
                    }"
                :active-class="`text-nv-${GetSuffix('accent')}`"
                class="no-padding q-mb-sm br-18">
                <q-item-section
                    class="q-py-md"
                    :class="{ 'q-pl-sm' : $q.screen.gt.sm }"
                    style="flex-direction: row !important; justify-content: start !important; align-items: center !important;">
                    <q-icon size="20px" name="history" class="mr-10" />
                    {{ $t('transactions.convert.history') }}
                </q-item-section>

                <q-item-section :class="{ 'q-mr-md' : $q.screen.gt.sm }" side class="flex items-center">
                    <q-icon name="chevron_right" :color="$route.path.includes('history') ? `nv-${GetSuffix('accent')}` : 'nv-light-tertiary'" />
                </q-item-section>
            </q-item>
        </div>

        <div :class="{ 'q-px-md' : $q.screen.gt.sm }"
            class="flex flex-inline justify-between">
            <q-btn
                no-caps
                unelevated
                class="wp-48 br-20 fs-14"
                :class="{'text-nv-dark-accent' : !$q.dark.isActive, 'py-8' : $q.screen.lt.md, 'py-10' : $q.screen.gt.sm }"
                :color="`${$q.dark.isActive ? 'nv-'.concat(GetSuffix('tertiary')) : 'dark'}`"
            >
                {{ $t('buttons.cancel') }}
            </q-btn>

            <q-btn
                no-caps
                unelevated
                class="wp-48 br-20 fs-15 text-black"
                :class="{ 'py-8' : $q.screen.lt.md, 'py-10' : $q.screen.gt.sm }"
                :color="`nv-${GetSuffix('primary')}`"
            >
                {{ $t('buttons.continue') }}
            </q-btn>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {computed, reactive, ref} from 'vue';
import {useSettingsStore} from 'stores/settings';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';

const settingsStore = useSettingsStore();
const options1 = [
    {
        icon: 'usa',
        currency: 'USD',
        preffix: '$',
        name: 'dollar'
    },
    {
        icon: 'spain',
        preffix: '€',
        currency: 'EUR',
        name: 'euro'
    },
    {
        icon: 'venezuela',
        preffix: 'Bs',
        currency: 'BSS',
        name: 'Bolivares'
    },
    {
        icon: 'brazil',
        preffix: 'R$',
        name: 'Real',
        currency: 'BRL'
    }
];
const options2 = [
    {
        preffix: '$',
        currency: 'BTC',
        icon: 'logos:bitcoin',
        name: 'Bitcoin'
    },
    {
        preffix: '$',
        currency: 'USDT',
        icon: 'cryptocurrency-color:usdt',
        name: 'Tether USDT'
    },
    {
        preffix: '$',
        currency: 'ETH',
        icon: 'logos:ethereum',
        name: 'Ethereum'
    }
];

const showBanner = ref<boolean>(true);
const form = reactive({
    from: 'USD',
    to: 'BTC',
    amountFrom: null,
    amountTo: null
});
const dialog = ref<boolean>(false);

// COMPUTEDS
const viewBalance = computed(() => settingsStore.ViewBalance);
const getBalance = computed(() => '80.60');

// FUNCTIONS
const changeViewBalance = () =>
{
    settingsStore.setBalance(!viewBalance.value);
};
</script>
