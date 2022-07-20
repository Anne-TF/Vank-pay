<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />

                <q-toolbar-title> Quasar App </q-toolbar-title>

                <div>Quasar v{{ version }}</div>
                <div>
                    <q-toggle :model-value="dark.isActive" @update:model-value="switchMode" />
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <q-item-label header> Essential Links </q-item-label>

                <EssentialLink
                    v-for="link in linksList"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import EssentialLink from '../components/EssentialLink.vue';
import { useQuasar } from 'quasar';

const { version } = useQuasar();
const { dark } = useQuasar();

const linksList = [
    {
        title: 'Login',
        caption: 'login',
        icon: 'login',
        link: '/#/login'
    },
    {
        title: 'Register',
        caption: 'Register',
        icon: 'sign-up',
        link: '/#/sign-up'
    }
];

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () =>
{
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

const switchMode = () =>
{
    dark.set(!dark.isActive);
};
</script>
