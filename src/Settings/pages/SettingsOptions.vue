 <template>
    <q-page
        :class="{
            'q-py-md' : isMobile
        }"
        style="height: 100vh;"
        class="flex column justify-between">
        <div>
            <div
                :class="{
                    'q-px-lg' : isMobile
                }"
                class="flex flex-inline">
                <q-icon class="cursor-pointer wp-10" @click="$router.back()" size="2em" name="arrow_back" />
                <div class="wp-85 text-center">
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
                </div>
            </div>

            <div
                :class="{
                    'q-px-lg' : isMobile
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

                            <!-- TODO: MAKE THE COPY BUTTON WORK -->
                            <p
                                style="color:  #939BA6;"
                                class="q-mb-none q-mx-none ls-5 q-mt-xs text-light">
                                ID: {{ getUserId }}
                                <q-icon
                                    size="1.6em"
                                    class="mb-4 cursor-pointer"
                                    name="img:icons/copy.svg"
                                />
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div
                            style="
                                background-color: #353E49;
                                width: 99px;
                                right: 0;
                                position:absolute;
                                border-radius: 50px 0px 0px 50px;
                                height: 32px;
                            "
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
                        <q-item-section class="q-py-md q-pl-lg" style="flex-direction: row !important; justify-content: start !important;">
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
            </div>
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile
            }"
            class="wp-100 flex justify-center">
            <q-btn
                class="wp-100 q-mx-auto q-py-sm fs-17 br-20"
                :color="`nv-${GetSuffix('tertiary')}`"
                no-caps
                unelevated
            >
                {{ $t('settings.logout') }}
            </q-btn>

            <p
                :class="{
                    'text-nv-dark-light-grey' : Dark.isActive,
                    'text-nv-light-light-grey' : !Dark.isActive
                }"
                class="fs-11 mt-18"
            >
                {{ $t('settings.dontShareYourAccount') }}
            </p>
        </div>
    </q-page>
 </template>

<script lang="ts" setup>
import { Screen, Dark } from 'quasar';
import { computed } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useAuthStore } from 'stores/auth';

// CONSTANTS
const authStore = useAuthStore();
const options = <{key: string, icon: string, to: string}[]>[
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
];

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
const getUserName = computed(() => authStore.UserName);
const getUserId = computed(() => '213338989');
</script>
