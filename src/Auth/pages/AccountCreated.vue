<template>
    <q-page
        class="hp-100"
        :class="{
            'bg-nv-dark': Dark.isActive,
            'bg-nv-light': !Dark.isActive,
            'flex column flex-center': !isMobile
        }"
    >
    <q-scroll-area
                    :thumb-style="{
                        right: '0px',
                        borderRadius: '9px',
                        backgroundColor: `${
                            Dark.isActive ? '#016608' : '#52B301'
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
        <div
            :class="{
                'wp-40' : !isMobile
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

            <div class="q-px-md q-pt-lg q-pb-lg">
                <h5
                    :class="{
                        'fs-23': isXS,
                        'text-white' : Dark.isActive,
                        'text-nv-light-accent' : !Dark.isActive
                    }"
                    class="no-padding q-mb-xs q-mt-sm text-left"
                >
                    {{ $t('accountCreated.accountCreated') }}

                    <q-icon class="q-ml-xs" size="1.7em" name="check_circle_outline" />
                </h5>

               <div class="flex justify-center q-mt-xl">
                <h4
                    :class="{
                        'fs-17' : isMobile,
                        'fs-18' : !isMobile,
                        'text-white' : Dark.isActive,
                        'text-nv-light-accent' : !Dark.isActive
                    }"
                    class="wp-100 text-center q-my-xs"
               >
                {{ $t('accountCreated.validateYourEntity') }}
               </h4>

                <q-icon size="11em" name="img:icons/user.svg" />

                <p
                    :class="{
                        'text-white' : Dark.isActive,
                        'text-nv-light-accent' : !Dark.isActive
                    }"
                    class="q-mt-md q-mx-md"
                >
                    {{ $t('accountCreated.caption') }}
                </p>

                <div
                    :class="{
                        'text-white' : Dark.isActive,
                        'text-nv-light-accent' : !Dark.isActive
                    }"
                    class="q-mt-md q-mb-xs text-left wp-100">
                    <p
                        v-for="document in documents"
                        :key="document"
                        class="q-mt-none q-mb-sm q-mx-md"
                    >
                    <span
                        :style="`
                          height: 5px;
                          width: 5px;
                          background-color: ${
                            Dark.isActive ? '#fff' : '#29313C'
                          };
                          border-radius: 50%;
                          display: inline-block;
                        `"
                        class="q-mr-sm mb-2"
                      ></span>
                        {{ $t(`accountCreated.${document}`) }}
                    </p>

                     <p
                    :class="{
                        'text-white' : Dark.isActive,
                        'text-nv-light-accent' : !Dark.isActive
                    }"
                    class="q-mt-lg q-mx-md"
                >
                    {{ $t('accountCreated.pressTheButton') }}
                </p>
                </div>

               </div>
                <q-btn
                    :color="`nv-${GetSuffix('primary')}`"
                    class="full-width br-20 py-12 q-mt-sm fs-16"
                    unelevated
                    no-caps
                    @click="$router.push('/password-reset')"
                >
                    {{ $t('buttons.continue') }}
                </q-btn>
            </div>
        </div>
        </q-scroll-area>
    </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed, reactive, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';

const isMobile = computed(() => Screen.lt.md);
const isXS = computed(() => Screen.lt.sm);

const documents = [
    'ci', 'passport', 'carnet', 'cpp', 'ptp', 'license'
];

</script>
