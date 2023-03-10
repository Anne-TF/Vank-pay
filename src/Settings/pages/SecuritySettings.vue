 <template>
    <q-page
        class="q-py-md"
        style="height: 100vh;">
        <div
            :class="{
                'mt-25' : isMobile,
            }"
            class="flex flex-inline items-center q-px-md">
            <div class="wp-100 flex justify-end mb-20" v-if="!isMobile">
                <q-icon
                    color="nv-light-tertiary"
                    @click="$emit('close')"
                    class="cursor-pointer"
                    size="1.8em"
                    name="cancel"
                />
            </div>
            <q-icon
                v-if="isMobile"
                class="cursor-pointer wp-10"
                @click="$router.back()"
                size="2em"
                name="arrow_back"
            />
            <div
                :class="{
                    'wp-85' : isMobile,
                    'wp-100' : !isMobile
                }"
                class="text-center">
                <h5
                    class="no-margin fs-18"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
                    }">
                    {{ $t('settings.security.title') }}
                </h5>
            </div>
        </div>

        <div
            class="q-mt-xl q-px-md">
            <h5
                class="no-margin fs-16"
                :class="{
                    'text-nv-light' : Dark.isActive,
                    'text-nv-dark' : !Dark.isActive,
                }">
                {{ $t('settings.security.twoFactorAuth') }}
            </h5>

            <p
                class="q-mt-sm fs-12 lh-20 text-nv-light-tertiary"
            >
                {{ $t('settings.security.caption') }}
                <span :class="`text-nv-${GetSuffix('accent')}`">
                    {{ $t('settings.security.twofa') }}
                </span>
                {{ $t('settings.security.autheticationMethod') }}
            </p>
        </div>

        <div
            class="q-mt-lg row q-mb-none q-mx-none text-nv-light-tertiary q-px-md">
            <div class="col-6 col-sm-6">
                <div
                    :style="`
                        background-color: ${Dark.isActive ? '#353E49' : '#EEEEEE'};
                        height: 92px;
                    `"
                    @click="$router.push('/settings/security/sms-auth')"
                    class="flex flex-inline justify-between items-center br-17 px-14 wp-93 cursor-pointer"
                >
                    <q-icon size="2.6em" :name="`img:icons/message-${Dark.isActive ? 'dark' : 'light'}.svg`" />
                    <span
                        class="mx-1 wp-40 fs-13 lh-18">
                        {{ $t('settings.security.text') }}
                    </span>
                    <q-icon size="1.8em" name="chevron_right" />
                </div>
            </div>

            <div class="col-6 col-sm-6 flex justify-end">
                <div
                    @click="$router.push('/settings/security/email-auth')"
                    :style="`
                        background-color: ${Dark.isActive ? '#353E49' : '#EEEEEE'};
                        height: 92px;
                    `"
                    class="flex flex-inline justify-between items-center br-17 px-14 wp-93 cursor-pointer"
                >
                    <q-icon size="2.6em" :name="`img:icons/email-${Dark.isActive ? 'dark' : 'light'}.svg`" />
                    <span
                        class="mx-1 wp-40 fs-13 lh-18">
                        {{ $t('settings.security.email') }}
                    </span>
                    <q-icon size="1.8em" name="chevron_right" />
                </div>
            </div>

            <div
                class="col-12 flex justify-center q-mt-lg">
                <div
                    @click="$router.push('/settings/security/authy-auth')"
                    :style="`
                        background-color: ${Dark.isActive ? '#353E49' : '#EEEEEE'};
                        height: 92px;
                    `"
                    class="flex flex-inline justify-between items-center br-17 px-14 wp-50 cursor-pointer"
                >
                    <q-icon size="2.6em" :name="`img:icons/authy-${Dark.isActive ? 'dark' : 'light'}.svg`" />
                    <span
                        class="mx-1 wp-40 fs-13 lh-18">
                        {{ $t('settings.security.authy') }}
                    </span>
                    <q-icon size="1.8em" name="chevron_right" />
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
                    @click="$router.push('/settings/security/change-password')"
                    class="no-padding q-mb-sm text-nv-light-tertiary">
                    <q-item-section
                        class="q-py-md q-pl-md">
                        {{ $t('fields.password') }}
                    </q-item-section>

                    <q-item-section
                        side
                        class="flex items-center q-mr-md">
                        <q-icon name="chevron_right" />
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-page>
 </template>

<script lang="ts" setup>
import { Screen, Dark } from 'quasar';
import { computed, ref } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useAuthStore } from 'stores/auth';

// CONSTANTS
const authStore = useAuthStore();
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
</script>
