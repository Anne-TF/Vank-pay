<template>
    <div class="hp-100">
        <div class="q-mt-sm hp-96" :class="{ 'q-px-sm' : $q.screen.gt.sm }">
            <q-tabs
                v-model="tab"
                dense
                :active-class="`text-nv-${GetSuffix('accent')} ${!$q.dark.isActive ? 'text-bold' : ''}`"
                no-caps
                class="wp-100"
            >
                <q-tab name="send" :label="$t('transactions.pay.send')" />
                <q-tab class="q-mx-md" name="receive" :label="$t('transactions.pay.receive')" />
                <q-tab name="scan" :label="$t('transactions.pay.scan')" />
            </q-tabs>

            <q-tab-panels :class="{ 'q-px-none' : $q.screen.lt.md }" class="hp-94 overflow-auto bg-transparent q-pt-sm q-pb-none" v-model="tab">
                <q-tab-panel name="send" class="q-px-none flex column q-pb-none justify-between">
                    <q-form>
                        <p v-text="$t('fields.amount')" class="q-mb-none q-pl-sm" />
                        <q-input
                            rounded
                            outlined
                            v-model.number="form.amountTo"
                            :color="'transparent'"
                            mask="##.##"
                            :prefix="options2.find((e) => e.currency === form.to)?.preffix"
                            reverse-fill-mask
                            hide-hint
                            :rules="[
                                (v) => v <= parseInt(getBalance, 10) || 'Fondos insuficientes.'
                            ]"
                            :hint="'$'.concat((parseInt(getBalance, 10) - form.amountTo).toFixed(2))"
                            :suffix="form.to"
                            class="q-mt-sm"
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

                        <div class="q-mt-lg flex flex-inline">
                            <div
                                :class="`
                            ${
                                tab2 === 'email'
                                    ? `text-semi-bold bg-nv-${GetSuffix('secondary')}
                            ${!$q.dark.isActive ? 'text-nv-light-accent' : ''}`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !$q.dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
                        `"
                                class="flex flex-center px-17 py-1 br-30 fs-12 q-mr-sm cursor-pointer"
                                @click.capture="() => { tab2 = 'email'; form.payID = null; }"
                            >
                                {{ $t('fields.email') }}
                            </div>
                            <div
                                :class="`
                            ${
                                tab2 === 'id'
                                    ? `text-semi-bold bg-nv-${GetSuffix('secondary')}
                            ${!$q.dark.isActive ? 'text-nv-light-accent' : ''}`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !$q.dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
                        `"
                                class="flex flex-center px-17 py-1 br-30 fs-12 cursor-pointer"
                                @click.capture="() => { tab2 = 'id'; form.email = null; }"
                            >
                                Pay ID
                            </div>

                            <div class="wp-100 q-mt-lg">
                                <p v-text="tab2 === 'email' ? $t('fields.email') : 'PayID'" class="no-margin" />
                                <q-input
                                    rounded
                                    outlined
                                    v-model="form.email"
                                    type="email"
                                    v-if="tab2 === 'email'"
                                    placeholder="vank@mail.com"
                                    :color="'transparent'"
                                    class="q-mt-sm"
                                    :class="{
                                            'fs-13' : $q.screen.lt.md,
                                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                        }"
                                />

                                <q-input
                                    rounded
                                    outlined
                                    v-model="form.payID"
                                    v-if="tab2 !== 'email'"
                                    placeholder="12131412"
                                    mask="###############"
                                    :color="'transparent'"
                                    class="q-mt-sm"
                                    :class="{
                                            'fs-13' : $q.screen.lt.md,
                                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                        }"
                                />

                                <p v-text="$t('fields.nameBeneficiary')" class="q-mt-md q-mb-none" />
                                <q-input
                                    rounded
                                    outlined
                                    v-model="form.name"
                                    placeholder="Vank pay"
                                    :color="'transparent'"
                                    class="q-mt-sm"
                                    :class="{
                                            'fs-13' : $q.screen.lt.md,
                                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                        }"
                                />

                                <p v-text="$t('fields.description')" class="q-mt-md q-mb-none" />
                                <q-input
                                    rounded
                                    outlined
                                    v-model="form.description"
                                    :color="'transparent'"
                                    reverse-fill-mask
                                    class="q-mt-sm"
                                    counter
                                    autogrow
                                    maxlength="50"
                                    type="textarea"
                                    :class="{
                                            'fs-13' : $q.screen.lt.md,
                                            'rounded--dark-textarea--withAlert': $q.dark.isActive,
                                            'rounded--light-textarea--withAlert text-dark': !$q.dark.isActive
                                        }"
                                />
                            </div>
                        </div>
                        <q-item
                            clickable
                            @click="$router.push('/transactions/pay-history')"
                            :active="$route.path.includes('pay-history')"
                            :class="{
                                'text-nv-light-tertiary' : !$route.path.includes('history'),
                            }"
                            :active-class="`text-nv-${GetSuffix('accent')}`"
                            class="no-padding q-mt-lg br-18">
                            <q-item-section
                                class="q-py-md"
                                :class="{ 'q-pl-sm' : $q.screen.gt.sm }"
                                style="flex-direction: row !important; justify-content: start !important; align-items: center !important;">
                                <q-icon size="20px" name="history" class="mr-10" />
                                {{ $t('transactions.pay.history') }}
                            </q-item-section>

                            <q-item-section :class="{ 'q-mr-md' : $q.screen.gt.sm }" side class="flex items-center">
                                <q-icon name="chevron_right" :color="$route.path.includes('history') ? `nv-${GetSuffix('accent')}` : 'nv-light-tertiary'" />
                            </q-item-section>
                        </q-item>
                    </q-form>

                    <div :class="{ 'q-px-sm' : $q.screen.gt.sm }"
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
                </q-tab-panel>

                <q-tab-panel name="receive" class="q-px-none">
                    <p v-text="$t('fields.email')" class="no-margin" />
                    <q-input
                        rounded
                        outlined
                        color="transparent"
                        class="text-center q-mt-sm q-mb-lg"
                        readonly
                        :class="{
                            'fs-13' : $q.screen.lt.md,
                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                        }"
                        :model-value="getUserEmail">
                        <template #append>
                            <q-icon
                                size="1.2em"
                                class="ml-6 mb-4 cursor-pointer"
                                name="img:/icons/copy.svg"
                                @click="copy(getUserEmail)"
                            />
                        </template>
                    </q-input>

                    <p v-text="'PayID'" class="no-margin" />
                    <q-input
                        rounded
                        outlined
                        color="transparent"
                        class="text-center q-mt-sm"
                        readonly
                        :class="{
                            'fs-13' : $q.screen.lt.md,
                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                        }"
                        :model-value="getUserId">
                        <template #append>
                            <q-icon
                                size="1.2em"
                                class="ml-6 mb-4 cursor-pointer"
                                name="img:/icons/copy.svg"
                                @click="copy(getUserId)"
                            />
                        </template>
                    </q-input>
                </q-tab-panel>

                <q-tab-panel name="scan" class="q-px-none">
                    Por definir
                </q-tab-panel>
            </q-tab-panels>

<!--            <span class="fs-20" v-text="'$'.concat(getBalance)" />-->
        </div>
    </div>
</template>

<script lang="ts" setup>
import {computed, reactive, ref} from 'vue';
import {useSettingsStore} from 'stores/settings';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import {useAuthStore} from 'stores/auth';
import CopyClipboard from 'src/app/shared/helpers/CopyClipboard';
import {Dark, useQuasar} from 'quasar';
import {useI18n} from 'vue-i18n';

const settingsStore = useSettingsStore();
const $q = useQuasar();
const authStore = useAuthStore();
const { t } = useI18n({ useScope: 'global' });
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

const form = reactive({
    to: 'BTC',
    amountTo: null,
    email: null,
    payID: null,
    name: null,
    description: null
});
const dialog = ref<boolean>(false);
const tab = ref<'send' | 'receive' | 'scan'>('send');
const tab2 = ref<'email' | 'id'>('email');

// COMPUTEDS
const viewBalance = computed(() => settingsStore.ViewBalance);
const getBalance = computed(() => '80.60');
const getUserEmail = computed(() => authStore.Email ?? '');
const getUserId = computed(() => '213338989');

// FUNCTIONS

const copy = async(value: string): Promise<void> =>
{
    await CopyClipboard(value);

    $q.notify({
        position: $q.screen.lt.md ? 'bottom' : 'top-right',
        message: t('settings.copiedToClipboard'),
        textColor: Dark.isActive ? 'nv-dark-accent' : 'nv-light-accent',
        color: Dark.isActive ? 'nv-dark' : 'nv-light',
        icon: 'verified',
        progress: true
    });
};


</script>
