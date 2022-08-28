 <template>
    <div
        class="q-py-md"
        style="height: 100%;">
        <div
            :class="{
                'q-px-lg mt-25' : isMobile,
                'mt-5 q-px-md' : !isMobile
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
                    {{ $t('settings.security.authyAuth.title') }}
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
                {{ $t('settings.security.authyAuth.caption1') }}
            </p>
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile,
                'q-px-md' : !isMobile,
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
                    <q-item-section
                        :class="{
                            'q-pl-lg' : isMobile,
                            'q-pl-md' : !isMobile
                        }"
                        class="q-py-md">
                        {{ $t('settings.security.authyAuth.changeTheAuthentication') }}
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
    </div>
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
