<template>
    <q-page
        class="hp-100"
        :class="{
            'bg-nv-dark' : Dark.isActive,
            'bg-nv-light' : !Dark.isActive
        }">
    <div class="flex justify-end q-pt-lg q-px-md">
        <q-btn
            flat
            rounded
            size="md"
            @click="$router.push('/login')"
            icon="cancel"
            class="q-px-none"
        />
    </div>

    <div class="q-px-md">
        <h5
            :class="{
                'fs-23': isXS,
                'text-white' : Dark.isActive
            }"
            class="no-padding q-mb-xs q-mt-sm text-left"
        >
            {{ $t('forgotPassword.forgotPassword') }}
        </h5>

        <p
            :class="{
                'fs-12' : isMobile,
                'q-mt-md' : isMobile
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
    </div>
    </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';

const isMobile = computed(() => Screen.lt.md);
const isXS = computed(() => Screen.lt.sm);
</script>
