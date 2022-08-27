<template>
    <div
        class="q-mt-xl q-px-lg">
        <div class="flex flex-inline justify-between">
            <div class="flex items-center">
                <q-icon
                    :size="`${Screen.lt.md ? '50px' : '3.4em'}`"
                    name="fa-solid fa-circle-user cursor-pointer"
                    @click="$router.push('/settings/profile')"
                    style="color: #939BA6 !important;"
                />
                <div class="q-ml-md">
                    <h5
                        class="no-margin cursor-pointer"
                        @click="$router.push('/settings/profile')"
                        :class="{
                            'text-nv-light' : Dark.isActive,
                            'text-nv-dark' : !Dark.isActive,
                            'fs-22' : Screen.lt.md,
                            'fs-20' : Screen.gt.sm
                        }"
                    >
                        {{ getUserName }}
                        <q-icon class="mb-6" style="color:  #939BA6;" name="chevron_right" />
                    </h5>

                    <p
                        style="color:  #939BA6;"
                        :class="{
                            'fs-12' : Screen.gt.md
                        }"
                        class="q-mb-none q-mx-none ls-5 q-mt-xs text-light">
                        ID: {{ getUserId }}
                        <q-icon
                            size="1.6em"
                            class="mb-4 cursor-pointer"
                            name="img:icons/copy.svg"
                            @click="copy(getUserId)"
                        />
                    </p>
                </div>
            </div>

            <div class="flex items-center">
                <div
                    :style="`
                        background-color: ${Dark.isActive ? '#353E49' : 'rgba(238, 238, 238, 0.9);'};
                        width: 99px;
                        right: 0;
                        position:absolute;
                        border-radius: 50px 0px 0px 50px;
                        height: 32px;
                        `"
                        class="flex flex-inline items-center pl-10"
                    >
                    <q-icon
                        size="1.3em"
                        name="img:icons/badge-check.svg"
                    />
                    <span class="q-ml-sm text-nv-info">LvL 1</span>
                </div>
            </div>
        </div>
    </div>
     <q-list
        class="q-mx-none no-padding q-mt-md"
        dense>
        <q-item
            clickable
            v-ripple
            @click="$router.push(link.to)"
            class="no-padding q-mb-sm text-nv-light-tertiary"
            v-for="(link, index) in options"
            :key="index">
            <q-item-section class="q-py-md q-pl-lg" style="flex-direction: row !important; justify-content: start !important; align-items: center !important;">
                <span
                    class="iconify fs-25 mr-10"
                    :data-icon="link.icon"
                />
                    {{ $t(`${link.key}`) }}
            </q-item-section>

            <q-item-section side class="flex items-center q-mr-lg">
                <q-icon name="chevron_right" />
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script lang="ts" setup>
import { Dark, Screen, useQuasar } from 'quasar';
import { useAuthStore } from 'stores/auth';
import { computed, ref } from 'vue';
import CopyClipboard from '../shared/helpers/CopyClipboard';
import { useI18n } from 'vue-i18n';

defineProps({
    options: {
        type: Array,
        default: () => []
    }
});

// STORES
const authStore = useAuthStore();

// CONSTANTS
const { t } = useI18n({ useScope: 'global' });
const $q = useQuasar();

// COMPUTEDS

const getUserName = computed(() => authStore.UserName);
const getUserId = computed(() => '213338989');

// FUNCTIONS

const copy = async(value: string): Promise<void> =>
{
    await CopyClipboard(value);

    $q.notify({
        position: Screen.lt.md ? 'bottom' : 'top-right',
        message: t('settings.copiedToClipboard'),
        textColor: Dark.isActive ? 'nv-dark-accent' : 'nv-light-accent',
        color: Dark.isActive ? 'nv-dark' : 'nv-light',
        icon: 'verified',
        progress: true
    });
};
</script>
