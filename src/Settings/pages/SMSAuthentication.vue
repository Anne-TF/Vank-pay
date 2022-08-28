 <template>
    <q-page
        class="q-py-md"
        style="height: 100vh;">
       <div
            :class="{
                'mt-25 q-px-lg' : isMobile,
                'q-px-md' : !isMobile
            }"
            class="flex flex-inline items-center">
            <div class="wp-100 flex justify-end mb-20" v-if="!isMobile">
                <q-icon
                    color="nv-light-tertiary"
                    @click="$emit('close')"
                    class="cursor-pointer"
                    size="2em"
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
                    {{ $t('settings.security.smsAuth.title') }}
                </h5>
            </div>
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile,
                'q-px-md' : !isMobile
            }"
            class="q-mt-lg">
            <p
                class="q-mt-sm fs-12 lh-20"
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
                'text-nv-light' : Dark.isActive,
                'text-nv-dark' : !Dark.isActive,
                'q-px-lg' : isMobile,
                'q-px-md' : !isMobile
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
                    @click="$router.push('/settings/security/sms-auth/change-phone')"
                    v-ripple
                    class="no-padding q-mb-sm"
                >
                    <q-item-section
                        :class="{
                            'q-pl-lg' : isMobile,
                            'q-pl-md' : !isMobile
                        }"
                        class="q-py-md">
                        {{ $t('settings.security.smsAuth.changeTheAuthentication') }}
                    </q-item-section>

                    <q-item-section
                        side
                        :class="{
                            'q-mr-lg' : isMobile,
                            'q-mr-md' : !isMobile
                        }"
                        class="flex items-center">
                        <q-icon name="chevron_right" />
                    </q-item-section>
                </q-item>
            </q-list>
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

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
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
