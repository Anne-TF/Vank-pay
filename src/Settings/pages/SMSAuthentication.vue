 <template>
    <q-page
        :class="{
            'q-py-md' : isMobile
        }"
        style="height: 100vh;">
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
                    }">
                    {{ $t('settings.security.smsAuth.title') }}
                </h5>
            </div>
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile
            }"
            class="q-mt-lg">
            <p
                :class="{
                    'fs-12 lh-20' : isMobile
                }"
                class="q-mt-sm"
            >
                {{ $t('settings.security.smsAuth.caption1') }}
                <span :class="`text-nv-${GetSuffix('accent')}`">
                    {{ $t('settings.security.smsAuth.sms') }}
                </span>
                {{ $t('settings.security.smsAuth.caption2') }}
            </p>
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile,
                'text-nv-light' : Dark.isActive,
                'text-nv-dark' : !Dark.isActive
            }"
            class="mt-70 flex flex-inline justify-between items-center">
            <p class="no-margin fs-14">
                {{ $t('settings.security.smsAuth.title') }}
            </p>

            <q-toggle
                :class="{
                    'nv-switch--active--dark' : smsAuth && Dark.isActive,
                    'nv-switch--inactive--dark' : !smsAuth && Dark.isActive,
                    'nv-switch--active--light' : smsAuth && Dark.isActive,
                    'nv-switch--inactive--light' : !smsAuth && Dark.isActive,
                }"
                class="mr-9 mb-10"
                @update:model-value="setPhone"
                :model-value="smsAuth"
            />
        </div>

         <div class="mt-25">
            <q-list
                class="no-margin no-padding"
                dense>
                 <q-item
                    clickable
                    v-ripple
                    class="no-padding q-mb-sm"
                >
                    <q-item-section class="q-py-md q-pl-lg">
                        {{ $t('settings.security.smsAuth.changeTheAuthentication') }}
                    </q-item-section>

                    <q-item-section side class="flex items-center q-mr-lg">
                        <q-icon name="chevron_right" />
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-page>
 </template>

<script lang="ts" setup>
import { Screen, Dark } from 'quasar';
import { computed, reactive, ref } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useAuthStore } from 'stores/auth';

// CONSTANTS
const authStore = useAuthStore();
const data = reactive({
    currentPassword: '',
    password: '',
    confirmPassword: ''
});
const isPwd = ref<boolean>(true);
const isPwd2 = ref<boolean>(true);
const isPwd3 = ref<boolean>(true);
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
const smsAuth = computed(() => authStore.Active2FA.telefono);

// FUNCTIONS

const setPhone = () =>
{
    authStore.setActive2FA({
        telefono: !smsAuth.value,
        correo: authStore.Active2FA.correo,
        authy: authStore.Active2FA.authy
    });
};
</script>
