<template>
     <q-page class="hp-100" :class="{ 'row' : !isMobile  }">
     <!-- UPPER ROW WITH LOGO FOR MOBILE -->
        <div
            :class="{
                'hp-40 flex column items-center justify-evenly no-margin' : isMobile,
                'col-7 col-lg-8 row items-center justify-center' : !isMobile
            }"
        >
            <div
                :class="{
                    'text-nv-light-accent' : !Dark.isActive,
                    'text-white' : Dark.isActive,
                    'q-px-sm' : isXS
                }"
                class="flex column items-center"
            >
                <Logo class="q-mb-lg" :size="isMobile ? '165px' : '545px;'" />
                <h5 :class="{ 'fs-23' : isXS }" class="no-padding q-mb-xs q-mt-sm text-center">
                    {{ $t('login.welcome', [`${name}`]) }}
                </h5>
                <p
                    class="no-margin no-padding text-center"
                    :class="{
                        'fs-12' : !isMobile && isXS,
                        'fs-11' : isXS
                    }"
                >
                    {{ $t('login.caption') }}
                </p>
            </div>
        </div>

        <div
            :class="{
                'hp-60' : isMobile,
                'col-5 col-lg-4 flex justify-center items-center' : !isMobile
            }"
        >
            <!-- LOGIN CARD -->
            <q-card
                :style="`${ isMobile ? 'border-radius: 40px 40px 0px 0px !important;' : '' }`"
                class="no-margin q-px-sm"
                :class="{
                    'dark--card' : Dark.isActive,
                    'bg-white' : !Dark.isActive,
                    'br-40 hp-80 wp-93' : !isMobile,
                    'hp-100 wp-100' : isMobile
                }"
            >
                <q-card-section class="pt-35 row no-margin justify-between">
                    <div class="flex flex-inline justify-start">
                        <div
                        :class="`
                            ${button === 'login' ? `bg-nv-${GetSuffix('secondary')}
                            ${ !Dark.isActive ? 'text-nv-light-accent' : '' }` : `text-nv-${GetSuffix(`${!Dark.isActive ? 'tertiary' : 'secondary'}`)}`}
                        `"
                        class="flex items-center justify-center px-17 br-30 fs-12 ls-2 q-mr-sm cursor-pointer"
                        @click="button = 'login'"
                        >
                           {{ $t('buttons.login') }}
                        </div>
                        <div
                        :class="`
                            ${button === 'register' ? `bg-nv-${GetSuffix('secondary')}
                            ${ !Dark.isActive ? 'text-nv-light-accent' : '' }` : `text-nv-${GetSuffix(`${!Dark.isActive ? 'tertiary' : 'secondary'}`)}`}
                        `"
                        class="flex items-center justify-center px-17 br-30 fs-12 ls-2 cursor-pointer"
                        @click="button = 'register'"
                        >
                            {{ $t('buttons.register') }}
                        </div>
                    </div>

                    <q-btn
                        @click="switchMode()"
                        flat
                        round
                        :color="Dark.isActive ? 'white' : 'nv-light-tertiary'"
                        :icon="Dark.isActive ? 'brightness_5' : 'dark_mode'"
                    />
                </q-card-section>

                <q-card-section>
                    <q-form ref="formRef" greedy>
                        <p class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between">
                            {{ $t('fields.email') }} o {{ $t('fields.phoneNumber') }}
                            <span @click="changeValidate()" :class="`text-nv-${GetSuffix('accent')} text-medium ls-2 cursor-pointer ${isMobile ? 'fs-10' : 'fs-12'}`">
                                {{ validating === 'email' ? $t('fields.phoneNumber') : $t('fields.email') }}
                            </span>
                        </p>
                        <q-input
                            dark
                            filled
                            rounded
                            v-model="data.email"
                            :color="'transparent'"
                            type="email"
                            class="q-mb-md"
                            :class="{
                                'rounded--dark-input' : Dark.isActive,
                                'rounded--light-input text-black' : !Dark.isActive
                            }"
                            :rules="getRule"
                        >
                            <template v-slot:prepend>
                                <q-select
                                    v-if="validating === 'phone'"
                                    v-model="data.code"
                                    class="no-padding no-margin dense-select-input"
                                    borderless
                                    @blur="formRef?.reset()"
                                    :color="`nv-${GetSuffix('accent')}`"
                                    :options="options"
                                >
                                <template v-slot:selected>
                                    <span :class="{
                                        'text-nv-light-light-grey' : data.code.length < 1
                                    }">
                                        {{ data.code.length < 1 ? '+1' : data.code }}
                                    </span>
                                </template>
                                </q-select>
                            </template>
                       </q-input>
                        <q-space />
                        <p class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14">
                            {{ $t('fields.password') }}
                        </p>
                        <q-input
                            dark
                            filled
                            rounded
                            v-model="data.password"
                            :color="'transparent'"
                            :type="isPwd ? 'password' : 'text'"
                            :class="{
                                'rounded--dark-input' : Dark.isActive,
                                'rounded--light-input text-nv-light-accent' : !Dark.isActive
                            }"
                            :rules="[
                                val => val && val.length > 7 || $t('validations.password')
                             ]"
                        >
                        <template v-slot:append>
                            <q-icon
                            v-show="data.password.length > 0"
                            :name="isPwd ? 'visibility' : 'visibility_off'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                                />
                        </template>
                    </q-input>

                    <q-btn
                        :color="`nv-${GetSuffix('primary')}`"
                        class="full-width br-20 py-12 q-mt-lg fs-16"
                        unelevated
                        no-caps
                    >
                        {{ $t('buttons.login') }}
                    </q-btn>
                    </q-form>
                </q-card-section>

                <q-card-section class="fs-12 text-nv-light-tertiary q-py-none">
                    {{ $t('login.newInPlatform') }} <span :class="`text-nv-${GetSuffix('accent')} cursor-pointer`">
                        {{ $t('login.createAnAccount') }}
                    </span>

                    <p :class="`text-nv-${GetSuffix('accent')} q-pt-md cursor-pointer`">{{ $t('login.forgotYourPassword') }}</p>
                </q-card-section>
            </q-card>
        </div>
     </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Logo from '../../app/components/Logo.vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';

// REFERENCES
const button = ref('login');
const formRef = ref(null);
const isPwd = ref(true);
const validating = ref('email');
const { t } = useI18n({ useScope: 'global' });
const data = reactive({
    email: '',
    password: '',
    code: ''
});

const options = [
    '+58',
    '+57',
    '+1',
    '+45'
];

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);

const isXS = computed(() => Screen.lt.sm);

const name = computed(() => process.env.APP_NAME);

const getRule = computed(() =>
{
    return validating.value === 'email' ?
        [(val: string) => val && val.match(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/) || t('validations.email')] :
        [(val: string) => val && val.length > 0 || t('validations.required')];
});

// FUNCTIONS

const switchMode = () =>
{
    Dark.set(!Dark.isActive);
};

const changeValidate = () =>
{
    validating.value = validating.value === 'email' ? 'phone' : 'email';
    formRef.value?.reset();
};
</script>

<style lang="scss" scoped>
.dark--card {
    background-color: #1D2229;
}
</style>