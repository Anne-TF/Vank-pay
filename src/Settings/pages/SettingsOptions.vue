 <template>
    <q-page
        :class="{
            'q-py-md' : isMobile
        }"
        style="height: 100vh;"
        class="flex column justify-between">
        <div class="mt-20">
            <div
                :class="{
                    'q-px-md' : isMobile
                }"
                class="flex flex-inline justify-between items-center">
                <q-icon class="cursor-pointer wp-10" @click="$router.back()" size="2em" name="arrow_back" />
                <h5
                    class="no-margin"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
                        'fs-18' : isMobile
                    }"
                >
                    {{ $t('settings.settings') }}
                </h5>
                <q-btn
                    @click="switchMode()"
                    flat
                    round
                    color="nv-light-tertiary"
                    :icon="Dark.isActive ? 'light_mode' : 'dark_mode'"
                />
            </div>

            <div
                :class="{
                    'q-px-md' : isMobile
                }"
                class="q-mt-xl">
                <div class="flex flex-inline justify-between">
                    <div class="flex items-center">
                        <q-icon
                            size="50px"
                            name="fa-solid fa-circle-user"
                            style="color: #939BA6 !important;"
                        />
                        <div class="q-ml-md">
                            <h5
                                class="no-margin"
                                @click="$router.push('/settings/profile')"
                                :class="{
                                    'text-nv-light' : Dark.isActive,
                                    'text-nv-dark' : !Dark.isActive,
                                    'fs-22' : isMobile
                                }"
                            >
                                {{ getUserName }}
                                <q-icon class="mb-6" style="color:  #939BA6;" name="chevron_right" />
                            </h5>

                            <p
                                style="color:  #939BA6;"
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
                                right: -20px;
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

            <div class="mt-35">
                <q-list
                    class="no-margin no-padding"
                    dense>
                    <q-item
                        clickable
                        v-ripple
                        @click="$router.push(link.to)"
                        class="no-padding q-mb-sm text-nv-light-tertiary"
                        v-for="(link, index) in options"
                        :key="index">
                        <q-item-section class="q-py-md q-pl-md" style="flex-direction: row !important; justify-content: start !important; align-items: center !important;">
                            <span
                                class="iconify fs-25 mr-10"
                                :data-icon="link.icon"
                            />
                            {{ $t(`${link.key}`) }}
                        </q-item-section>

                        <q-item-section side class="flex items-center q-mr-md">
                            <q-icon name="chevron_right" />
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>

        <div
            :class="{
                'q-px-md' : isMobile
            }"
            class="wp-100 flex justify-center">
            <q-btn
                class="wp-100 q-mx-auto q-py-sm fs-17 br-20"
                :color="`nv-${GetSuffix('tertiary')}`"
                no-caps
                unelevated
                @click="hasLogout"
            >
                {{ $t('settings.logout') }}
            </q-btn>

            <p
                :class="{
                    'text-nv-dark-light-grey' : Dark.isActive,
                    'text-nv-light-light-grey' : !Dark.isActive
                }"
                class="fs-11 mt-18 text-center"
            >
                {{ $t('settings.dontShareYourAccount') }}
            </p>
        </div>
    </q-page>
 </template>

<script lang="ts" setup>
import { Screen, Dark, useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useAuthStore } from 'stores/auth';
import { Router, useRouter } from 'vue-router';
import { useSettingsStore } from 'stores/settings';
import CopyClipboard from 'src/app/shared/helpers/CopyClipboard';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const $router: Router = useRouter();
const { t } = useI18n({ useScope: 'global' });

// CONSTANTS
const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const options = ref<{key: string, icon: string, to: string}[]>([
    {
        key: 'settings.paymentMethods.title',
        icon: 'ri:money-dollar-circle-fill',
        to: '/settings/payment-methods'
    },
    {
        key: 'settings.security.title',
        icon: 'ant-design:security-scan-filled',
        to: '/settings/security'
    },
    {
        key: 'settings.support.title',
        icon: 'ic:round-contact-support',
        to: '/settings/support'
    },
    {
        key: 'settings.share.title',
        icon: 'ci:share',
        to: '/settings/share'
    }
]);

// COMPUTEDS
const isMobile = computed(() => Screen.lt.md);
const getUserName = computed(() => authStore.UserName);
const getUserId = computed(() => '213338989');


// FUNCTIONS

const hasLogout = async() =>
{
    await authStore.logout();
    await $router.push('/');
};

const switchMode = () =>
{
    void settingsStore.setDarkMode(!Dark.isActive);
};

const copy = async(value: string): Promise<void> =>
{
    await CopyClipboard(value);

    $q.notify({
        position: isMobile.value ? 'bottom' : 'top-right',
        message: t('settings.copiedToClipboard'),
        textColor: Dark.isActive ? 'nv-dark-accent' : 'nv-light-accent',
        color: Dark.isActive ? 'nv-dark' : 'nv-light',
        icon: 'verified',
        progress: true
    });
};
</script>
