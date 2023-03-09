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
                <q-tab name="fiat" label="Fiat" />
                <q-tab name="crypto" label="Crypto" />
            </q-tabs>

            <q-tab-panels class="hp-93 overflow-auto bg-transparent q-pt-md" v-model="tab">
                <q-tab-panel name="fiat" class="q-pb-none q-px-none">
                   <q-tab-panels class="no-padding hp-100 bg-transparent" v-model="fiatProcessTab">
                       <q-tab-panel class="no-padding flex column bg-transparent justify-between hp-100" name="choose">
                           <div>
                               <p :class="{ 'text-black' : !$q.dark.isActive }"  class="text-semi-bold q-mt-none flex justify-between">
                                   <span v-text="$t('transactions.deposit.title')" />
                                   <span v-text="`1 ${form.to} = 0,99 ${ form.from }`" />
                               </p>
                               <q-input
                                   rounded
                                   outlined
                                   v-model.number="form.amountFrom"
                                   :color="'transparent'"
                                   mask="##"
                                   :prefix="options1.find((e) => e.currency === form.from)?.preffix"
                                   reverse-fill-mask
                                   @update:model-value="(val) => {
                                        form.amountTo = (val * 0.99).toString();
                                    }"
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

                               <span class="text-semi-bold" :class="{ 'text-black' : !$q.dark.isActive }" v-text="$t('transactions.pay.receive')" />
                               <q-input
                                   rounded
                                   outlined
                                   v-model="form.amountTo"
                                   :color="'transparent'"
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
                               <p class="q-mt-lg q-mx-xs text-nv-light-tertiary"
                                  :class="{ 'fs-12' : $q.screen.gt.sm, 'fs-10' : $q.screen.lt.md }"
                                  v-text="$t('transactions.deposit.byPressingContinue')" />
                               <q-item
                                   clickable
                                   @click="$router.push('/transactions/deposit-history')"
                                   :active="$route.path.includes('deposit-history')"
                                   :class="{
                                'text-nv-light-tertiary' : !$route.path.includes('deposit-history'),
                            }"
                                   :active-class="`text-nv-${GetSuffix('accent')}`"
                                   class="no-padding q-mt-lg br-18">
                                   <q-item-section
                                       class="q-py-md"
                                       :class="{ 'q-pl-sm' : $q.screen.gt.sm }"
                                       style="flex-direction: row !important; justify-content: start !important; align-items: center !important;">
                                       <q-icon size="20px" name="history" class="mr-10" />
                                       {{ $t('transactions.deposit.history') }}
                                   </q-item-section>

                                   <q-item-section :class="{ 'q-mr-md' : $q.screen.gt.sm }" side class="flex items-center">
                                       <q-icon name="chevron_right" :color="$route.path.includes('history') ? `nv-${GetSuffix('accent')}` : 'nv-light-tertiary'" />
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
                                   :disable="!form.amountFrom"
                                   @click="fiatProcessTab = 'transfer'"
                                   class="wp-48 br-20 fs-15 text-black"
                                   :class="{ 'py-8' : $q.screen.lt.md, 'py-10' : $q.screen.gt.sm }"
                                   :color="`nv-${GetSuffix('primary')}`"
                               >
                                   {{ $t('buttons.continue') }}
                               </q-btn>
                           </div>
                       </q-tab-panel>

                       <q-tab-panel class="no-padding flex column bg-transparent justify-between hp-100" name="transfer">
                           <div>
                               <p :class="{ 'text-black' : !$q.dark.isActive }"
                                  class="text-semi-bold q-mt-none flex justify-between"
                                  v-text="$t('transactions.deposit.paymentMethod')"  />
                               <q-select
                                   rounded
                                   outlined
                                   v-model="form.method"
                                   :options="[
                                       'Transferencia',
                                       'Pago movil'
                                   ]"
                                   :color="'nv-dark-accent'"

                                   :popup-content-class="`${
                                        $q.dark.isActive ? 'bg-nv-dark' : 'bg-nv-light'
                                   }`"
                                   class="q-mb-md "
                                   :class="{
                                        'fs-13' : $q.screen.lt.md,
                                        'rounded--dark-select--withAlert': $q.dark.isActive,
                                        'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                    }"
                               />

                               <h5 class="text-center q-mb-xs" :class="{ 'fs-20' : $q.screen.lt.md }" v-text="$t('transactions.deposit.makeTheTransfer')" />
                               <p class="text-center" v-text="$t('transactions.deposit.tranferFromYourBank')" />

                               <div>
                                   <q-separator color="nv-light-tertiary" />
                                   <div class="q-my-md flex justify-between items-center">
                                       <p :class="{ 'fs-25' : $q.screen.gt.sm, 'fs-16' : $q.screen.lt.md }" class="no-margin" v-text="'$'.concat(form.amountFrom.toLocaleString('es-CL'))" />
                                       <div>
                                           <p :class="{ 'fs-14' : $q.screen.gt.sm, 'fs-12' : $q.screen.lt.md }" class="no-margin"
                                              v-text="$t('transactions.deposit.receive').concat(': ', '$', form.amountTo.toLocaleString('es-CL'))" />
                                           <p :class="{ 'fs-14' : $q.screen.gt.sm, 'fs-12' : $q.screen.lt.md }" class="no-margin"
                                              v-text="$t('transactions.deposit.rate').concat(': ', '$0.99')" />
                                       </div>
                                   </div>
                                   <q-separator color="nv-light-tertiary" />
                               </div>

                               <div class="q-mt-lg br-6 q-py-md text-center text-semi-bold" :class="{ 'bg-nv-dark-tertiary' : $q.dark.isActive, 'bg-nv-light-primary' : !$q.dark.isActive }">
                                   VankPay - J18237139-12
                               </div>

                               <div class="q-mt-md q-mb-lg q-py-md flex flex-inline justify-between items-center">
                                   <div class="bg-nv-light-tertiary flex flex-center br-30" style="height: 40px; width: 90px;" v-text="'logo'" />
                                   <div class="text-right">
                                       <p class="q-mb-xs" v-text="$t('transactions.deposit.account')" />
                                       <p class="text-semi-bold no-margin flex flex-inline items-center">
                                           1029121938213
                                           <q-icon class="q-ml-sm cursor-pointer" size="20px" name="content_copy" @click="copy('1029121938213')" />
                                       </p>
                                   </div>
                               </div>

                               <p :class="{ 'text-black' : !$q.dark.isActive }"
                                  class="text-semi-bold q-mb-sm"
                                  v-text="$t('transactions.deposit.operationNumber')"
                               />

                                   <q-input
                                       rounded
                                       outlined
                                       v-model.number="form.number"
                                       :color="'transparent'"
                                       mask="###########################################"
                                       class="q-mb-md"
                                       :class="{
                                            'fs-13' : $q.screen.lt.md,
                                            'rounded--dark-input--withAlert--space': $q.dark.isActive,
                                            'rounded--light-input--withAlert--space text-dark': !$q.dark.isActive
                                        }"
                                   />
                           </div>
                           <div :class="{ 'q-px-sm' : $q.screen.gt.sm }"
                                class="flex flex-inline justify-between">
                               <q-btn
                                   no-caps
                                   unelevated
                                   @click="fiatProcessTab = 'choose'"
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

                <q-tab-panel name="crypto" class="q-px-none">
                    <q-card
                        v-for="(crypto, index) in options2"
                        :key="index"
                        flat
                        :style="`background-color: rgba(53, 62, 73, ${$q.dark.isActive ? '.5' : '.08'}) !important;`"
                        class="q-mb-md br-10"
                    >
                        <q-card-section class="flex flex-inline justify-between items-center q-pb-none">
                            <div class="flex items-center text-semi-bold">
                                <q-avatar
                                    :size="$q.screen.gt.sm ? '3em' : '3.9em'"
                                    class="bg-transparent q-mr-sm">
                                 <span
                                     :data-icon="crypto.icon"
                                     class="fs-30 iconify" />
                                </q-avatar>
                                {{ crypto.name }}
                            </div>
                            <q-btn
                                @click="crypto.showQR = true"
                                flat
                                rounded
                                unelevated
                                no-caps
                                style="font-weight: normal !important; font-family: 'PPObjectSans-Regular' !important;"
                                :class="`text-nv-${GetSuffix('accent')} ${$q.screen.lt.md ? 'fs-12' : ''}`" class="text-semi-bold cursor-pointer"
                                :label="$t('transactions.deposit.getAddress')" />
                        </q-card-section>
                        <q-card-section class="q-pt-none pl-28 fs-13" :class="{ 'q-pb-xs' : $q.screen.lt.md }">
                            {{ $t('transactions.deposit.chargeJust', { crypto: crypto.currency }) }}
                        </q-card-section>

                        <q-card-section class="q-px-lg">
                            <q-slide-transition>
                                <div class="flex justify-center" v-show="crypto.showQR">
                                    <q-img width="14em" src="https://www.hostinet.com/formacion/wp-content/uploads/2019/09/qrcode_hostinet.jpg" />
                                    <div class="wp-100 q-mt-lg" style="word-break: break-word;">
                                        <p class="no-margin text-semi-bold" v-text="$t('transactions.deposit.walletAddress')" />
                                        <p v-text="crypto.address" />
                                        <q-separator class="q-my-md" />
                                        <div class="q-mt-lg q-mb-md flex flex-inline items-center justify-between">
                                            <p v-text="'Enlaces'" class="q-mb-none" />
                                            <div class="flex-inline q-gutter-x-lg">
                                                <q-btn
                                                    icon="content_copy"
                                                    round
                                                    :size="$q.screen.lt.md ? 'sm' : 'md'"
                                                    @click="copy(crypto.address)"
                                                    unelevated
                                                    color="nv-dark-tertiary"
                                                />
                                                <q-btn
                                                    icon="share"
                                                    round
                                                    :size="$q.screen.lt.md ? 'sm' : 'md'"
                                                    unelevated
                                                    color="nv-dark-tertiary"
                                                />

                                                <q-btn
                                                    icon="close"
                                                    round
                                                    :size="$q.screen.lt.md ? 'sm' : 'md'"
                                                    @click="crypto.showQR = false"
                                                    unelevated
                                                    color="nv-dark-tertiary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </q-slide-transition>
                        </q-card-section>
                    </q-card>

                    <q-item
                        clickable
                        @click="$router.push('/transactions/deposit-history')"
                        :active="$route.path.includes('deposit-history')"
                        :class="{
                                'text-nv-light-tertiary' : !$route.path.includes('deposit-history'),
                            }"
                        :active-class="`text-nv-${GetSuffix('accent')}`"
                        class="no-padding q-mt-lg br-18">
                        <q-item-section
                            class="q-py-md"
                            :class="{ 'q-pl-sm' : $q.screen.gt.sm }"
                            style="flex-direction: row !important; justify-content: start !important; align-items: center !important;">
                            <q-icon size="20px" name="history" class="mr-10" />
                            {{ $t('transactions.deposit.history') }}
                        </q-item-section>

                        <q-item-section :class="{ 'q-mr-md' : $q.screen.gt.sm }" side class="flex items-center">
                            <q-icon name="chevron_right" :color="$route.path.includes('history') ? `nv-${GetSuffix('accent')}` : 'nv-light-tertiary'" />
                        </q-item-section>
                    </q-item>
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
    from: 'USD',
    amountFrom: null,
    to: 'USDT',
    amountTo: null,
    method: null,
    number: null
});
const dialog = ref<boolean>(false);
const tab = ref<'fiat' | 'crypto'>('fiat');
const fiatProcessTab = ref<'choose' | 'transfer' | 'processing'>('choose');

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
