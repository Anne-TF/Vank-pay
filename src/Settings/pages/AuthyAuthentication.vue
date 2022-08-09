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
            class="flex flex-inline mt-20">
            <q-icon class="cursor-pointer wp-10" @click="$router.back()" size="2em" name="arrow_back" />
            <div class="wp-85 text-center">
                <h5
                    class="no-margin"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
                        'fs-18' : isMobile
                    }">
                    {{ $t('settings.security.authyAuth.title') }}
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
                {{ $t('settings.security.authyAuth.caption1') }}
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
                {{ $t('settings.security.authyAuth.title') }}
            </p>

            <q-toggle
                :class="{
                    'nv-switch--active--dark' : authyAuth && Dark.isActive,
                    'nv-switch--inactive--dark' : !authyAuth && Dark.isActive,
                    'nv-switch--active--light' : authyAuth && Dark.isActive,
                    'nv-switch--inactive--light' : !authyAuth && Dark.isActive,
                }"
                class="mr-9 mb-10"
                @update:model-value="setAuthy"
                :model-value="authyAuth"
            />
        </div>

         <div class="mt-25">
            <q-list
                class="no-margin no-padding"
                dense>
                 <q-item
                    clickable
                    v-ripple
                    @click="$router.push('/settings/security/authy-auth/change-authy')"
                    class="no-padding q-mb-sm"
                >
                    <q-item-section class="q-py-md q-pl-lg">
                        {{ $t('settings.security.authyAuth.changeTheAuthentication') }}
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
import { computed } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import { useAuthStore } from 'stores/auth';

// CONSTANTS
const authStore = useAuthStore();

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
const authyAuth = computed(() => authStore.Active2FA.authy);

// FUNCTIONS

const setAuthy = () =>
{
    authStore.setActive2FA({
        telefono: authStore.Active2FA.telefono,
        correo: authStore.Active2FA.correo,
        authy: !authyAuth.value
    });
};
</script>
