<template>
    <div class="hp-100">
        <div class="q-mt-md hp-96" :class="{ 'q-px-sm' : $q.screen.gt.sm }">
            <q-tabs
                v-model="tab"
                dense
                :active-class="`text-nv-${GetSuffix('accent')} ${!$q.dark.isActive ? 'text-bold' : ''}`"
                no-caps
                align="left"
                class="wp-100"
                :breakpoint="0"
            >
                <q-tab name="crypto" label="Crypto" />
                <q-tab name="national" :label="$t('transactions.withdraw.nationalTransaction')" />
                <q-tab name="international" :label="$t('transactions.withdraw.internationalTransaction')" />
            </q-tabs>

            <q-tab-panels class="hp-93 overflow-auto bg-transparent q-pt-md" v-model="tab">
                <q-tab-panel name="crypto" class="q-pb-none q-px-none">
                    <div class="flex justify-between q-mt-sm q-mb-lg">
                        <p class="no-margin justify-lg-center flex column">
                            <span :class="{ 'fs-18' : $q.screen.gt.sm }" class="text-semi-bold q-mb-xs" v-text="$t('transactions.withdraw.howToSend')" />
                            <span :class="{ 'fs-12' : $q.screen.lt.md }" class="text-nv-light-tertiary" v-text="$t('transactions.withdraw.selectCurrency')" />
                        </p>
                        <p class="no-margin flex column justify-end text-right">
                            <span :class="{ 'fs-11' : $q.screen.lt.md }" class="text-nv-light-tertiary" v-text="$t('transactions.convert.actualBalance')" />
                            <span :class="{ 'fs-20' : $q.screen.gt.sm, 'fs-16' : $q.screen.lt.md }" v-text="'$'.concat(getBalance)" />
                        </p>
                    </div>

                    <q-input
                        rounded
                        outlined
                        v-model="form.send"
                        :color="'transparent'"
                        :prefix="options2.find((e) => e.currency === form.from)?.preffix"
                        reverse-fill-mask
                        mask="##"
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
                                    <span :data-icon="`${options2.find((e) => e.currency === form.from)?.icon}`" class="iconify" />
                                </q-avatar>
                                <q-icon
                                    size="21px"
                                    :name="!dialog ? 'expand_more' : 'expand_less'"
                                />
                            </span>
                        </template>
                    </q-input>

                    <div class="flex flex-inline items-center justify-between">
                        <span v-text="$t('transactions.withdraw.equalTo')" />
                        <q-input
                            rounded
                            outlined
                            v-model="form.receive"
                            :color="'transparent'"
                            readonly
                            prefix="$"
                            suffix="USD"
                            class="q-ml-md wp-87"
                            :class="{
                                'fs-13' : $q.screen.lt.md,
                                'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                            }"
                        />
                    </div>

                    <q-separator color="nv-dark-tertiary" class="q-mt-xl q-mb-lg" />

                    <p :class="{ 'text-black' : !$q.dark.isActive, 'fs-17' : $q.screen.gt.sm }" class="q-mb-none text-bold" v-text="$t('transactions.withdraw.sendTo')" />
                    <p class="text-nv-light-tertiary" :class="{ 'fs-14' : $q.screen.gt.sm, 'fs-10' : $q.screen.lt.md }" v-text="$t('transactions.withdraw.payTo')" />
                    <q-input
                        rounded
                        outlined
                        :placeholder="$t('fields.email')"
                        v-model="form.address"
                        :color="'transparent'"
                        class="q-mb-md"
                        :class="{
                            'fs-13' : $q.screen.lt.md,
                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                        }"
                    />

                    <p class="q-mb-sm q-mt-md" :class="{ 'fs-12' : $q.screen.lt.md , 'text-black' : !$q.dark.isActive }" v-text="$t('transactions.withdraw.description')" />
                    <q-input
                        rounded
                        outlined
                        :placeholder="$t('transactions.withdraw.description')"
                        v-model="form.address"
                        :color="'transparent'"
                        class="q-mb-md"
                        :class="{
                            'fs-13' : $q.screen.lt.md,
                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                        }"
                    />

                </q-tab-panel>

                <q-tab-panel name="national" class="q-pb-none q-px-none">
                   <q-tab-panels class="no-padding hp-100 bg-transparent" v-model="fiatProcessTab">
                       <q-tab-panel class="no-padding flex column bg-transparent justify-between hp-100" name="choose">
                           <div>
                               <q-btn
                                   :color="`nv-${GetSuffix('accent')}`"
                                   :label="$t('settings.beneficiaries.title')"
                                   :class="{
                                        'text-black' : $q.dark.isActive
                                   }"
                                   no-caps
                                   class="q-mb-md q-px-lg"
                                   rounded
                               />
                               <p :class="{ 'text-black' : !$q.dark.isActive }"
                                  v-text="$t('transactions.withdraw.bank')"
                                  class="text-semi-bold q-mb-sm flex justify-between" />
                               <q-input
                                   rounded
                                   outlined
                                   v-model="form.bank"
                                   :color="'transparent'"
                                   class="q-mb-md"
                                   :class="{
                                        'fs-13' : $q.screen.lt.md,
                                        'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                        'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                    }"
                               />

                               <p :class="{ 'text-black' : !$q.dark.isActive }"
                                  v-text="$t('transactions.withdraw.name')"
                                  class="text-semi-bold q-mb-sm flex justify-between" />
                               <q-input
                                   rounded
                                   outlined
                                   v-model="form.name"
                                   :color="'transparent'"
                                   class="q-mb-md"
                                   :class="{
                                        'fs-13' : $q.screen.lt.md,
                                        'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                        'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                    }"
                               />

                               <p :class="{ 'text-black' : !$q.dark.isActive }"
                                  v-text="$t('transactions.withdraw.accountType')"
                                  class="text-semi-bold q-mb-sm flex justify-between" />
                               <q-input
                                   rounded
                                   outlined
                                   v-model="form.accountType"
                                   :color="'transparent'"
                                   class="q-mb-md"
                                   :class="{
                                        'fs-13' : $q.screen.lt.md,
                                        'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                        'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                    }"
                               />

                               <p :class="{ 'text-black' : !$q.dark.isActive }"
                                  v-text="$t('transactions.withdraw.document')"
                                  class="text-semi-bold q-mb-sm flex justify-between" />
                               <q-input
                                   rounded
                                   outlined
                                   v-model="form.document"
                                   :color="'transparent'"
                                   class="q-mb-md"
                                   :class="{
                                        'fs-13' : $q.screen.lt.md,
                                        'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                        'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                    }"
                               />


                               <p class="q-mt-lg q-mx-xs text-nv-light-tertiary"
                                  :class="{ 'fs-12' : $q.screen.gt.sm, 'fs-10' : $q.screen.lt.md }"
                                  v-text="$t('transactions.deposit.byPressingContinue')" />
                               <q-item
                                   clickable
                                   @click="$router.push('/transactions/withdraw-history')"
                                   :active="$route.path.includes('withdraw-history')"
                                   :class="{
                                        'text-nv-light-tertiary' : !$route.path.includes('withdraw-history'),
                                    }"
                                   :active-class="`text-nv-${GetSuffix('accent')}`"
                                   class="no-padding q-mt-lg br-18">
                                   <q-item-section
                                       class="q-py-md"
                                       :class="{ 'q-pl-sm' : $q.screen.gt.sm }"
                                       style="flex-direction: row !important; justify-content: start !important; align-items: center !important;">
                                       <q-icon size="20px" name="history" class="mr-10" />
                                       {{ $t('transactions.withdraw.history') }}
                                   </q-item-section>

                                   <q-item-section :class="{ 'q-mr-md' : $q.screen.gt.sm }" side class="flex items-center">
                                       <q-icon name="chevron_right" :color="$route.path.includes('withdraw-history') ? `nv-${GetSuffix('accent')}` : 'nv-light-tertiary'" />
                                   </q-item-section>
                               </q-item>
                           </div>
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
                                   @click="fiatProcessTab = 'processing'"
                                   class="wp-48 br-20 fs-15 text-black"
                                   :class="{ 'py-8' : $q.screen.lt.md, 'py-10' : $q.screen.gt.sm }"
                                   :color="`nv-${GetSuffix('primary')}`"
                               >
                                   {{ $t('buttons.continue') }}
                               </q-btn>
                           </div>
                       </q-tab-panel>

                       <q-tab-panel
                           class="no-padding flex column bg-transparent justify-between hp-100" name="processing">
                           <div class="flex justify-center">
                              <lottie-animation
                                  :animation-j-s-o-n="$q.dark.isActive ? CheckYellowJSON : CheckBlackJSON "
                                  :animation-size="$q.screen.lt.sm ? 100 : 140"
                                  :loop="false" />
                               <h5 class="text-center wp-100" :class="{ 'fs-20' : $q.screen.lt.md }" v-html="$t('transactions.deposit.verifying').replace(/\n/g, '<br />')" />
                               <q-btn
                                   no-caps
                                   unelevated
                                   label="Ok"
                                   @click="fiatProcessTab = 'choose'"
                                   class="wp-48 br-20 fs-15 text-black"
                                   :class="{ 'py-8' : $q.screen.lt.md, 'py-10' : $q.screen.gt.sm }"
                                   :color="`nv-${GetSuffix('primary')}`"
                               />
                           </div>
                       </q-tab-panel>
                   </q-tab-panels>
                </q-tab-panel>

                <q-tab-panel name="international" class="q-px-none">
                    Por definir
                </q-tab-panel>
            </q-tab-panels>

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
import CheckYellowJSON from '../../assets/animations/check-yellow.json';
import CheckBlackJSON from '../../assets/animations/check-black.json';
import LottieAnimation from 'src/app/components/LottieAnimation.vue';

