<template>
    <q-card-section>
        <q-form
        ref="formRef"
        greedy
    >
        <p
            class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
        >
            {{ $t('fields.email') }}
        </p>
        <q-input
            dark
            filled
            rounded
            v-model="signUpForm.email"
            :color="'transparent'"
            placeholder="money@qoripay.com"
            type="email"
            class="q-mb-md"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-black': !Dark.isActive
            }"
            :rules="[
                (val) =>
                    (val &&
                        val.match(
                            /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                        )) ||
                    $t('validations.email')
            ]"
        >
        </q-input>

        <q-space />

        <p class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14">
            {{ $t('fields.password') }}
        </p>
        <q-input
            dark
            filled
            rounded
            placeholder="************"
            v-model="signUpForm.password"
            :color="'transparent'"
            class="q-mb-md"
            :type="isPwd ? 'password' : 'text'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
            :rules="[
                (val) => (val && val.length > 7) || $t('validations.password')
            ]"
        >
            <template v-slot:append>
                <q-icon
                    v-show="signUpForm.password.length > 0"
                    :name="isPwd ? 'visibility' : 'visibility_off'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
            </template>
        </q-input>

        <q-space />

        <p class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14">
            {{ $t('fields.confirmPassword') }}
        </p>
        <q-input
            dark
            placeholder="************"
            filled
            rounded
            v-model="signUpForm.confirmPassword"
            :color="'transparent'"
            :type="isPwd ? 'password' : 'text'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
            :rules="[
                (val) => (val && val.length > 7) || $t('validations.password')
            ]"
        >
            <template v-slot:append>
                <q-icon
                    v-show="signUpForm.confirmPassword.length > 0"
                    :name="isPwd2 ? 'visibility' : 'visibility_off'"
                    class="cursor-pointer"
                    @click="isPwd2 = !isPwd2"
                />
            </template>
        </q-input>

        <div
            class="fs-12 text-nv-light-tertiary q-py-none q-mt-md q-mb-md row q-mx-none items-start"
        >
            <div class="col flex items-start">
                <q-checkbox
                    v-model="acceptedTerms"
                    checked-icon="check_circle"
                    unchecked-icon="check_circle"
                    :color="`nv-${GetSuffix('accent')}`"
                    indeterminate-icon="help"
                    size="xs"
                />
            </div>
            <div class="col-11 q-pl-sm">
                {{ $t('login.termsAndPolicy') }}
                <span :class="`text-nv-${GetSuffix('accent')} cursor-pointer`">
                    {{ $t('login.terms') }}
                </span>
                {{ $t('login.and') }}
                <span :class="`text-nv-${GetSuffix('accent')} cursor-pointer`">
                    {{ $t('login.politics') }}
                </span>
                {{ $t('login.of') }} {{ getName }}
            </div>
        </div>
        <q-btn
            :color="`nv-${GetSuffix('primary')}`"
            class="full-width br-20 py-12 q-mt-lg fs-16"
            unelevated
            no-caps
        >
            {{ $t('buttons.createAccount') }}
        </q-btn>
    </q-form>
    </q-card-section>
    <q-card-section class="fs-12 text-nv-light-tertiary q-py-none q-pb-md">
            {{ $t('login.alreadyHaveAnAccount') }}
            <span
                :class="`text-nv-${GetSuffix('accent')} cursor-pointer`"
                @click="$router.replace('/login')"
            >
                {{ $t('login.login') }}
            </span>
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
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n({ useScope: 'global' });
import { reactive, computed, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import { Dark, Screen } from 'quasar';

defineProps({
    height: {
        type: Number,
        default: 0
    },
    setLang: {
        type: Function
    }
});

const signUpForm = reactive({
    email: '',
    password: '',
    confirmPassword: ''
});
const isPwd = ref<boolean>(true);
const isPwd2 = ref<boolean>(true);
const formRef = ref<any>(null);
const acceptedTerms = ref<boolean>(false);

const isMobile = computed(() => Screen.lt.md);
const getName = computed(() => process.env.APP_NAME);
</script>
