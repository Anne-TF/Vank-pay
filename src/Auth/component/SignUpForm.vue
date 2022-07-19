<template>
    <q-form ref="formRef" greedy>
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
    </q-form>

    <div class="q-mt-xl">
         <q-btn
            :color="`nv-${GetSuffix('primary')}`"
            class="full-width br-20 py-12 q-mt-lg fs-16"
            unelevated
            no-caps
        >
            {{ $t('buttons.createAccount') }}
        </q-btn>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import { Dark, Screen } from 'quasar';

const signUpForm = reactive({
    email: '',
    password: '',
    confirmPassword: ''
});
const isPwd = ref<boolean>(true);
const isPwd2 = ref<boolean>(true);
const formRef = ref<any>(null);

const isMobile = computed(() => Screen.lt.md);
</script>
