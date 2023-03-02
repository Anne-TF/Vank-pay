<template>
     <q-page
        :class="{
            'q-py-md' : isMobile
        }"
        class="hp-100">
        <div
            :class="{
                'mt-25 q-px-lg' : isMobile
            }"
        >
            <q-icon class="cursor-pointer" @click="$router.back()" size="2em" name="arrow_back" />
        </div>

        <div
            :class="{
                'mt-10 q-px-lg q-mx-auto' : isMobile,
            }"
        >
        <div :class="{ 'flip-card-rotate' : showBackCard }" class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <q-img
                        :fit="!isMobile ? 'contain' : 'cover'"
                        :style="`${!isMobile ? 'width: 5em; height: 13em;' : ''}`"
                        @click="showBackCard = true"
                        class="wp-100"
                        :src="getFrontCard"
                    />
                </div>
                <div class="flip-card-back">
                    <q-img
                        :fit="!isMobile ? 'contain' : 'cover'"
                        :style="`${!isMobile ? 'width: 5em; height: 13em;' : ''}`"
                        @click="showBackCard = false"
                        class="wp-100"
                        :src="getBackCard"/>
                </div>
            </div>
        </div>

        <div class="q-mt-sm wp-100 text-center">
            <h5 class="fs-14 text-medium q-mx-none q-mt-sm q-mb-none">
                {{ $t('balance.balance') }}
            </h5>

             <h4
                    class="no-margin text-light fs-31 wp-100"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive
                    }"
                    >
                    {{ HideText(viewBalance, '$'.concat(getBalance)) }}
                </h4>
        </div>
        </div>

        <q-separator size="0.3em" :color="Dark.isActive ? 'nv-ultra-dark' : 'nv-light-grey'"  class="mt-30" />

        <div class="mt-20 q-px-lg" style="height: 51vh;">
            <TransactionHistory
                @handle-scroll="handleScroll"
                :filter-options="[
                    {
                        label: $t('transactionHistory.currencyDetailFilters.all'),
                        value: 'all',
                    },
                    {
                        label: $t('transactionHistory.currencyDetailFilters.deposits'),
                        value: 'deposits',
                    },
                    {
                        label: $t('transactionHistory.currencyDetailFilters.withdrawals'),
                        value: 'withdrawals',
                    }
                ]"
            />
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
                class="fixed-bottom flex flex-inline justify-between q-px-lg q-py-sm">
                <q-btn
                    no-caps
                    unelevated
                    class="wp-48 br-20 fs-14 py-13"
                    :color="`nv-${GetSuffix('tertiary')}`"
                >
                    {{ $t('transactionHistory.deposit') }}
                </q-btn>

                <q-btn
                    no-caps
                    unelevated
                    class="wp-48 br-20 fs-15 py-15"
                    :color="`nv-${GetSuffix('primary')}`"
                >
                    {{ $t('transactionHistory.withdraw') }}
                </q-btn>
            </div>
        </transition>

    </q-page>
</template>

<script lang="ts" setup>
import { Screen, Dark } from 'quasar';
import { computed, ref } from 'vue';
import TransactionHistory from '../components/TransactionHistory.vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useSettingsStore } from 'stores/settings';
import HideText from '../../app/shared/helpers/HideText';

// STORES
const settingsStore = useSettingsStore();

// REFERENCES

const showBtns = ref<boolean>(true);
const showBackCard = ref<boolean>(false);

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
const getFrontCard = computed(() => new URL('../../assets/images/card-front.png', import.meta.url).href);
const getBackCard = computed(() => new URL('../../assets/images/card-back.png', import.meta.url).href);
const getBalance = computed(() => '80.60');
const viewBalance = computed(() => settingsStore.ViewBalance);

// FUNCTIONS

const handleScroll = (info: any) =>
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

<style lang="scss" scoped>
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 80%;
  height: 190px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-rotate .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}
</style>
