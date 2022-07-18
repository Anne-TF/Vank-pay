<template>
    <router-view />
</template>

<script lang="ts">
import { Dark } from 'quasar';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    name: 'App',
    setup()
    {
        onMounted(() =>
        {
            const aux = process.env.APP_NAME === 'Qoripay' ? true : 'auto';
            Dark.set(aux);
        });
    }
});
</script>
