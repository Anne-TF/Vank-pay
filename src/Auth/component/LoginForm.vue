<template>
    <q-card-section>
        <q-form ref="formRef" greedy>
            <p
                class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
            >
                {{ $t('fields.email') }} {{ locale.includes('es') ? 'o' : 'or' }}
                {{ $t('fields.phoneNumber') }}
                <span
                    @click="changeValidate()"
                    v-show="width > 444"
                    :class="`text-nv-${GetSuffix(
                    'accent'
                )} text-medium cursor-pointer ${
                    isMobile ? 'fs-10' : 'fs-12'
                }`"
                >
                {{
                    loginForm.mode === 'email'
                    ? $t('fields.phoneNumber')
                    : $t('fields.email')
                }}
            </span>
                <q-icon
                    size="1.6em"
                    @click="changeValidate()"
                    :color="`nv-${GetSuffix('accent')}`"
                    v-show="width <= 444"
                    class="q-mr-sm"
                    :name="loginForm.mode === 'email' ? 'smartphone' : 'mail'"
                />
            </p>
            <q-input
                rounded
                outlined
                v-model="loginForm.emailOrPhone"
                :color="'transparent'"
                type="email"
                :placeholder="loginForm.mode  === 'email' ? 'money@qoripay.com' : '4240000000'"
                :inputmode="loginForm.mode  === 'phone' ? 'numeric' : 'text'"
                :disable="loading"
                class="q-mb-md"
                :class="{
                    'fs-13' : isMobile,
                    'rounded--dark-input--withAlert--space': Dark.isActive,
                    'rounded--light-input--withAlert--space text-dark': !Dark.isActive
                }"
                :rules="getRule"
            >
                <!-- NUMBER SLOT --->
                <template v-slot:prepend>
                <span
                    class="fs-14 cursor-pointer"
                    :disable="loading"
                    :class="{
                        'text-nv-light-tertiary': loginForm.code?.length < 1
                    }"
                    v-if="loginForm.mode === 'phone'"
                    @click="country = true"
                >
                    <q-avatar class="q-mr-xs" color="transparent" size="3em">
                        {{ getEmoji(loginForm.code) }}
                    </q-avatar>
                    {{ loginForm.code }}
                    <q-icon
                        size="21px"
                        :name="!country ? 'expand_more' : 'expand_less'"
                    />
                </span>

                    <!-- SELECT COUNTRY DIALOG -->
                    <q-dialog
                        v-model="country"
                        :position="isMobile ? 'bottom' : 'standard'"
                    >
                        <q-card
                            class="q-pa-sm no-scroll"
                            flat
                            :class="{
                            'br-40': !isMobile,
                            'bg-nv-dark' : Dark.isActive,
                            'bg-nv-light': !Dark.isActive
                        }"
                            :style="`${
                            isMobile
                                ? 'border-radius: 40px 40px 0px 0px !important; height: 60vh; width: 100%;'
                                : 'height: 600px; width: 600px;'
                        }`"
                        >
                            <q-card-section class="flex justify-between q-pt-lg">
                                <q-input
                                    outlined
                                    rounded
                                    v-model="filter"
                                    :disable="loading"
                                    :color="`nv-${GetSuffix('primary')}`"
                                    @update:model-value="onFilter"
                                    class="wp-85 text-regular"
                                   :class="{
                                        'fs-13' : isMobile,
                                        'rounded--dark-input--withAlert--space': Dark.isActive,
                                        'rounded--light-input--withAlert--space text-nv-light-accent': !Dark.isActive
                                    }"
                                    :placeholder="$t('fields.search')"
                                />
                                <q-btn
                                    icon="close"
                                    flat
                                    round
                                    v-close-popup
                                    color="nv-light-tertiary"
                                />
                            </q-card-section>

                            <q-card-section class="hp-80 q-py-xs">
                                <q-scroll-area
                                    :thumb-style="{
                                    right: '0px',
                                    borderRadius: '9px',
                                    backgroundColor: `${
                                        Dark.isActive ? '#DACB04' : '#f9eb37'
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
                                            v-for="(item, index) in countries"
                                            :key="index"
                                            clickable
                                            :active="item.countryCode === loginForm.code"
                                            :active-class="`text-nv-${GetSuffix(
                                            'accent'
                                        )}`"
                                            @click="setCode(item.countryCode)"
                                            :class="{'text-white' : Dark.isActive, 'text-nv-dark' : !Dark.isActive }"
                                            class="small-avatar-section cursor-pointer"
                                        >
                                            <q-item-section avatar>
                                                {{ item.emoji }}
                                            </q-item-section>

                                            <q-item-section class="fs-13 ls-2">
                                                {{ item.name }}
                                            </q-item-section>

                                            <q-item-section
                                                :class="`${(loginForm.code === item.countryCode) ? `text-nv-${GetSuffix('accent')}` : ''}`"
                                                class="fs-13"
                                                side>
                                                {{
                                                    item.countryCode
                                                }}</q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-scroll-area>
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </template>
            </q-input>
            <q-space />
            <p class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14">
                {{ $t('fields.password') }}
            </p>
            <q-input
                rounded
                outlined
                v-model="loginForm.password"
                placeholder="************"
                :disable="loading"
                :color="'transparent'"
                :type="isPwd ? 'password' : 'text'"
                :class="{
                    'fs-13' : isMobile,
                    'rounded--dark-input--withAlert--space': Dark.isActive,
                    'rounded--light-input--withAlert--space text-nv-light-accent': !Dark.isActive
                }"
                :rules="[
                (val) => (val && val.length > 7) || $t('validations.password')
            ]"
            >
                <template v-slot:append>
                    <q-icon
                        v-show="loginForm.password?.length > 0"
                        :name="isPwd ? 'visibility' : 'visibility_off'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>

            <q-btn
                :color="`nv-${GetSuffix('primary')}`"
                class="full-width br-20 py-12 q-mt-lg fs-16 text-black"
                unelevated
                no-caps
                :loading="loading"
                @click="handleLogin"
            >
                {{ $t('buttons.login') }}
            </q-btn>
        </q-form>
    </q-card-section>
    <q-card-section
        class="fs-12 text-nv-light-tertiary q-py-none"
    >
        {{ $t('login.newInPlatform') }}
        <span
            :class="`text-nv-${GetSuffix(
                                        'accent'
                                    )} cursor-pointer`"
            @click="changeView('sign-up')"
        >
                                    {{ $t('login.createAnAccount') }}
                                </span>

        <p
            @click="$router.push('/forgot-password')"
            :class="`text-nv-${GetSuffix(
                                        'accent'
                                    )} q-pt-md cursor-pointer`"
        >
            {{ $t('login.forgotYourPassword') }}
        </p>
    </q-card-section>

    <div
        class=" fs-10 text-center text-nv-light-tertiary cursor-pointer"
        @click="setLang(locale.includes('es') ? 'en-US' : 'es-ES')"
    >
        {{ $t('buttons.changeLanguageTo') }}
        <span
            class="ml-3"
            :class="`text-nv-${GetSuffix('accent')}`"
        >
                            {{
                $t(
                    `langs.${
                        locale.includes('es')
                            ? 'english'
                            : 'spanish'
                    }`
                )
            }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Dark, QForm, Screen, useQuasar } from 'quasar';
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'stores/auth';

// Props
defineProps({
    width: {
        type: Number,
        default: 0
    },
    changeView: {
        type: Function
    },
    setLang: {
        type: Function
    }
});

// Constants
const $q = useQuasar();
const $router = useRouter();

// Stores
const authStore = useAuthStore();
const { loginForm } = storeToRefs(authStore);

// Locales
const { t, locale } = useI18n({ useScope: 'global' });

// Helpers
import GetSuffix from '../../app/shared/helpers/GetSuffix';

// Data
import countriesData, { ICountry } from '../../assets/resources/countries';

// Repositories
import { useQoriPayRepository } from 'boot/axios';

// Ref
const formRef = ref<QForm | null>(null);
const countries = ref<ICountry[]>([...countriesData]);
const isPwd = ref<boolean>(true);
const country = ref<boolean>(false);
const filter = ref<string>('');
const loading = ref<boolean>(false);

// Computed
const isMobile = computed(() => Screen.lt.md);
const getRule = computed(() =>
{
    return loginForm.value.mode === 'email'
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


// Methods
const initializeForm = () =>
{
    authStore.setLoginForm({
        mode: loginForm.value.mode ?? 'phone',
        emailOrPhone: loginForm.value.emailOrPhone ?? '',
        password: loginForm.value.password ?? '',
        code: loginForm.value.code ?? countries.value[0].countryCode
    });
};

const changeValidate = () =>
{
    authStore.setLoginForm({
        ...loginForm.value,
        emailOrPhone: '',
        mode:  loginForm.value.mode === 'email' ? 'phone' : 'email'
    });
    $router.replace({
        path: '/login',
        query: {
            mode: loginForm.value.mode
        }
    });
    formRef.value?.reset();
};

const getEmoji = (countryCode: string): string | null =>
{
    return countriesData.find(c => c.countryCode === countryCode)?.emoji ?? null;
};

const setCode = (code: string): void  =>
{
    authStore.setLoginForm({
        ...loginForm.value,
        code
    });
    country.value = false;
};

const onFilter = () =>
{
    if (filter.value.length > 0)
    {
        countries.value = countriesData.filter((e) =>
        {
            return e.name.toLowerCase().includes(filter.value.toLowerCase());
        });
    }
    else
    {
        countries.value = [...countriesData];
    }
};

const changeView = (mode: 'email' | 'phone') =>
{
    authStore.setLoginForm({
        ...loginForm.value,
        mode
    });
    $router.replace({
        path: '/login',
        query: {
            mode: loginForm.value.mode
        }
    });
};

const handleLogin = async() =>
{
    formRef.value?.validate().then(async(validated) =>
    {
        if (validated)
        {
            loading.value = true;
            const { data }  = await useQoriPayRepository.preLogin({
                Modulo: 'loginCliente',
                User: <string> (loginForm.value.mode === 'email' ? loginForm.value.emailOrPhone : `${loginForm.value.code}${loginForm.value.emailOrPhone}`.replaceAll('+', '')),
                Password: <string> loginForm.value.password
            });
            loading.value = false;

            if (data.error)
            {
                $q.notify({
                    position: isMobile.value ? 'bottom' : 'top-right',
                    message: `Ups... ${t(data.errorKey)}`,
                    color: 'red',
                    icon: 'warning'
                });
                return;
            }
            else
            {
                authStore.setPreAuth(true);
                authStore.setActive2FA(data.active2fa);
                authStore.setPhone(data.userData.telefono);
                authStore.setEmail(data.userData.correo);
                authStore.setUserName(data.userData.usuario);
                await $router.push('/two-factor-auth');
            }
        }
    });
};

const initializeMode = () =>
{
    if ($router.currentRoute.value.query)
    {
        const mode = loginForm.value.mode ?? 'email';
        // @ts-ignore
        changeView($router.currentRoute.value?.query?.mode ?? mode);
    }
};

initializeForm();
initializeMode();

</script>

<style lang="scss" scoped>
.small-avatar-section {
    .q-item__section--avatar {
        min-width: 30px !important;
        width: 30px !important;
    }
}
</style>
