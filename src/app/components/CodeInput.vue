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
            dark
            filled
            class="text-center input"
            style="width: 3.34em"
            rounded
            ref="input1"
            maxlength="1"
            mask="#"
            v-model="code[0]"
            @update:model-value="onUpdate(input2, 0)"
            :color="'transparent'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
        />
        <q-input
            dark
            filled
            class="text-center input"
            style="width: 3.34em"
            rounded
            ref="input2"
            maxlength="1"
            mask="#"
            v-model="code[1]"
            @update:model-value="onUpdate(input3, 1)"
            :color="'transparent'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
        />
        <q-input
            dark
            filled
            class="text-center input"
            style="width: 3.34em"
            rounded
            ref="input3"
            maxlength="1"
            mask="#"
            v-model="code[2]"
            @update:model-value="onUpdate(input4, 2)"
            :color="'transparent'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
        />
        <q-input
            dark
            filled
            class="text-center input"
            style="width: 3.34em"
            rounded
            ref="input4"
            maxlength="1"
            mask="#"
            v-model="code[3]"
            @update:model-value="onUpdate(input5, 3)"
            :color="'transparent'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
        />
        <q-input
            dark
            filled
            class="text-center input"
            style="width: 3.34em"
            rounded
            ref="input5"
            maxlength="1"
            mask="#"
            v-model="code[4]"
            @update:model-value="onUpdate(input6, 4)"
            :color="'transparent'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
        />
        <q-input
            dark
            filled
            class="text-center input"
            style="width: 3.34em"
            rounded
            ref="input6"
            maxlength="1"
            mask="#"
            v-model="code[5]"
            @update:model-value="onUpdate(null, 5)"
            :color="'transparent'"
            :class="{
                'rounded--dark-input': Dark.isActive,
                'rounded--light-input text-nv-light-accent': !Dark.isActive
            }"
        />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { Dark, Screen } from 'quasar';

export default defineComponent({
    emits: ['add'],
    props: {
        value: {
            type: Array,
            default: () => []
        }
    },
    setup(props, { emit })
    {
        const input1 = ref(null);
        const input2 = ref(null);
        const input3 = ref(null);
        const input4 = ref(null);
        const input5 = ref(null);
        const input6 = ref(null);

        const code = ref<string[]>([]);

        const onUpdate = (input: any, index: number) =>
        {
            if (index < 5)
            {
                input.focus();
            }
            else if (index > 5)
            {
                emit('add', code.value);
            }
        };
        return {
            Dark,
            onUpdate,
            Screen,
            input1,
            input2,
            input3,
            input4,
            input5,
            input6,
            code
        };
    }
});
</script>
