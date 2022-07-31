<template>
    <div class="hp-100">
        <div class="flex flex-inline justify-between">
            <h5
                class="no-margin text-medium fs-22"
                :class="{
                    'text-nv-light' : Dark.isActive,
                    'text-nv-dark' : !Dark.isActive
                }"
            >
                {{ $t('transactionHistory.history') }}
            </h5>

            <q-input
                    class="ultra-dense-input--dark wp-30 cursor-pointer"
                    outlined
                    :model-value="getFilterLabel"
                    readonly
                    @click="filterDialog = true"
                    color="transparent"
                    rounded
                >
                <template v-slot:append>
                    <q-icon
                        size="21px"
                        :name="!filterDialog? 'expand_more' : 'expand_less'"
                    />
                </template>
                </q-input>
        </div>

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
            class="q-mb-none q-mx-none q-mt-md hp-93"
        >
        <q-scroll-observer @scroll="onScroll" />
            <q-list class="q-px-none">
                <q-item
                    v-for="(register, index) in data"
                    :key="index"
                    clickable
                    class="q-mb-lg q-px-none"
                >
                    <q-item-section avatar>
                        <q-avatar :style="`background-color:${Dark.isActive ? '#2C343D' : '#F5F5F5'}`">
                            <span
                                class="iconify text-nv-light-tertiary fs-23"
                                :data-icon="register.action === 'withdrawal' ? 'ant-design:upload-outlined' : 'ant-design:download-outlined'" />
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label class="fs-17 text-light">
                            {{ $t(`transactionHistory.${register.action}`) }}
                        </q-item-label>
                        <q-item-label class="fs-11 q-pt-xs text-nv-light-tertiary" caption>
                            {{ getDate(register.date) }}
                        </q-item-label>
                    </q-item-section>

                    <q-item-section side class="hp-100 wp-40 flex flex-inline items-center fs-18 text-light">
                        <div
                            :class="{
                                'text-nv-dark-red' : register.action === 'withdrawal',
                                'text-nv-info' : register.action === 'deposit'
                            }"
                            class="flex flex-inline items-center">
                            <q-icon class="q-mr-xs" :name="register.action === 'withdrawal' ? 'remove' : 'add'" />
                        {{ register.amount }}
                        </div>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
    </div>

     <q-dialog
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
                    :class="{'text-white' : Dark.isActive, 'text-nv-dark' : !Dark.isActive }"
                    class="cursor-pointer fs-16"
                >
                <q-item-section class="text-center">
                    {{ item.label }}
                </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { Screen, Dark, date } from 'quasar';
import { computed, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix.js';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    filterOptions: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['handleScroll']);

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

const data = [
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-01-16'
    },
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-04-19'
    },
    {
        action: 'deposit',
        amount: 0.0001,
        date: '2022-08-19'
    },
    {
        action: 'deposit',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'deposit',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'deposit',
        amount: 0.0001,
        date: '2022-12-22'
    },
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'deposit',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'deposit',
        amount: 0.0001,
        date: '2022-04-28'
    },
    {
        action: 'withdrawal',
        amount: 0.0001,
        date: '2022-04-28'
    }
];

</script>
