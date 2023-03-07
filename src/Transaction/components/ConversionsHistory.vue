<template>
    <div class="hp-100" :class="{ 'q-px-md q-pt-md' : $q.screen.gt.sm }">
        <div class="flex flex-inline justify-between">
            <h5
                class="no-margin text-medium fs-22"
                :class="{
                    'text-nv-light' : Dark.isActive,
                    'text-nv-dark' : !Dark.isActive
                }"
            >
                {{ $route.path.includes('convert-history') ? $t('transactions.convert.history') : $t('transactions.pay.history') }}
            </h5>

           <div>
               <q-icon class="cursor-pointer q-mr-md" size="28px" name="filter_alt" color="nv-light-tertiary" />
               <q-icon @click="$router.push('/transactions')" class="cursor-pointer" size="23px" name="cancel" color="nv-light-tertiary" />
           </div>
        </div>

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
            class="q-mb-none q-mx-none q-mt-md hp-93"
        >
        <q-scroll-observer @scroll="onScroll" />
            <q-list class="q-px-none">
                <q-item
                    v-for="(register, index) in data"
                    :key="index"
                    class="q-mb-lg q-px-none"
                >
                    <q-item-section avatar>
                        <q-avatar :style="`background-color:${Dark.isActive ? '#2C343D' : '#F5F5F5'}`">
                            <span
                                class="iconify fs-23"
                                :class="{
                                    'text-nv-light-tertiary' : Dark.isActive,
                                    'text-nv-light-accent' : !Dark.isActive
                                }"
                                :data-icon="register.action === 'exchange' ? 'gg:arrows-exchange-alt' : (register?.type === 'send' ? 'teenyicons:send-right-solid' : 'teenyicons:send-left-solid')" />
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label
                            :class="{
                                'text-nv-dark' : !Dark.isActive
                            }"
                            class="fs-17 text-light flex items-center">
                            {{ register.action === 'exchange' ? register.from :
                            $t(register.type === 'send' ? 'transactions.pay.youSended' : 'transactions.pay.youReceived', { amount: register.amount.toString().concat(register.currency) }) }}
                            <span
                            class="iconify fs-23"
                            v-if="register.action === 'exchange'"
                            :class="{
                                    'text-nv-light-tertiary' : Dark.isActive,
                                    'text-nv-light-accent' : !Dark.isActive
                                }"
                            data-icon="gg:arrows-exchange-alt" />
                            <span v-if="register.action === 'exchange'" v-text="register.to" />
                        </q-item-label>
                        <q-item-label class="fs-11 q-pt-xs text-nv-light-tertiary" caption>
                            {{ getDate(register.date) }}
                        </q-item-label>
                    </q-item-section>

                    <q-item-section side :class="{ 'fs-18' : register.action !== 'pay', 'fs-12' : register.action === 'pay' }" class="hp-100 wp-40 flex flex-inline items-center text-light">
                        <div class="flex flex-inline items-center text-nv-light-primary">
                            {{ register.action !== 'pay' ? register.amount.toString().concat((register.to)) : register.to }}
                        </div>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
    </div>

<!--     <q-dialog
        v-model="filterDialog"
        :position="isMobile ? 'bottom' : 'standard'"
    >
        <q-card
            class="q-pa-sm no-scroll"
            :class="{
                'br-40': !isMobile,
                'bg-nv-dark' : Dark.isActive,
                'bg-nv-light': !Dark.isActive
            }"
            :style="`${
                isMobile
                ? 'border-radius: 40px 40px 0px 0px !important; height: 28vh; width: 100%;'
                : 'height: 400px; width: 400px;'
            }`"
        >
        <q-card-section class="flex justify-between q-pt-lg">
            <h5 class="no-margin fs-22">
                {{ $t('transactionHistory.filters') }}
            </h5>
        </q-card-section>
        <q-scroll-area
            :thumb-style="{
                right: '0px',
                borderRadius: '9px',
                backgroundColor: `${
                    Dark.isActive ? '#016608' : '#52B301'
                }`,
                width: '3px',
                opacity: '0.7'
            }"
            :barStyle="{
                right: '0px',
                borderRadius: '5px',
                backgroundColor: '#C4C4C4',
                width: '3px',
                opacity: '0.4'
            }"
            class="no-margin hp-100"
        >
            <q-list>
                <q-item
                    v-for="(item, index) in filterOptions"
                    :key="index"
                    clickable
                    :active="item.value === filter"
                    :active-class="`text-nv-${GetSuffix('accent')}`"
                    @click="setFilter(item)"
                    :class="{'text-white' : Dark.isActive, 'text-nv-light-tertiary' : !Dark.isActive }"
                    class="cursor-pointer fs-16"
                >
                <q-item-section class="text-center">
                    {{ item.label }}
                </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
        </q-card>
    </q-dialog>-->
</template>

<script lang="ts" setup>
import { Screen, Dark, date } from 'quasar';
import {computed, onMounted, ref} from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix.js';
import { useI18n } from 'vue-i18n';
import {useRoute} from 'vue-router';

const props = defineProps({
    filterOptions: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['handleScroll']);
const $route = useRoute();

const filter = ref<string>('all');
const { t } = useI18n({ useScope: 'global' });
const filterDialog = ref<boolean>(false);

const getFilterLabel = computed(() => props.filterOptions.find((e) => e.value === filter.value)?.label ?? '');
const isMobile = computed(() => Screen.lt.md);

const onScroll = (info: any) =>
{
    emit('handleScroll', info);
};

const setFilter = (option: { label: string, value: string }) =>
{
    filter.value = option.value;
};

const getDate = (value: string) =>
{
    return date.formatDate(value, 'DD MMM YYYY HH:ssa', {
        monthsShort: [t('dates.monthsShort.jan'), t('dates.monthsShort.feb'), t('dates.monthsShort.mar'), t('dates.monthsShort.apr'), t('dates.monthsShort.may'), t('dates.monthsShort.jun'), t('dates.monthsShort.jul'), t('dates.monthsShort.aug'), t('dates.monthsShort.sep'), t('dates.monthsShort.oct'), t('dates.monthsShort.nov'), t('dates.monthsShort.dec')]
    });
};

const data = [];

onMounted(() =>
{
    if ($route.path.includes('convert-history'))
    {
        for (let i = 0; i < 12; i++)
        {
            data.push({
                action: 'exchange',
                from: 'USD',
                to: 'BTC',
                amount: 0.0001,
                date: '2022-01-16'
            });
        }
    }
    else if ($route.path.includes('pay-history'))
    {
        for (let i = 0; i < 12; i++)
        {
            data.push({
                action: 'pay',
                to: 'vankuser@mail.com',
                currency: 'USDT',
                preffix: '$',
                description: 'Some thing',
                amount: 10,
                type: i % 2 === 0 ? 'send' : 'receive',
                date: '2022-01-16'
            });
        }
    }
});

</script>
