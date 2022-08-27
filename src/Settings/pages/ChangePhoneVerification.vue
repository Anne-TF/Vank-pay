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
                        'text-nv-dark' : !Dark.isActive,
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
                {{ $t('fields.phoneNumber') }}
            </p>
            <q-input
                rounded
                outlined
                v-model="phoneNumber"
                :color="'transparent'"
                placeholder="4240000000"
                inputmode="numeric"
                class="q-mb-md"
                :class="{
                    'fs-13' : isMobile,
                    'rounded--dark-input--withAlert--space': Dark.isActive,
                    'rounded--light-input--withAlert--space text-dark': !Dark.isActive
                }"
            >
                <!-- NUMBER SLOT --->
                <template v-slot:prepend>
                    <span
                        class="fs-14 cursor-pointer"
                        :class="{
                            'text-nv-light-tertiary': code?.length < 1
                        }"
                        @click="country = true"
                    >
                        <q-avatar color="transparent" size="3em">
                            {{ getEmoji(code) }}
                        </q-avatar>
                        {{ code }}
                        <q-icon
                            size="21px"
                            :name="!country ? 'expand_more' : 'expand_less'"
                        />
                    </span>

                    <!-- SELECT COUNTRY DIALOG -->
                    <q-dialog
                        v-model="country"
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
                                ? 'border-radius: 40px 40px 0px 0px !important; height: 60vh; width: 100%;'
                                : 'height: 600px; width: 600px;'
                        }`"
                        >
                            <q-card-section class="flex justify-between q-pt-lg">
                                <q-input
                                    outlined
                                    rounded
                                    v-model="filter"
                                    :color="`nv-${GetSuffix('primary')}`"
                                    @update:model-value="onFilter"
                                    class="wp-85 ls-2 text-medium"
                                   :class="{
                                        'fs-13' : isMobile,
                                        'rounded--dark-input--withAlert--space': Dark.isActive,
                                        'rounded--light-input--withAlert--space text-nv-light-accent': !Dark.isActive
                                    }"
                                    :placeholder="$t('fields.search')"
                                />
                                <q-btn
                                    icon="close"
                                    flat
                                    round
                                    v-close-popup
                                    color="nv-light-tertiary"
                                />
                            </q-card-section>

                            <q-card-section class="hp-80 q-py-xs">
                                <q-scroll-area
                                    :thumb-style="{
                                    right: '0px',
                                    borderRadius: '9px',
                                    backgroundColor: `${
                                        Dark.isActive ? '#016608' : '#52B301'
                                    }`,
                                    width: '3px',
                                    opacity: '0.7'
                                }"
                                    :barStyle="{
                                    right: '0px',
                                    borderRadius: '5px',
                                    backgroundColor: '#C4C4C4',
                                    width: '3px',
                                    opacity: '0.4'
                                }"
                                    class="no-margin hp-100"
                                >
                                    <q-list>
                                        <q-item
                                            v-for="(item, index) in countries"
                                            :key="index"
                                            clickable
                                            :active="item.countryCode === code"
                                            :active-class="`text-nv-${GetSuffix(
                                            'accent'
                                        )}`"
                                            @click="setCode(item.countryCode)"
                                            :class="{'text-white' : Dark.isActive, 'text-nv-dark' : !Dark.isActive }"
                                            class="small-avatar-section cursor-pointer"
                                        >
                                            <q-item-section avatar>
                                                {{ item.emoji }}
                                            </q-item-section>

                                            <q-item-section class="fs-13 ls-2">
                                                {{ item.name }}
                                            </q-item-section>

                                            <q-item-section
                                                :class="`${(code === item.countryCode) ? `text-nv-${GetSuffix('accent')}` : ''}`"
                                                class="fs-13"
                                                side>
                                                {{
                                                    item.countryCode
                                                }}</q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-scroll-area>
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </template>
            </q-input>
        </div>

        <div
            :class="{
                'q-px-lg mt-40' : isMobile,
                'mt-30 q-px-md' : !isMobile
            }"
        >
            <p class="no-margin fs-14">
                {{ $t('settings.security.smsAuth.phoneVerification') }}
            </p>

            <CodeInput
                class="wp-100 mt-25"
                :disable="loading"
                :code="codePhone.smsCode"
                @addCode="setCodePhone"
                @removeCode="setCodePhone"
                mode="counterChangePhoneNew"
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
                    :code="codeOldPhone.smsCode"
                    @addCode="setCodeOldPhone"
                    @removeCode="setCodeOldPhone"
                    mode="counterChangePhoneOld"
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
                    :code="codeEmail.mailCode"
                    @addCode="setCodePhone"
                    @removeCode="setCodePhone"
                    mode="counterChangePhoneOld"
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

// Data
import countriesData, { ICountry } from '../../assets/resources/countries';

// CONSTANTS
const authStore = useAuthStore();
const country = ref<boolean>(false);
const countries = ref<ICountry[]>([...countriesData]);
const phoneNumber = ref<string>('');
const filter = ref<string>('');
const code = ref<string>(countries.value[0].countryCode);

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

const codeOldPhone = reactive<{
    smsCode: string | null;
    smsHash: string | null;
}>({
    smsCode: null,
    smsHash: null
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

const getEmoji = (countryCode: string): string | null =>
{
    return countriesData.find(c => c.countryCode === countryCode)?.emoji ?? null;
};

const setCode = (value: string): void  =>
{
    code.value = value;
    country.value = false;
};

const onFilter = () =>
{
    if (filter.value.length > 0)
    {
        countries.value = countriesData.filter((e) =>
        {
            return e.name.toLowerCase().includes(filter.value.toLowerCase());
        });
    }
    else
    {
        countries.value = [...countriesData];
    }
};

const setCodePhone = (value: string) =>
{
    codePhone.smsCode = value;
};

const setCodeOldPhone = (value: string) =>
{
    codeOldPhone.smsCode = value;
};


const setCodeAuthy = (value: string) =>
{
    codeAuthy.value = value;
};

const setCodeEmail = (value: string) =>
{
    codeEmail.mailCode = value;
};
</script>
