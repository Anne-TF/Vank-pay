<template>
    <q-form ref="formRef" greedy>
        <p
            class="text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between"
        >
            {{ $t('fields.email') }} o
            {{ $t('fields.phoneNumber') }}
            <span
                @click="changeValidate()"
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
        </p>
        <q-input
            dark
            filled
            rounded
            v-model="data.emailOrPhone"
            :color="'transparent'"
            type="email"
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
                    <q-avatar class="q-mr-xs" color="transparent" size="20px">
                        <q-img
                            style="
                                object-fit: fill !important;
                                object-position: center !important;
                                top: -10px !important;
                            "
                            :spinner-color="`nv-${GetSuffix('primary')}`"
                            spinner-size="10px"
                            :src="
                                getFlag(
                                    data.code.length > 0 ? data.code : '+93'
                                )
                            "
                        />
                    </q-avatar>
                    {{ data.code.length > 0 ? data.code : '+93' }}
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
                        class="q-pa-sm"
                        :class="{
                            'br-40': !isMobile
                        }"
                        :style="`${
                            isMobile
                                ? 'border-radius: 40px 40px 0px 0px !important; height: 440px; width: 100%;'
                                : 'height: 600px; width: 600px;'
                        }`"
                    >
                        <q-card-section class="flex justify-between q-pt-lg">
                            <q-input
                                outlined
                                v-model="filter"
                                :color="`nv-${GetSuffix('primary')}`"
                                rounded
                                dense
                                class="wp-85 ls-2 text-regular"
                                :class="{
                                    'fs-13': isMobile
                                }"
                                :placeholder="$t('fields.search')"
                            />
                            <q-btn
                                icon="close"
                                flat
                                round
                                dense
                                v-close-popup
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
                                class="no-margin"
                                style="min-height: 100% !important"
                            >
                                <q-list>
                                    <q-item
                                        v-for="(item, index) in countries"
                                        :key="index"
                                        clickable
                                        :active="item.countryCode === data.code"
                                        :active-class="`text-nv-${GetSuffix(
                                            'primary'
                                        )}`"
                                        @click="setCode(item.countryCode)"
                                        class="text-white small-avatar-section cursor-pointer"
                                    >
                                        <q-item-section avatar>
                                            <q-avatar
                                                color="transparent"
                                                size="25px"
                                            >
                                                <q-img
                                                    style="
                                                        object-fit: fill !important;
                                                        object-position: center !important;
                                                        top: -12px !important;
                                                    "
                                                    :spinner-color="`nv-${GetSuffix(
                                                        'primary'
                                                    )}`"
                                                    spinner-size="12px"
                                                    width="40px"
                                                    :src="item.image"
                                                />
                                            </q-avatar>
                                        </q-item-section>
                                        <q-item-section class="fs-13 ls-2">
                                            {{ item.name }}
                                        </q-item-section>

                                        <q-item-section class="fs-13" side>{{
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
        >
            {{ $t('buttons.login') }}
        </q-btn>
    </q-form>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed, reactive, ref } from 'vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import countries from '../../assets/resources/countries';
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });

const data = reactive({
    emailOrPhone: '',
    password: '',
    code: ''
});

const formRef = ref<any>(null);
const isPwd = ref<boolean>(true);
const country = ref<boolean>(false);
const validating = ref<string>('email');
const filter = ref<string>('');

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

const getFlag = (code: string) =>
{
    return countries.find((e: any) => e.countryCode === code)?.image ?? '';
};

const setCode = (code: string) =>
{
    data.code = code;
    country.value = false;
};
</script>
