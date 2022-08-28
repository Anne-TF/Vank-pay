 <template>
    <div
        class="q-py-md"
        style="height: 100%;">
        <div
            :class="{
                'q-px-lg mt-25' : isMobile,
                'mt-5 q-px-md' : !isMobile
            }"
            class="flex flex-inline justify-between items-center mt-23">
            <q-icon
                color="nv-light-tertiary"
                @click="$emit('close')"
                class="cursor-pointer"
                size="2em"
                name="cancel"
            />
            <div class="text-center">
                <h5
                    class="no-margin fs-18"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
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
                'q-px-lg' : isMobile,
                'q-px-md' : !isMobile
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
                   class="no-margin fs-26"
                    :class="{
                        'text-nv-light' : Dark.isActive,
                        'text-nv-dark' : !Dark.isActive,
                    }"
                >
                    {{ getUserName }}
                    <q-icon
                        @click="editName = true"
                        class="ml-20 cursor-pointer"
                        style="color:  #939BA6;"
                        name="fa-solid fa-pen-to-square"
                    />
                </h5>
            </div>

            <div
                :class="{
                    'text-nv-light' : Dark.isActive,
                    'text-nv-dark' : !Dark.isActive,
                }"
                class="row q-mx-none q-mb-none q-mt-lg fs-14">
                <div class="col-12 flex flex-inline justify-between">
                    <p class="no-margin">
                        UUID
                    </p>
                    <p class="no-margin">
                        23213232
                        <q-icon
                            size="1.6em"
                            class="ml-6 mb-4 cursor-pointer"
                            @click="copy('23213232')"
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
                            @click="copy(getUserPhone)"
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
                            @click="copy(getUserEmail)"
                        />
                    </p>
                </div>
            </div>
        </div>

        <q-dialog
            v-model="editName"
            :position="isMobile ? 'bottom' : 'standard'"
        >
            <q-card
                class="q-pa-sm no-scroll"
                :class="{
                    'br-40': !isMobile,
                    'bg-nv-dark' : Dark.isActive,
                    'bg-nv-light': !Dark.isActive
                }"
                :style="`${
                    isMobile
                    ? 'border-radius: 40px 40px 0px 0px !important; height: 35vh; width: 100%;'
                    : 'height: 400px; width: 400px;'
                }`"
            >
                <q-card-section class="flex column justify-between items-center q-pt-lg hp-100">
                    <div class="wp-90">
                        <p
                            class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
                        >
                            {{ $t('settings.username') }}
                        </p>
                        <q-input
                            outlined
                            rounded
                            v-model="input"
                            :color="`transparent`"
                            class="wp-100 ls-2 text-medium"
                            :class="{
                                'fs-15' : isMobile,
                                'rounded--dark-input--withAlert--space': Dark.isActive,
                                'rounded--light-input--withAlert--space text-nv-light-accent': !Dark.isActive
                            }"
                        />
                    </div>
                    <q-btn
                        :color="`nv-${GetSuffix('primary')}`"
                        class="wp-90 q-py-sm fs-16"
                        rounded
                        @click="editName = false"
                        unelevated
                        no-caps
                    >
                       {{ $t('buttons.done') }}
                    </q-btn>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
 </template>

<script lang="ts" setup>
import { Screen, Dark, useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import EncodeText from '../../app/shared/helpers/EncodeText';
import { useAuthStore } from 'stores/auth';
import { useSettingsStore } from 'stores/settings';
import CopyClipboard from 'src/app/shared/helpers/CopyClipboard';
import { useI18n } from 'vue-i18n';

// CONSTANTS
const $q = useQuasar();
const authStore = useAuthStore();
const settingsStore = useSettingsStore();
const editName = ref<boolean>(false);
const { t } = useI18n({ useScope: 'global' });

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
const getUserName = computed(() => authStore.UserName ?? '');
const getUserPhone = computed(() => authStore.Phone ?? '');
const getUserEmail = computed(() => authStore.Email ?? '');
const getUserId = computed(() => '213338989');
const viewPersonalInfo = computed(() => settingsStore.PersonalInfo);
const getIcon = computed(() =>
{
    return !viewPersonalInfo.value ? `eye-${Dark.isActive ? 'dark' : 'light'}` : `eye-closed-${Dark.isActive ? 'dark' : 'light'}`;
});

// FUNCTIONS

const changePersonalInfo = () =>
{
    settingsStore.setViewPersonalInfo(!viewPersonalInfo.value);
};

const input = ref<string>(getUserName.value);

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
