 <template>
    <div
        class="q-py-md"
        style="height: 100%;">
        <div
            :class="{
                'mt-25' : isMobile,
                'mt-5' : !isMobile
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
                class="cursor-pointer wp-10"
                @click="$router.back()"
                size="2em"
                name="arrow_back"
            />
            <div class="wp-85 text-center">
                <h5
                    class="no-margin fs-18"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
                    }">
                    {{ $t('settings.changePassword.title') }}
                </h5>
            </div>
        </div>

        <div
            class="q-mt-lg q-px-md">
            <p
                class="q-mt-sm fs-12 lh-20"
            >
                {{ $t('settings.changePassword.toConfirm') }}
                <span :class="`text-nv-${GetSuffix('accent')}`">
                    {{ $t('settings.changePassword.passwordChange') }}
                </span>
                {{ $t('settings.changePassword.sendCode') }}
                <span :class="`text-nv-${GetSuffix('accent')}`">
                    {{ $t('settings.security.twofa') }}
                </span>
                {{ $t('settings.changePassword.selectedMethod') }}
            </p>
        </div>

        <div
            class="q-mt-lg q-px-md">
            <p class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14">
                {{ $t('settings.changePassword.currPass') }}
            </p>
            <q-input
                dark
                outlined
                rounded
                placeholder="************"
                v-model="data.currentPassword"
                :color="'transparent'"
                class="q-mb-md"
                :type="isPwd ? 'password' : 'text'"
                :class="{
                    'fs-13' : isMobile,
                    'rounded--dark-input--withAlert--space': Dark.isActive,
                    'rounded--light-input--withAlert--space text-nv-light-accent': !Dark.isActive
                }"
                :rules="[
                    (val) => (val && val.length > 7) || $t('validations.password')
                ]"
            >
                <template v-slot:append>
                    <q-icon
                        v-show="data.currentPassword?.length > 0"
                        :name="isPwd ? 'visibility' : 'visibility_off'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>

            <q-space />

            <p class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14">
                {{ $t('fields.password') }}
            </p>
            <q-input
                dark
                outlined
                rounded
                placeholder="************"
                v-model="data.password"
                :color="'transparent'"
                class="q-mb-md"
                :type="isPwd2 ? 'password' : 'text'"
                :class="{
                    'fs-13' : isMobile,
                    'rounded--dark-input--withAlert--space': Dark.isActive,
                    'rounded--light-input--withAlert--space text-nv-light-accent': !Dark.isActive
                }"
                :rules="[
                    (val) => (val && val.length > 7) || $t('validations.password')
                ]"
            >
                <template v-slot:append>
                    <q-icon
                        v-show="data.password?.length > 0"
                        :name="isPwd2 ? 'visibility' : 'visibility_off'"
                        class="cursor-pointer"
                        @click="isPwd2 = !isPwd2"
                    />
                </template>
            </q-input>

            <q-space />

            <p class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14">
                {{ $t('fields.confirmPassword') }}
            </p>
            <q-input
                dark
                placeholder="************"
                outlined
                rounded
                v-model="data.confirmPassword"
                :color="'transparent'"
                :type="isPwd3 ? 'password' : 'text'"
                :class="{
                    'fs-13' : isMobile,
                    'rounded--dark-input--withAlert--space': Dark.isActive,
                    'rounded--light-input--withAlert--space text-nv-light-accent': !Dark.isActive
                }"
                :rules="[
                    (val) => (val && val.length > 7) || $t('validations.password')
                ]"
            >
                <template v-slot:append>
                    <q-icon
                        v-show="data.confirmPassword?.length > 0"
                        :name="isPwd3 ? 'visibility' : 'visibility_off'"
                        class="cursor-pointer"
                        @click="isPwd3 = !isPwd3"
                    />
                </template>
            </q-input>

            <q-btn
                :color="`nv-${GetSuffix('primary')}`"
                class="full-width br-20 py-12 q-mt-lg fs-16 text-black"
                unelevated
                no-caps
            >
                {{ $t('buttons.continue') }}
            </q-btn>
        </div>
    </div>
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
