<template>
     <q-page
        :class="{
            'q-py-md' : isMobile
        }"
        class="hp-100">
        <div
            :class="{
                'mt-20 q-px-lg' : isMobile
            }"
        >
            <q-icon class="cursor-pointer" @click="$router.back()" size="2em" name="arrow_back" />
        </div>

        <div
            :class="{
                'mt-10 q-px-lg flex justify-center' : isMobile,
            }"
        >
        <q-img class="wp-77" :src="getCard">
            <div class="wp-100 hp-100 flex flex-center" style="background-color: transparent;">
                <div class="flex flex-inline items-center justify-center">
                    <q-icon size="2.5em" name="img:icons/Vector.svg" />

                    <h5
                        class="q-my-none q-mr-none text-medium fs-22 text-nv-dark-primary q-ml-xs"
                    >
                        {{ getAcronym }}
                    </h5>

                    <h5
                        class="no-margin q-pt-xs wp-100 text-center text-semi-bold fs-15 text-nv-dark-primary"
                    >
                        1.00
                    </h5>

                    <h5
                        class="no-margin wp-100 text-center text-medium fs-13 text-nv-dark-primary"
                    >
                        = $27000.00
                    </h5>
                </div>
            </div>
        </q-img>
        </div>

        <q-separator size="0.3em" :color="Dark.isActive ? 'nv-ultra-dark' : 'nv-light-grey'"  class="mt-30" />

        <div class="mt-20 q-px-lg" style="height: 64vh;">
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
import { Router, useRouter } from 'vue-router';
import TransactionHistory from '../components/TransactionHistory.vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';

const $router: Router = useRouter();
const showBtns = ref<boolean>(true);

const isMobile = computed(() => Screen.lt.md);
const getCard = computed(() => new URL('../../assets/images/currency-card.png', import.meta.url).href);
const getAcronym = computed(() => $router.currentRoute.value.params.currency);

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
