<template>
    <q-page class="hp-100" :class="{ row: !isMobile }">
        <!-- UPPER ROW WITH LOGO FOR MOBILE -->
        <div
            :class="{
                'hp-40 flex column items-center justify-evenly no-margin':
                    isMobile,
                'col-7 col-lg-8 row items-center justify-center': !isMobile
            }"
        >
            <div
                :class="{
                    'text-nv-light-accent': !Dark.isActive,
                    'text-white': Dark.isActive,
                    'q-px-sm': isXS
                }"
                class="flex column items-center"
            >
                <Logo class="q-mb-lg" :size="isMobile ? '165px' : '545px;'" />
                <h5
                    :class="{ 'fs-23': isXS }"
                    class="no-padding q-mb-xs q-mt-sm text-center"
                >
                    {{ $t('login.welcome', [`${name}`]) }}
                </h5>
                <p
                    class="no-margin no-padding text-center"
                    :class="{
                        'fs-12': !isMobile && isXS,
                        'fs-11': isXS
                    }"
                >
                    {{ $t('login.caption') }}
                </p>
            </div>
        </div>

        <div
            :class="{
                'hp-60': isMobile,
                'col-5 col-lg-4 flex justify-center items-center': !isMobile
            }"
        >
            <!-- LOGIN CARD -->
            <q-card
                :style="`${
                    isMobile
                        ? 'border-radius: 40px 40px 0px 0px !important;'
                        : ''
                }`"
                class="no-margin q-px-sm"
                :class="{
                    'dark--card': Dark.isActive,
                    'bg-white': !Dark.isActive,
                    'br-40 hp-80 wp-93': !isMobile,
                    'hp-100 wp-100': isMobile
                }"
            >
                <q-card-section class="pt-35 row no-margin justify-between">
                    <div class="flex flex-inline justify-start">
                        <div
                            :class="`
                            ${
                                button === 'login'
                                    ? `bg-nv-${GetSuffix('secondary')}
                            ${!Dark.isActive ? 'text-nv-light-accent' : ''}`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !Dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
                        `"
                            class="flex items-center justify-center px-17 br-30 fs-12 ls-2 q-mr-sm cursor-pointer"
                            @click="button = 'login'"
                        >
                            {{ $t('buttons.login') }}
                        </div>
                        <div
                            :class="`
                            ${
                                button === 'register'
                                    ? `bg-nv-${GetSuffix('secondary')}
                            ${!Dark.isActive ? 'text-nv-light-accent' : ''}`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !Dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
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
                        <p
                            class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
                        >
                            {{ $t('fields.email') }} o
                            {{ $t('fields.phoneNumber') }}
                            <span
                                @click="changeValidate()"
                                :class="`text-nv-${GetSuffix(
                                    'accent'
                                )} text-medium ls-2 cursor-pointer ${
                                    isMobile ? 'fs-10' : 'fs-12'
                                }`"
                            >
                                {{
                                    validating === 'email'
                                        ? $t('fields.phoneNumber')
                                        : $t('fields.email')
                                }}
                            </span>
                        </p>
                        <q-input
                            dark
                            filled
                            rounded
                            v-model="data.emailOrPhone"
                            :color="'transparent'"
                            type="email"
                            class="q-mb-md"
                            :class="{
                                'rounded--dark-input': Dark.isActive,
                                'rounded--light-input text-black':
                                    !Dark.isActive
                            }"
                            :rules="getRule"
                        >
                            <template v-slot:prepend>
                                <span
                                    class="fs-14 cursor-pointer"
                                    :class="{
                                        'text-nv-light-tertiary':
                                            data.code.length < 1
                                    }"
                                    v-if="validating === 'phone'"
                                    @click="country = true"
                                >
                                    <q-avatar class="q-mr-xs" color="transparent" size="20px">
                                        <q-img
                                            style="
                                                object-fit: fill !important;
                                                object-position: center !important;
                                                top: -10px !important;
                                            "
                                            :spinner-color="`nv-${GetSuffix(
                                                'primary'
                                            )}`"
                                            spinner-size="10px"
                                            :src="getFlag(data.code.length > 0 ? data.code : '+93')"
                                        />
                                    </q-avatar>
                                    {{ data.code.length > 0 ? data.code : '+93' }}
                                    <q-icon size="21px" :name="!country ? 'expand_more' : 'expand_less'" />
                                </span>

                                <q-dialog
                                    v-model="country"
                                    :position="isMobile ? 'bottom' : 'standard'"
                                >
                                    <q-card
                                        class="q-pa-sm"
                                        :class="{
                                            'br-40': !isMobile
                                        }"
                                        :style="`${
                                            isMobile
                                                ? 'border-radius: 40px 40px 0px 0px !important; height: 440px; width: 100%;'
                                                : 'height: 600px; width: 600px;'
                                        }`"
                                    >
                                        <q-card-section
                                            class="flex justify-between q-pt-lg"
                                        >
                                            <q-input
                                                outlined
                                                v-model="filter"
                                                :color="`nv-${GetSuffix(
                                                    'primary'
                                                )}`"
                                                rounded
                                                dense
                                                class="wp-85 ls-2 text-regular"
                                                :class="{
                                                    'fs-13': isMobile
                                                }"
                                                :placeholder="
                                                    $t('fields.search')
                                                "
                                            />
                                            <q-btn
                                                icon="close"
                                                flat
                                                round
                                                dense
                                                v-close-popup
                                            />
                                        </q-card-section>

                                        <q-card-section class="hp-80 q-py-xs">
                                            <q-scroll-area
                                                :thumb-style="{
                                                    right: '0px',
                                                    borderRadius: '9px',
                                                    backgroundColor: `${
                                                        Dark.isActive
                                                            ? '#016608'
                                                            : '#52B301'
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
                                                class="no-margin"
                                                style="
                                                    min-height: 100% !important;
                                                "
                                            >
                                                <q-list>
                                                    <q-item
                                                        v-for="(
                                                            item, index
                                                        ) in countries"
                                                        :key="index"
                                                        clickable
                                                        :active="item.countryCode === data.code"
                                                        :active-class="`text-nv-${GetSuffix('primary')}`"
                                                        @click="setCode(item.countryCode)"
                                                        class="text-white small-avatar-section cursor-pointer"
                                                    >
                                                        <q-item-section avatar>
                                                            <q-avatar
                                                                color="transparent"
                                                                size="25px"
                                                            >
                                                                <q-img
                                                                    style="
                                                                        object-fit: fill !important;
                                                                        object-position: center !important;
                                                                        top: -12px !important;
                                                                    "
                                                                    :spinner-color="`nv-${GetSuffix(
                                                                        'primary'
                                                                    )}`"
                                                                    spinner-size="12px"
                                                                    width="40px"
                                                                    :src="
                                                                        item.image
                                                                    "
                                                                />
                                                            </q-avatar>
                                                        </q-item-section>
                                                        <q-item-section
                                                            class="fs-13 ls-2"
                                                        >
                                                            {{ item.name }}
                                                        </q-item-section>

                                                        <q-item-section
                                                            class="fs-13"
                                                            side
                                                            >{{
                                                                item.countryCode
                                                            }}</q-item-section
                                                        >
                                                    </q-item>
                                                </q-list>
                                            </q-scroll-area>
                                        </q-card-section>
                                    </q-card>
                                </q-dialog>
                            </template>
                        </q-input>
                        <q-space />
                        <p
                            class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14"
                        >
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
                                'rounded--dark-input': Dark.isActive,
                                'rounded--light-input text-nv-light-accent':
                                    !Dark.isActive
                            }"
                            :rules="[
                                (val) =>
                                    (val && val.length > 7) ||
                                    $t('validations.password')
                            ]"
                        >
                            <template v-slot:append>
                                <q-icon
                                    v-show="data.password.length > 0"
                                    :name="
                                        isPwd ? 'visibility' : 'visibility_off'
                                    "
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
                    {{ $t('login.newInPlatform') }}
                    <span
                        :class="`text-nv-${GetSuffix('accent')} cursor-pointer`"
                    >
                        {{ $t('login.createAnAccount') }}
                    </span>

                    <p
                        :class="`text-nv-${GetSuffix(
                            'accent'
                        )} q-pt-md cursor-pointer`"
                    >
                        {{ $t('login.forgotYourPassword') }}
                    </p>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed, onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Logo from '../../app/components/Logo.vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import countries from '../../assets/resources/countries';

// REFERENCES
const button = ref<string>('login');
const formRef = ref<any>(null);
const isPwd = ref<boolean>(true);
const filter = ref<string>('');
const country = ref<boolean>(false);
const validating = ref<string>('email');
const { t } = useI18n({ useScope: 'global' });
const data = reactive({
    emailOrPhone: '',
    password: '',
    code: ''
});

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);

const isXS = computed(() => Screen.lt.sm);

const name = computed(() => process.env.APP_NAME);

const getRule = computed(() =>
{
    return validating.value === 'email'
        ? [
            (val: string) =>
                (val &&
                      val.match(
                          /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                      )) ||
                  t('validations.email')
        ]
        : [
            (val: string) =>
                (val && val.length > 0) || t('validations.required')
        ];
});

// FUNCTIONS

const switchMode = () =>
{
    Dark.set(!Dark.isActive);
};

const changeValidate = () =>
{
    validating.value = validating.value === 'email' ? 'phone' : 'email';
    data.emailOrPhone = '';
    formRef.value?.reset();
};

const getFlag = (code: string) =>
{
    return countries.find((e: any) => e.countryCode === code)?.image ?? '';
};

const setCode = (code: string) =>
{
    data.code = code;
    country.value = false;
};
</script>

<style lang="scss" scoped>
.dark--card {
    background-color: #1d2229;
}
.small-avatar-section {
    .q-item__section--avatar {
        min-width: 40px !important;
        width: 40px !important;
    }
}
</style>
