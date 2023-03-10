<template>
    <q-page
        class="hp-100"
        :class="{
            'bg-nv-dark': Dark.isActive,
            'bg-nv-light': !Dark.isActive,
            'flex column flex-center' : !isMobile
        }"
    >
        <div>
            <div
            :class="{
                'flex justify-end q-pt-lg q-px-md' : isMobile,
                'wp-100 flex justify-end' : !isMobile
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
                {{ $t('forgotPassword.forgotPassword') }}
            </h5>

            <p
                :class="{
                    'fs-12': isMobile,
                    'q-mt-md': isMobile
                }"
            >
                {{ $t('forgotPassword.introduce') }}
                <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                    {{ $t('fields.email').toLocaleLowerCase() }}
                </span>
                {{ $t('forgotPassword.willReceive') }}
                <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                    {{ $t('forgotPassword.instructions') }}
                </span>
            </p>

            <q-form class="mt-35" ref="formRef" greedy>
                <p
                class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
            >
                {{ $t('fields.email') }}
                </p>
                <q-input
                    dark
                    outlined
                    rounded
                    v-model="data.email"
                    :color="'transparent'"
                    type="email"
                    placeholder="money@qoripay.com"
                    class="q-mb-md"
                    :class="{
                        'fs-13' : isMobile,
                        'rounded--dark-input--withAlert--space': Dark.isActive,
                        'rounded--light-input--withAlert--space text-nv-light-accent': !Dark.isActive
                    }"
                    :rules="[
                        (val) =>
                            (val &&
                                val.match(
                                    /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                                )) ||
                            $t('validations.email')
                    ]"
                />

                <q-btn
                :color="`nv-${GetSuffix('primary')}`"
                class="full-width br-20 py-12 q-mt-sm fs-16 text-black"
                unelevated
                no-caps
                @click="$router.push('/verify-email')"
            >
                {{ $t('buttons.send') }}
            </q-btn>
            </q-form>
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

const data = reactive({
    email: ''
});
const formRef = ref(null);
</script>
