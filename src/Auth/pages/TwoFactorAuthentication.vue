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

            <div class="q-px-md q-pt-lg">
                <h5
                    :class="{
                        'fs-23': isXS,
                        'text-white': Dark.isActive
                    }"
                    class="no-padding q-mb-xs q-mt-sm text-left"
                >
                    {{ $t('codeValidation.twoFAValidation') }}
                </h5>
                <!-- CHANGE AUTHENTICATION METHOD BUTTONS -->
                <div class="flex flex-inline justify-start mt-35">
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

                <p
                    :class="{
                        'fs-14': isMobile,
                        'fs-16': !isMobile
                    }"
                    class="mt-30 mb-40"
                    v-if="tab === 'email' || tab === 'phone'"
                >
                    {{ $t('codeValidation.sendTo') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        {{ EncodeText(getEncode, tab) }}
                    </span>
                </p>

                <p
                    :class="{
                        'fs-14': isMobile,
                        'fs-16': !isMobile
                    }"
                    class="mt-30 mb-40"
                    v-else
                >
                    {{ $t('codeValidation.enter') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        Authy
                    </span>
                    {{ $t('codeValidation.toObtain') }}
                </p>

                <CodeInput @addCode="setCode" @removeCode="setCode" />

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
import { Dark, Screen } from 'quasar';
import { computed, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import CodeInput from '../../app/components/CodeInput.vue';
import EncodeText from '../../app/shared/helpers/EncodeText';
import { useRouter } from 'vue-router';

const $router = useRouter();

const code = ref<string | null>(null);
const tab = ref<string>('email');

const isMobile = computed(() => Screen.lt.md);
const isXS = computed(() => Screen.lt.sm);
const getEncode = computed(() =>
{
    return tab.value === 'email' ? 'qoripay@email.com' : '+58 4140008907';
});

const setCode = (value: string) =>
{
    code.value = value;
};

const changeView = (view: string) =>
{
    tab.value = view;
    $router.replace({
        path: '/two-factor-auth',
        query: {
            type: tab.value
        }
    });
};

if ($router.currentRoute.value.query)
{
    changeView($router.currentRoute.value?.query?.type ?? 'email');
}
</script>
