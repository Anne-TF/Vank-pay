<template>
    <div
        :class="{
            'wp-80': Screen.gt.sm,
            'wp-55': Screen.sm,
            'wp-100': Screen.xs
        }"
        class="flex flex-inline justify-between"
    >
        <q-input
            v-for="(input, index) in qtInputs" :key="index"
            dark
            filled
            class="text-center input"
            style="width: 3.34em"
            rounded
            v-model="valueInputs[index]"
            :ref="_ref => { inputs[index] = _ref }"
            @update:model-value="onUpdate($event, index)"
            @paste="onPaste"
            maxlength="1"
            mask="#"
            :color="'transparent'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
        />
    </div>
</template>

<script lang="ts" setup>

import { Dark, QInput, Screen } from 'quasar';
import { ref, watchEffect } from 'vue';

const props = defineProps({
    qtInputs: {
        type: Number,
        default: 6
    }
});

const emit = defineEmits(['addCode', 'removeCode']);

const inputs = ref<QInput[]>([]);

const valueInputs = ref<(string|null)[]>([]);

const onUpdate = (value: string, index: number) =>
{
    valueInputs.value[index] = value.length > 0 ? value : null;

    if (value.length > 0)
    {
        inputs.value[index + 1].focus();
    }
    else
    {
        inputs.value[index - 1].focus();
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
