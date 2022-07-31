<template>
    <q-layout view="lHh Lpr lFf">
        <!-- <q-header elevated>
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
        </q-drawer> -->

        <q-page-container>
             <q-scroll-observer @scroll="handleScroll" />
            <router-view />
        </q-page-container>

        <transition
            mode="in-out"
            enter-active-class="animated fadeInUp"
            :duration='{ enter: 200, leave: 200 }'
            leave-active-class="animated fadeOutDown">
            <div
                v-show="(isMobile && showMobileMenu) && (!getRouteMeta?.hideMobileMenu ?? true)"
                :style="`background-color: ${dark.isActive ? '#1D2229' : '#F5F5F5'}; height: 60px;`"
                class="fixed-bottom mb-30 mx-35 br-18 q-py-sm q-px-lg flex flex-inline items-center justify-between"
            >
                <div
                    v-for="(link, index) in linksList"
                    :key="index"
                    class="wp-13 hp-80 flex items-center justify-center br-8"
                    :style="`
                        ${
                            getRoute === link.link && link.link !== '#' && dark.isActive ?
                            'background-color: #29313C' : (getRoute === link.link ? 'background-color: #868E9B' : '')}
                            ${
                                link.link === '#' ?
                                'background-color: #3B424B; width: 52px; height: 52px; border-radius: 13px; transform: rotate(-45deg);' : ''
                            }
                    `"
                >
                    <q-icon
                        size="22px"
                        v-show="link.library === 'fa'"
                        :name="link.icon"
                        :class="{
                            'text-white' : getRoute === link.link,
                        }"
                    />
                    <span
                        v-show="link.library === 'ic'"
                        class="iconify fs-32"
                        style="transform: rotate(46deg);"
                        :class="`text-nv-${GetSuffix('accent')}`"
                        :data-icon="link.icon">
                    </span>

                    <i v-show="link.library === 'ri'" :class="`fs-24 ${link.icon} ${getRoute === link.link ? 'text-white' : ''}`" />
                </div>
            </div>
        </transition>
    </q-layout>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import EssentialLink from '../components/EssentialLink.vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import GetSuffix from '../shared/helpers/GetSuffix';

const { version } = useQuasar();
const { dark } = useQuasar();
const { screen } = useQuasar();
const $router = useRouter();

const linksList = [
    {
        title: 'Billeteras',
        icon: 'fa-solid fa-wallet',
        link: '/',
        library: 'fa'
    },
    {
        title: 'Notificaciones',
        icon: 'ri-notification-4-fill',
        link: '/notifications',
        library: 'ri'
    },
    {
        title: 'Pagos',
        icon: 'gg:arrows-exchange',
        link: '#',
        library: 'ic'
    },
    {
        title: 'Mi perfil',
        icon: 'fa-solid fa-user',
        link: '/auth/my-profile',
        library: 'fa'
    },
    {
        title: 'Configuraciones',
        icon: 'fa-solid fa-sliders',
        link: '/settings',
        library: 'fa'
    }
];

const leftDrawerOpen = ref<boolean>(false);
const showMobileMenu = ref<boolean>(true);

const toggleLeftDrawer = () =>
{
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

const switchMode = () =>
{
    dark.set(!dark.isActive);
};

const handleScroll = (info: any) =>
{
    if (info?.direction === 'down')
    {
        showMobileMenu.value = false;
    }
    else
    {
        setTimeout(() =>
        {
            showMobileMenu.value = true;
        }, 50);
    }
};

const getRoute = computed(() => $router.currentRoute.value.path);
const getRouteMeta = computed(() => $router.currentRoute.value.meta);
const isMobile = computed(() => screen.lt.md);
</script>
