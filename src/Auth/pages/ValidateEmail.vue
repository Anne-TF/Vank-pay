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
                        'q-mt-md': isMobile
                    }"
                >
                    {{ $t('codeValidation.theCode') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        {{
                            $t('codeValidation.validation').toLocaleLowerCase()
                        }}
                    </span>
                    {{ $t('codeValidation.wasSend') }}
                </p>

                <CodeInput @addCode="setCode" @removeCode="setCode" />
                {{ code }}
            </div>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import {computed, ref} from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import CodeInput from '../../app/components/CodeInput.vue';

const isMobile = computed(() => Screen.lt.md);
const isXS = computed(() => Screen.lt.sm);

const code = ref<string | null>(null)

const setCode = (value: string) =>
{
    code.value = value;
};

</script>
