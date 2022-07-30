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

                <p
                    :class="{
                        'fs-12': isMobile,
                        'mt-25': isMobile
                    }"
                >
                    {{ $t('codeValidation.theCode') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        {{
                            $t('codeValidation.validation')
                        }}
                    </span>
                    {{ $t('codeValidation.wasSend') }}
                </p>

                 <p
                    :class="{
                        'fs-14': isMobile,
                        'fs-16' : !isMobile
                    }"
                    class="mt-40 q-mb-lg"
                >
                    {{ $t('codeValidation.sendTo') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                       {{ EncodeEmail('qoripay@email.com', 'email') }}
                    </span>
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
import EncodeEmail from '../../app/shared/helpers/EncodeText';

const isMobile = computed(() => Screen.lt.md);
const isXS = computed(() => Screen.lt.sm);

const code = ref<string | null>(null);

const setCode = (value: string) =>
{
    code.value = value;
};

</script>
