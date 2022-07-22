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
                    {{ $t('passwordReset.passwordReset') }}
                </h5>

                <p
                    :class="{
                        'fs-12': isMobile,
                        'q-mt-md': isMobile
                    }"
                >
                    {{ $t('passwordReset.introduce') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        {{
                            $t('passwordReset.yourPassword').toLocaleLowerCase()
                        }}
                    </span>
                </p>

                <q-form class="mt-35" ref="formRef" greedy>
                    <p
                        class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
                    >
                        {{ $t('fields.password') }}
                    </p>
                    <q-input
                        dark
                        filled
                        rounded
                        v-model="data.password"
                        placeholder="************"
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
                                :name="isPwd ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                        </template>
                    </q-input>

                    <p
                        class="text-nv-light-tertiary q-mt-md q-mb-sm flex flex-inline items-center fs-14 justify-between"
                    >
                        {{ $t('fields.confirmPassword') }}
                    </p>
                    <q-input
                        dark
                        filled
                        rounded
                        v-model="data.confirmPassword"
                        placeholder="************"
                        :color="'transparent'"
                        :type="isPwd2 ? 'password' : 'text'"
                        :class="{
                            'rounded--dark-input': Dark.isActive,
                            'rounded--light-input text-nv-light-accent':
                                !Dark.isActive
                        }"
                        :rules="[
                            (val) =>
                                (val && val.length > 7) ||
                                $t('validations.password'),
                            (val) =>
                                val === data.password ||
                                $t('validations.passwordsDontMatch')
                        ]"
                    >
                        <template v-slot:append>
                            <q-icon
                                v-show="data.confirmPassword.length > 0"
                                :name="isPwd2 ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwd2 = !isPwd2"
                            />
                        </template>
                    </q-input>

                    <q-btn
                        :color="`nv-${GetSuffix('primary')}`"
                        class="full-width br-20 py-12 mt-30 fs-16"
                        unelevated
                        no-caps
                        @click="$router.push('/login')"
                    >
                        {{ $t('buttons.continue') }}
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
    password: '',
    confirmPassword: ''
});

const isPwd = ref<boolean>(true);
const isPwd2 = ref<boolean>(true);
const formRef = ref(null);
</script>
