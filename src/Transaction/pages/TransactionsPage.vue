<template>
    <div
        class="q-py-md"
        :class="{
            'q-px-md' : $q.screen.lt.md
        }"
        style="height: 100% !important; contain: content;">
        <q-tabs
            v-model="tab"
            dense
            @update:model-value="(val) => changeView(val)"
            :active-class="`text-nv-${GetSuffix('accent')} ${!$q.dark.isActive ? 'text-bold' : ''}`"
            no-caps
            class="wp-100"
        >
            <q-tab name="deposit" :label="$t('transactions.deposit.title')" />
            <q-tab name="withdraw" :label="$t('transactions.withdraw.title')" />
            <q-tab name="convert" :label="$t('transactions.convert.title')" />
            <q-tab name="pay" :label="$t('transactions.pay.title')" />
        </q-tabs>

        <q-tab-panels :style="`${$q.screen.lt.md ? 'height: 90vh !important;' : ''}`" class="hp-100 overflow-auto bg-transparent" v-model="tab">
            <q-tab-panel :class="{ 'q-px-none' : $q.screen.lt.md }" name="deposit">
                <deposit-tab />
            </q-tab-panel>

            <q-tab-panel :class="{ 'q-px-none' : $q.screen.lt.md }" name="withdraw">
                <withdraw-tab />
            </q-tab-panel>

            <q-tab-panel :class="{ 'q-px-none' : $q.screen.lt.md }"  name="convert">
                <conversions-tab />
            </q-tab-panel>

            <q-tab-panel :class="{ 'q-px-none' : $q.screen.lt.md }"  name="pay">
                <vank-pay-tab />
            </q-tab-panel>
        </q-tab-panels>
    </div>
 </template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { computed, onMounted, reactive, ref } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useAuthStore } from 'stores/auth';
import { useSettingsStore } from 'stores/settings';
import NotificationComponent from '../../Notifications/components/NotificationComponent.vue';
import { useI18n } from 'vue-i18n';
import ConversionsTab from 'src/Transaction/components/ConversionsTab.vue';
import VankPayTab from 'src/Transaction/components/VankPayTab.vue';
import DepositTab from 'src/Transaction/components/DepositTab.vue';
import { useRouter } from 'vue-router';
import WithdrawTab from 'src/Transaction/components/WithdrawTab.vue';

// CONSTANTS
const $q = useQuasar();
const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const { t } = useI18n({ useScope: 'global' });
const $router = useRouter();

// REFS
const tab = ref<'deposit' | 'withdraw' | 'convert' | 'pay'>('deposit');

const changeView = (view: 'deposit' | 'withdraw' | 'convert' | 'pay') =>
{
    tab.value = view;
    $router.replace({ path: '/transactions', query: { tab: view } });
};

onMounted(() =>
{
    tab.value = $router.currentRoute.value?.query?.tab?.toString() ?? 'deposit';
});
</script>
