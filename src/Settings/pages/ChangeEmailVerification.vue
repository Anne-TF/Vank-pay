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
                    @click="$router.push('/')"
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
                        'text-nv-dark' : !Dark.isActive
                    }">
                    {{ $t('settings.security.smsAuth.verification') }}
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
                class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
            >
                {{ $t('fields.email') }}
            </p>
            <q-input
                rounded
                outlined
                v-model="email"
                :color="'transparent'"
                placeholder="money@qoripay.com"
                inputmode="text"
                class="q-mb-md"
                :class="{
                    'fs-13' : isMobile,
                    'rounded--dark-input--withAlert--space': Dark.isActive,
                    'rounded--light-input--withAlert--space text-dark': !Dark.isActive
                }"
                :rules="[
                    (val) =>
                        (val &&
                            val.match(
                                /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                            )) ||
                        $t('validations.email')
                ]"
            >
            </q-input>
        </div>

        <div
            :class="{
                'q-px-lg mt-30' : isMobile,
                'mt-20 q-px-md' : !isMobile
            }">
            <p class="no-margin fs-14">
                {{ $t('settings.security.emailAuth.emailVerification') }}
            </p>

            <CodeInput
                class="wp-100 mt-25"
                :disable="loading"
                :code="codeEmail.mailCode"
                @addCode="setCodeEmail"
                @removeCode="setCodeEmail"
                mode="counterChangeEmailNew"
            />

            <div v-if="getActiveMethods.telefono">
                <p
                    :class="{
                        'mt-30' : isMobile,
                        'mt-20' : !isMobile
                    }"
                    class="q-mb-none fs-14">
                    {{ $t('codeValidation.sendTo') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        {{ EncodeText('+'.concat(getPhone), 'phone') }}
                    </span>
                </p>

                <CodeInput
                    class="wp-100 mt-25"
                    :disable="loading"
                    :code="codePhone.smsCode"
                    @addCode="setCodePhone"
                    @removeCode="setCodePhone"
                    mode="counterChangeEmailPhone"
                />
            </div>

            <div v-if="getActiveMethods.correo">
                <p
                    :class="{
                        'mt-30' : isMobile,
                        'mt-20' : !isMobile
                    }"
                    class="q-mb-none fs-14 lh-25">
                    {{ $t('codeValidation.sendTo') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        {{ EncodeText(getEmail, 'email') }}
                    </span>
                </p>

                <CodeInput
                    class="wp-100 mt-25"
                    :disable="loading"
                    :code="codeOldEmail.mailCode"
                    @addCode="setCodeOldEmail"
                    @removeCode="setCodeOldEmail"
                    mode="counterChangeEmailOld"
                />
            </div>

           <div v-if="getActiveMethods.authy">
                <p
                    class="mt-30 fs-14"
                >
                    {{ $t('codeValidation.enter') }}
                    <span :class="`text-nv-${GetSuffix('accent')} q-mx-xs`">
                        Authy
                    </span>
                    {{ $t('codeValidation.toObtain') }}
                </p>
                <CodeInput
                    class="wp-100 mt-35"
                    :code="codeAuthy"
                    :show-send-code="false"
                    @addCode="setCodeAuthy"
                    @removeCode="setCodeAuthy"
                />
           </div>

            <q-btn
                :color="`nv-${GetSuffix('primary')}`"
                :class="{
                    'mb-40' : !isMobile
                }"
                class="full-width br-20 py-12 mt-30 fs-16"
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
import { computed, ref, reactive } from 'vue';
import  GetSuffix from '../../app/shared/helpers/GetSuffix';
import EncodeText from '../../app/shared/helpers/EncodeText';
import { useAuthStore } from 'stores/auth';
import CodeInput from '../../app/components/CodeInput.vue';

// CONSTANTS
const authStore = useAuthStore();
const email = ref<string>('');

const codeEmail = reactive<{
    mailCode: string | null;
    mailHash: string | null
}>({
    mailCode: null,
    mailHash: null
});

const codePhone = reactive<{
    smsCode: string | null;
    smsHash: string | null;
}>({
    smsCode: null,
    smsHash: null
});

const codeOldEmail = reactive<{
    mailCode: string | null;
    mailHash: string | null
}>({
    mailCode: null,
    mailHash: null
});

const loading = ref<boolean>(false);

const codeAuthy = ref<string | null>(null);

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);
const getPhone = computed(() => authStore.phone ?? '');
const getEmail = computed(() => authStore.email ?? '');
const getActiveMethods = computed(() =>
{
    return authStore.Active2FA;
});

// FUNCTIONS

const setCodePhone = (value: string) =>
{
    codePhone.smsCode = value;
};

const setCodeAuthy = (value: string) =>
{
    codeAuthy.value = value;
};

const setCodeEmail = (value: string) =>
{
    codeEmail.mailCode = value;
};

const setCodeOldEmail = (value: string) =>
{
    codeOldEmail.mailCode = value;
};
</script>
