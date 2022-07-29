<template>
    <q-page
        class="hp-100"
        :class="{
            'bg-nv-dark': Dark.isActive,
            'bg-nv-light': !Dark.isActive,
            'flex column flex-center': !isMobile
        }"
    >
        <div
            :class="{
                'wp-30': Screen.lg,
                'wp-40': Screen.lt.lg && !isMobile
            }"
        >
            <div
                :class="{
                    'flex justify-end q-pt-lg q-px-md': isMobile,
                    'wp-100 flex justify-end': !isMobile
                }"
            >
                <q-btn
                    flat
                    rounded
                    size="md"
                    @click="$router.push('/login')"
                    icon="cancel"
                    class="q-px-none"
                />
            </div>

            <div
                :class="{
                    'flex wp-100 justify-center' : Screen.sm
                }"
                class="q-px-md q-pt-lg">
                <h5
                    :class="{
                        'fs-23': isXS,
                        'text-white': Dark.isActive,
                        'text-left' : !isMobile || Screen.gt.sm || Screen.xs,
                        'wp-60' : Screen.sm
                    }"
                    class="no-padding q-mb-xs q-mt-sm"
                >
                    {{ $t('codeValidation.twoFAValidation') }}
                </h5>
                <!-- CHANGE AUTHENTICATION METHOD BUTTONS -->
                <div
                    :class="{
                        'wp-60' : Screen.sm,
                        'justify-start': Screen.gt.sm || Screen.xs
                    }"
                    class="flex flex-inline mt-35 ">
                    <!-- EMAIL BTN -->
                    <div
                        :class="`
                            ${
                                tab === 'email'
                                    ? `bg-nv-${GetSuffix('secondary')}
                            ${
                                !Dark.isActive
                                    ? 'text-nv-light-accent'
                                    : 'text-white'
                            }`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !Dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
                        `"
                        class="flex items-center justify-center py-10 px-17 br-30 fs-12 ls-2 q-mr-sm cursor-pointer"
                        @click="changeView('email')"
                    >
                        {{ $t('fields.email') }}
                    </div>
                    <!-- PHONE NUMBER BTN -->
                    <div
                        :class="`
                            ${
                                tab === 'phone'
                                    ? `bg-nv-${GetSuffix('secondary')}
                            ${
                                !Dark.isActive
                                    ? 'text-nv-light-accent'
                                    : 'text-white'
                            }`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !Dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
                        `"
                        class="flex items-center justify-center px-17 py-10 br-30 fs-12 ls-2 cursor-pointer q-mx-xs"
                        @click="changeView('phone')"
                    >
                        {{ $t('fields.phoneNumber') }}
                    </div>
                    <!-- AUTHY BTN -->
                    <div
                        :class="`
                            ${
                                tab === 'authy'
                                    ? `bg-nv-${GetSuffix('secondary')}
                            ${
                                !Dark.isActive
                                    ? 'text-nv-light-accent'
                                    : 'text-white'
                            }`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !Dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
                        `"
                        class="flex items-center justify-center px-17 py-10 br-30 fs-12 ls-2 cursor-pointer"
                        @click="changeView('authy')"
                    >
                        Authy
                    </div>
                </div>

                 <q-tab-panels
                    :class="`bg-nv-${Dark.isActive ? 'dark' : 'light'} text-nv-light-tertiary ${Screen.sm ? 'wp-60' : 'wp-100'}`"
                    v-model="tab"
                    animated>
                    <q-tab-panel
                        class="no-margin no-padding no-scroll"
                        name="email">
                        <p
                            :class="{
                                'fs-14': isMobile,
                                'fs-16': !isMobile
                            }"
                            class="mt-30 mb-40"
                        >
                            {{ $t('codeValidation.sendTo') }}
                            <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                                {{ EncodeText(getEncode, tab) }}
                            </span>
                        </p>
                        <CodeInput
                            :code="codeEmail.mailCode"
                            mode="counter2FAEmail" class="wp-100"
                            @addCode="setCodeEmail"
                            @removeCode="setCodeEmail"
                            @sendCode="sendCode('EnviarMail', (data) => codeEmail.mailHash = data.msg)"
                        />
                    </q-tab-panel>

                    <q-tab-panel
                        class="no-margin no-padding no-scroll"
                        name="phone">
                        <p
                            :class="{
                                'fs-14': isMobile,
                                'fs-16': !isMobile
                            }"
                            class="mt-30 mb-40"
                        >
                            {{ $t('codeValidation.sendTo') }}
                            <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                                {{ EncodeText(getEncode, tab) }}
                            </span>
                        </p>
                        <CodeInput class="wp-100"
                                   :code="codePhone.smsCode"
                                   mode="counter2FAPhone"
                                   @addCode="setCodePhone"
                                   @removeCode="setCodePhone"
                                   @sendCode="sendCode('EnviarSms', (data) => codePhone.smsHash = data.msg)" />
                    </q-tab-panel>

                    <q-tab-panel
                        class="no-margin no-padding no-scroll"
                        name="authy">
                         <p
                            :class="{
                                'fs-14': isMobile,
                                'fs-16': !isMobile
                            }"
                            class="mt-30 mb-40"
                        >
                           {{ $t('codeValidation.enter') }}
                            <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                                Authy
                            </span>
                            {{ $t('codeValidation.toObtain') }}
                        </p>
                        <CodeInput class="wp-100" :code="codeAuthy" :show-send-code="false" @addCode="setCodeAuthy" @removeCode="setCodeAuthy"/>
                    </q-tab-panel>
                </q-tab-panels>

                <q-btn
                    :color="`nv-${GetSuffix('primary')}`"
                    class="full-width br-20 py-12 mt-40 fs-16"
                    unelevated
                    no-caps
                    @click="$router.push('/login')"
                >
                    {{ $t('buttons.continue') }}
                </q-btn>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen, useQuasar } from 'quasar';
import { computed, reactive, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import CodeInput from '../../app/components/CodeInput.vue';
import EncodeText from '../../app/shared/helpers/EncodeText';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { useQoriPayRepository } from 'boot/axios';
import { storeToRefs } from 'pinia';

const $q = useQuasar();
const $router = useRouter();

const login = ref<boolean>(false);

const codeEmail = reactive<{
    mailCode: string | null;
    mailHash: string | null
}>({
    mailCode: null,
    mailHash: null
});

const codePhone = reactive<{
    smsCode: string | null;
    smsHash: string | null;
}>({
    smsCode: null,
    smsHash: null
});

const codeAuthy = ref<string | null>(null);

const tab = ref<string>('email');

// Stores
const authStore = useAuthStore();
const { loginForm } = storeToRefs(authStore);

const isMobile = computed(() => Screen.lt.md);

const getActiveMethod = computed(() =>
{
    return authStore.Active2FA;
});

const isXS = computed(() => Screen.lt.sm);

const getEncode = computed(() =>
{
    return tab.value === 'email' ? 'qoripay@email.com' : '+58 4140008907';
});

const setCodeEmail = (value: string) =>
{
    codeEmail.mailCode = value;
};

const sendCode = async(modulo: 'EnviarMail' | 'EnviarSms', fn: (data: Record<string, any>) => void) =>
{
    const { data }  = await useQoriPayRepository.sendCode({
        Modulo: modulo,
        User: <string> (loginForm.value.mode === 'email' ? loginForm.value.emailOrPhone : `${loginForm.value.code}${loginForm.value.emailOrPhone}`.replaceAll('+', '')),
        Password: <string> loginForm.value.password
    });

    if (data.error)
    {
        $q.notify({
            position: isMobile.value ? 'bottom' : 'top-right',
            message: `Ups... ${data.msg}` /* t(data.key) */,
            color: 'red',
            icon: 'warning'
        });
        return;
    }
    else
    {
        fn(data);
    }
};

const setCodePhone = (value: string) =>
{
    codePhone.smsCode = value;
};

const setCodeAuthy = (value: string) =>
{
    codeAuthy.value = value;
};


const changeView = (view: string) =>
{
    if (
        view === 'phone' && getActiveMethod.value.telefono ||
        view === 'email' && getActiveMethod.value.correo ||
        view === 'authy' && getActiveMethod.value.authy
    )
    {
        tab.value = view;
        $router.replace({
            path: '/two-factor-auth',
            query: {
                type: tab.value
            }
        });
    }
};

if ($router.currentRoute.value.query)
{
    // @ts-ignore
    const find = Object.keys(getActiveMethod.value).filter((e) =>
    {
        // @ts-ignore
        return getActiveMethod.value[e];
    });

    if (find)
    {
        const aux = find.toString() === 'correo' ? 'email' : (find.toString() === 'telefono' ? 'phone' : 'authy');
        changeView($router.currentRoute.value?.query?.type?.toString() ?? aux);
    }
    else
    {
        changeView($router.currentRoute.value?.query?.type?.toString() ?? 'email');
    }
}
</script>
