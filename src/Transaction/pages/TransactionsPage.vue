<template>
    <div
        class="q-py-md"
        style="height: 100%; contain: content;">
        <q-tabs
            v-model="tab"
            dense
            :active-class="`text-nv-${GetSuffix('accent')} ${!$q.dark.isActive ? 'text-bold' : ''}`"
            no-caps
            class="wp-100"
        >
            <q-tab name="deposit" :label="$t('transactions.deposit.title')" />
            <q-tab name="withdraw" :label="$t('transactions.withdraw.title')" />
            <q-tab name="convert" :label="$t('transactions.convert.title')" />
            <q-tab name="pay" :label="$t('transactions.pay.title')" />
        </q-tabs>

        <q-tab-panels class="hp-100 overflow-auto bg-transparent" v-model="tab">
            <q-tab-panel name="convert">
                <conversions-tab />
            </q-tab-panel>

            <q-tab-panel name="pay">
                <vank-pay-tab />
            </q-tab-panel>
        </q-tab-panels>
    </div>
 </template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { computed, reactive, ref } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useAuthStore } from 'stores/auth';
import { useSettingsStore } from 'stores/settings';
import NotificationComponent from '../../Notifications/components/NotificationComponent.vue';
import { useI18n } from 'vue-i18n';
import ConversionsTab from 'src/Transaction/components/ConversionsTab.vue';
import VankPayTab from 'src/Transaction/components/VankPayTab.vue';

// CONSTANTS
const $q = useQuasar();
const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const { t } = useI18n({ useScope: 'global' });


// REFS
const tab = ref<'deposit' | 'withdraw' | 'convert' | 'pay'>('convert');


</script>