const settingsStore = useSettingsStore();
const $q = useQuasar();
const authStore = useAuthStore();
const { t } = useI18n({ useScope: 'global' });
const options1 = [
    {
        icon: 'usa',
        currency: 'USD',
        preffix: '$',
        name: 'Dollar'
    },
    {
        icon: 'spain',
        preffix: '€',
        currency: 'EUR',
        name: 'Euro'
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
const options2 = ref([
    {
        preffix: '$',
        currency: 'BTC',
        icon: 'logos:bitcoin',
        name: 'Bitcoin',
        address: '118sdadjsacjaNSHAskdB192138012912Mjasasjad1UJAS',
        showQR: false
    },
    {
        preffix: '$',
        currency: 'USDT',
        icon: 'cryptocurrency-color:usdt',
        name: 'Tether USDT',
        address: '118sdadjsacjaNSHAskdB192138012912Mjasasjad1UJAS',
        showQR: false
    },
    {
        preffix: '$',
        currency: 'ETH',
        icon: 'logos:ethereum',
        name: 'Ethereum',
        address: '118sdadjsacjaNSHAskdB192138012912Mjasasjad1UJAS',
        showQR: false
    }
]);

const form = reactive({
    bank: null,
    name: null,
    accountType: null,
    document: null,
    send: null,
    receive: null,
    from: 'BTC',
    to: 'USD',
    address: null,
    description: null
});
const dialog = ref<boolean>(false);
const tab = ref<'crypto' | 'national' | 'international'>('crypto');
const fiatProcessTab = ref<'choose' | 'transfer' | 'processing'>('choose');

const getBalance = computed(() => '80.60');

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
