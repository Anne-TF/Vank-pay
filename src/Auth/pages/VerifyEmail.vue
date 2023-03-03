<template>
    <q-page
        class="hp-100"
        :class="{
            'bg-nv-dark': Dark.isActive,
            'bg-nv-light': !Dark.isActive,
            'flex column flex-center': !isMobile
        }"
    >
        <div>
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
                    {{ $t('verifyEmail.verifyEmail') }}
                </h5>

                <p
                    :class="{
                        'fs-12': isMobile,
                        'q-mt-md': isMobile
                    }"
                >
                    {{ $t('verifyEmail.theCode') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        {{ $t('verifyEmail.activation').toLocaleLowerCase() }}
                    </span>
                    {{ $t('verifyEmail.wasSended') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        {{ $t('verifyEmail.toYourAccount') }}
                    </span>
                </p>

                <q-btn
                    :color="`nv-${GetSuffix('primary')}`"
                    class="full-width br-20 py-12 q-mt-sm fs-16 text-black"
                    unelevated
                    no-caps
                    @click="$router.push('/password-reset')"
                >
                    {{ $t('buttons.login') }}
                </q-btn>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed, reactive, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';

const isMobile = computed(() => Screen.lt.md);
const isXS = computed(() => Screen.lt.sm);

</script>
