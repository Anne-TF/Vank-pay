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
            class="flex flex-inline justify-between items-center">
            <q-icon class="cursor-pointer" @click="$router.back()" size="2em" name="arrow_back" />
            <div class="text-center">
                <h5
                    class="no-margin"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
                        'fs-18' : isMobile
                    }"
                >
                    {{ $t('settings.profile.accountInfo') }}
                </h5>
            </div>
            <q-icon
                @click="changePersonalInfo()"
                class="fs-20"
                :name="`img:icons/${getIcon}.svg`"
            />
        </div>

        <div
            :class="{
                'q-px-lg' : isMobile
            }"
            class="q-mt-xl">
            <q-icon
                size="60px"
                class="wp-100"
                name="fa-solid fa-circle-user"
                style="color: #939BA6 !important;"
            />

            <div class="text-center mt-20">
                <h5
                   class="no-margin"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
                        'fs-26' : isMobile
                    }"
                >
                    {{ getUserName }}
                    <q-icon class="ml-20" style="color:  #939BA6;" name="fa-solid fa-pen-to-square" />
                </h5>
            </div>

            <!-- TODO: MAKE THE COPY BUTTONS WORK -->
            <div
                :class="{
                    'text-nv-light' : Dark.isActive,
                    'text-nv-dark' : !Dark.isActive,
                }"
                class="row q-mx-none q-mb-none q-mt-lg">
                <div class="col-12 flex flex-inline justify-between">
                    <p class="no-margin">
                        UUID
                    </p>
                    <p class="no-margin">
                        23213232
                        <q-icon
                            size="1.6em"
                            class="ml-6 mb-4 cursor-pointer"
                            name="img:icons/copy.svg"
                        />
                    </p>
                </div>

                <div class="col-12 flex flex-inline q-mt-md justify-between">
                    <p class="no-margin">
                        {{ $t('fields.phoneNumber') }}
                    </p>
                    <p class="no-margin">
                        +{{ !viewPersonalInfo ? EncodeText(getUserPhone, 'phone') : getUserPhone }}
                        <q-icon
                            size="1.6em"
                            class="ml-6 mb-4 cursor-pointer"
                            name="img:icons/copy.svg"
                        />
                    </p>
                </div>

                <div class="col-12 flex flex-inline q-mt-md justify-between">
                    <p class="no-margin">
                        {{ $t('fields.email') }}
                    </p>
                    <p class="no-margin">
                        {{ !viewPersonalInfo ? EncodeText(getUserEmail, 'email') : getUserEmail }}
                        <q-icon
                            size="1.6em"
                            class="ml-6 mb-4 cursor-pointer"
                            name="img:icons/copy.svg"
                        />
                    </p>
                </div>
            </div>
        </div>
    </q-page>
 </template>

<script lang="ts" setup>
import { Screen, Dark } from 'quasar';
import { computed } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import EncodeText from '../../app/shared/helpers/EncodeText';
import { useAuthStore } from 'stores/auth';
import { useSettingsStore } from 'stores/settings';

// CONSTANTS
const authStore = useAuthStore();
const settingsStore = useSettingsStore();

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
const getUserName = computed(() => authStore.UserName);
const getUserPhone = computed(() => authStore.Phone);
const getUserEmail = computed(() => authStore.Email);
const getUserId = computed(() => '213338989');
const viewPersonalInfo = computed(() => settingsStore.PersonalInfo);
const getIcon = computed(() =>
{
    return !viewPersonalInfo.value ? `eye-${Dark.isActive ? 'dark' : 'light'}` : `eye-closed-${Dark.isActive ? 'dark' : 'light'}`;
});

// FUNCTIONS

const changePersonalInfo = () =>
{
    settingsStore.setPersonalInfo(!viewPersonalInfo.value);
};
</script>
