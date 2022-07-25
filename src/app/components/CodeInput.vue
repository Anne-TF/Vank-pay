<template>
    <div
        :class="{
            'wp-80': Screen.gt.sm,
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
            dark
            class="text-center input"
            style="width: 3.34em"
            rounded
            outlined
            v-model="valueInputs[index]"
            :ref="_ref => { inputs[index] = _ref }"
            @update:model-value="onUpdate($event, index)"
            @paste="onPaste"
            maxlength="1"
            mask="#"
            :rules="[
                (v) => v && v.length > 0 || 'Este campo es requerido.'
            ]"
            :color="'transparent'"
            :class="{
                'rounded--dark-input--withAlert': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
        />

         <p
            :class="`text-nv-${GetSuffix('accent')}`"
            style="margin-top: -12px; !important"
            class="wp-100 text-right fs-12 cursor-pointer">
            {{ $t('codeValidation.sendCode') }}
        </p>
    </div>
</template>

<script lang="ts" setup>

import { Dark, QInput, Screen } from 'quasar';
import { computed, ref, watchEffect } from 'vue';
import GetSuffix from '../shared/helpers/GetSuffix';

const props = defineProps({
    qtInputs: {
        type: Number,
        default: 6
    }
});

const emit = defineEmits(['addCode', 'removeCode']);

const inputs = ref<QInput[]>([]);

const valueInputs = ref<(string|null)[]>([]);

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

</script>
