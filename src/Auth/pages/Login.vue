<template>
     <q-page class="hp-100" :class="{ 'row' : !isMobile  }">
     <!-- UPPER ROW WITH LOGO FOR MOBILE -->
        <div
            :class="{
                'hp-40 flex column items-center justify-evenly no-margin' : isMobile,
                'col-7 col-lg-8 row items-center justify-center' : !isMobile
            }">
            <div
                :class="{ 'text-nv-light-accent' : !Dark.isActive, 'q-px-sm' : isXS }"
                class="flex column items-center">
                <Logo class="q-mb-lg" :size="isMobile ? '165px' : '545px;'" />
                <h5 :class="{ 'fs-23' : isXS }" class="no-padding q-mb-xs q-mt-sm text-center">
                    {{ $t('login.welcome', [`${name}`]) }}
                </h5>
                <p class="no-margin no-padding text-center" :class="{ 'fs-12' : !isMobile && isXS, 'fs-11' : isXS }">
                    {{ $t('login.caption') }}
                </p>
            </div>
        </div>

        <div :class="{ 'hp-60' : isMobile, 'col-5 col-lg-4 flex justify-center items-center' : !isMobile }">
        <!-- LOGIN CARD -->
            <q-card
                :style="`${ isMobile ? 'border-radius: 40px 40px 0px 0px !important;' : '' }`"
                class="no-margin"
                :class="{'dark--card' : Dark.isActive, 'bg-white' : !Dark.isActive, 'br-40 hp-80 wp-93' : !isMobile, 'hp-100 wp-100' : isMobile }">
                <q-card-section class="q-pt-xl row no-margin justify-between">
                    hello
                    <q-btn
                        @click="switchMode()"
                        flat
                        round
                        :color="Dark.isActive ? 'white' : 'nv-light-secondary'"
                        :icon="Dark.isActive ? 'dark_mode' : 'brightness_5'"
                    />
                </q-card-section>
            </q-card>
        </div>
     </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed } from 'vue';
import Logo from '../../app/components/Logo.vue';

const isMobile = computed(() => Screen.lt.md);

const isXS = computed(() => Screen.lt.sm);

const name = computed(() => process.env.APP_NAME);

const switchMode = () =>
{
    Dark.set(!Dark.isActive);
};
</script>

<style lang="scss" scoped>
.dark--card {
    background-color: #1D2229;
}
</style>