<template>
    <q-card-section>
        <q-form ref="formRef" greedy>
            <p
                class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
            >
                {{ $t('fields.email') }} o
                {{ $t('fields.phoneNumber') }}
                <span
                    @click="changeValidate()"
                    v-show="width > 444"
                    :class="`text-nv-${GetSuffix(
                    'accent'
                )} text-medium ls-2 cursor-pointer ${
                    isMobile ? 'fs-10' : 'fs-12'
                }`"
                >
                {{
                        validating === 'email'
                            ? $t('fields.phoneNumber')
                            : $t('fields.email')
                    }}
            </span>
                <q-icon
                    size="1.6em"
                    @click="changeValidate()"
                    :color="`nv-${GetSuffix('accent')}`"
                    v-show="width <= 444"
                    class="q-mr-sm"
                    :name="validating === 'email' ? 'smartphone' : 'mail'"
                />
            </p>
            <q-input
                dark
                filled
                rounded
                v-model="data.emailOrPhone"
                :color="'transparent'"
                type="email"
                :placeholder="validating === 'email' ? 'money@qoripay.com' : '4240000000'"
                :inputmode="validating === 'phone' ? 'numeric' : 'text'"
                class="q-mb-md"
                :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-black': !Dark.isActive
            }"
                :rules="getRule"
            >
                <!-- NUMBER SLOT --->
                <template v-slot:prepend>
                <span
                    class="fs-14 cursor-pointer"
                    :class="{
                        'text-nv-light-tertiary': data.code.length < 1
                    }"
                    v-if="validating === 'phone'"
                    @click="country = true"
                >
                    <q-avatar class="q-mr-xs" color="transparent" size="3em">
                        {{ getEmoji(data.code) }}
                    </q-avatar>
                    {{ data.code }}
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
                                    dark
                                    filled
                                    rounded
                                    v-model="filter"
                                    :color="`nv-${GetSuffix('primary')}`"
                                    @update:model-value="onFilter"
                                    class="wp-85 ls-2 text-regular"
                                    :class="{
                                    'fs-13': isMobile,
                                    'rounded--dark-input': Dark.isActive,
                                    'rounded--light-input text-black': !Dark.isActive
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
                                            :active="item.countryCode === data.code"
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
                                                :class="`${(data.code === item.countryCode) ? `text-nv-${GetSuffix('accent')}` : ''}`"
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
            <q-space />
            <p class="text-nv-light-tertiary q-mt-none q-mb-sm fs-14">
                {{ $t('fields.password') }}
            </p>
            <q-input
                dark
                filled
                rounded
                v-model="data.password"
                placeholder="************"
                :color="'transparent'"
                :type="isPwd ? 'password' : 'text'"
                :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
                :rules="[
                (val) => (val && val.length > 7) || $t('validations.password')
            ]"
            >
                <template v-slot:append>
                    <q-icon
                        v-show="data.password.length > 0"
                        :name="isPwd ? 'visibility' : 'visibility_off'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>

            <q-btn
                :color="`nv-${GetSuffix('primary')}`"
                class="full-width br-20 py-12 q-mt-lg fs-16"
                unelevated
                no-caps
                @click="$router.push('/two-factor-auth')"
            >
                {{ $t('buttons.login') }}
            </q-btn>
        </q-form>
    </q-card-section>
    <q-card-section
        class="fs-12 text-nv-light-tertiary q-py-none"
    >
        {{ $t('login.newInPlatform') }}
        <span
            :class="`text-nv-${GetSuffix(
                                        'accent'
                                    )} cursor-pointer`"
            @click="changeView('sign-up')"
        >
                                    {{ $t('login.createAnAccount') }}
                                </span>

        <p
            @click="$router.push('/forgot-password')"
            :class="`text-nv-${GetSuffix(
                                        'accent'
                                    )} q-pt-md cursor-pointer`"
        >
            {{ $t('login.forgotYourPassword') }}
        </p>
    </q-card-section>

    <div
        class=" fs-10 text-center text-nv-light-tertiary cursor-pointer"
        @click="setLang(locale.includes('es') ? 'en-US' : 'es-ES')"
    >
        {{ $t('buttons.changeLanguageTo') }}
        <span
            class="ml-3"
            :class="`text-nv-${GetSuffix('accent')}`"
        >
                            {{
                $t(
                    `langs.${
                        locale.includes('es')
                            ? 'english'
                            : 'spanish'
                    }`
                )
            }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed, reactive, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import countriesData, { ICountry } from '../../assets/resources/countries';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const { t, locale } = useI18n({ useScope: 'global' });

const $router = useRouter();

defineProps({
    width: {
        type: Number,
        default: 0
    },
    changeView: {
        type: Function
    },
    setLang: {
        type: Function
    }
});

const formRef = ref<any>(null);
const countries = ref<ICountry[]>([...countriesData]);
const isPwd = ref<boolean>(true);
const country = ref<boolean>(false);
const validating = ref<string>('email');
const filter = ref<string>('');

const data = reactive({
    emailOrPhone: '',
    password: '',
    code: countries.value[0].countryCode
});

const isMobile = computed(() => Screen.lt.md);
const getRule = computed(() =>
{
    return validating.value === 'email'
        ? [
            (val: string) =>
                (val &&
                      val.match(
                          /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                      )) ||
                  t('validations.email')
        ]
        : [
            (val: string) =>
                (val && val.length > 0) || t('validations.required')
        ];
});

const changeValidate = () =>
{
    validating.value = validating.value === 'email' ? 'phone' : 'email';
    data.emailOrPhone = '';
    formRef.value?.reset();
};

const getEmoji = (countryCode: string): string | null =>
{
    return countriesData.find(c => c.countryCode === countryCode)?.emoji ?? null;
};

const setCode = (code: string): void  =>
{
    data.code = code;
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

</script>

<style lang="scss" scoped>
.small-avatar-section {
    .q-item__section--avatar {
        min-width: 30px !important;
        width: 30px !important;
    }
}
</style>
