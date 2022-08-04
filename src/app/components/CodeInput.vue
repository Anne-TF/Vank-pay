<template>
    <div
        :class="{
            'wp-100': Screen.gt.sm,
            'wp-55': Screen.sm,
            'wp-100': Screen.xs
        }"
        class="flex flex-inline justify-between"
    >
    <p :class="{ 'fs-14' : isMobile, 'fs-16' : !isMobile }" class="wp-100 q-mt-none q-mb-sm">
        {{ $t('codeValidation.typeDigits') }}
    </p>
        <q-input
            v-for="(input, index) in qtInputs" :key="index"
            class="text-center input"
            style="width: 3.34em"
            rounded
            outlined
            :disable="props.disable"
            v-model="valueInputs[index]"
            :ref="_ref => { inputs[index] = _ref }"
            @update:model-value="onUpdate($event, index)"
            @paste="onPaste"
            maxlength="1"
            inputmode="numeric"
            mask="#"
            :rules="[
                (v) => v && v.length > 0 || 'Este campo es requerido.'
            ]"
            :color="'transparent'"
            :class="{
                'rounded--dark-input--withAlert': Dark.isActive,
                'rounded--light-input--withAlert text-nv-light-accent': !Dark.isActive
            }"
        />

        <!-- TODO: SHAKE BUTTON IF IT WAS NOT PRESSED -->
        <p
            v-if="props.mode && settingsStore[props.mode]?.active"
            v-show="showSendCode"
            style="margin-top: -12px; !important"
            class="wp-100 text-right fs-12 cursor-pointer"
            :class="{
                'text-nv-tertiary' : Dark.isActive,
                'text-nv-secondary' : !Dark.isActive
            }"
        >
            {{ $t('codeValidation.resendCode') }} {{ settingsStore[props.mode].counter }}s
        </p>
         <p
             v-else
            :class="`text-nv-${GetSuffix('accent')}`"
            v-show="showSendCode"
            style="margin-top: -12px; !important"
            @click="activeCounter"
            class="wp-100 text-right fs-12 cursor-pointer">
            {{ $t('codeValidation.sendCode') }}
        </p>
    </div>
</template>

<script lang="ts" setup>

import { Dark, QInput, Screen } from 'quasar';
import { computed, PropType, ref, watchEffect } from 'vue';
import GetSuffix from '../shared/helpers/GetSuffix';
import { useSettingsStore } from 'stores/settings';
import { storeToRefs } from 'pinia';

const props = defineProps({
    qtInputs: {
        type: Number,
        default: 6
    },
    showSendCode: {
        type: Boolean,
        default: true
    },
    code: String,
    mode: {
        type: String as PropType<'counter2FAPhone' | 'counter2FAEmail'>,
        default: null
    },
    disable: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['addCode', 'removeCode', 'sendCode']);

const settingsStore = useSettingsStore();
const settingsStoreRef = storeToRefs(settingsStore);

const inputs = ref<QInput[]>([]);

const valueInputs = ref<(string|null)[]>([]);

if (Boolean(props.code) && props.code)
{
    valueInputs.value = props.code.trim().split('');
}

const isMobile = computed(() => Screen.lt.md);

const onUpdate = (value: string, index: number) =>
{
    valueInputs.value[index] = value.length > 0 ? value : null;

    const focus = (i: number) =>
    {
        if (inputs.value[i])
        {
            inputs.value[i].focus();
        }
    };

    if (value.length > 0)
    {
        focus(index + 1);
    }
    else
    {
        focus(index - 1);
    }
};

const onPaste = (event: any) =>
{
    const copy = event.clipboardData.getData('text');

    if (!Number(copy))
    {
        return;
    }

    const valueCopy = `${copy}`.replaceAll(' ', '').trim().split('');

    for (let i = 0; i < props.qtInputs; i++)
    {
        valueInputs.value[i] = valueCopy[i];
    }
};

watchEffect(() =>
{
    if (valueInputs.value.every(v => v) && valueInputs.value.length === props.qtInputs)
    {
        emit('addCode', valueInputs.value.filter(v => v).toString().replaceAll(',', ''));
    }
    else
    {
        emit('removeCode', null);
    }
});

const activeCounter = () =>
{
    if (props.mode)
    {
        settingsStoreRef[props.mode].value.active = true;
        settingsStore.ActiveCounter2FA(props.mode, 60);
        emit('sendCode');
    }
};
</script>
