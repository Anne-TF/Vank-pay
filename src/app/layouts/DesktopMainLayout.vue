<template>
    <q-layout :view="screen.gt.md ? 'lHh Lpr lFf' : 'hHh Lpr lff'">
        <q-header
            v-if="!isMobile"
            :class="{
                'bg-nv-dark' : dark.isActive,
                'bg-nv-light' : !dark.isActive
            }"
        >
            <q-toolbar class="q-py-xs">
                <q-btn
                    flat
                    dense
                    round
                    size="3vh"
                    :icon="`img:icons/menu-${dark.isActive ? 'dark' : 'light'}.svg`"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />
                <q-space />


               <div
                    style="min-height: 42px; max-height: 42px; width: 42px;"
                    @click="$router.push('/notifications')"
                    class="flex items-center no-padding cursor-pointer justify-center br-8 q-mr-md"
                    :style="`
                        ${
                            getRoute.includes('notifications') && dark.isActive ?
                            'background-color: #29313C' : (getRoute.includes('notifications') ? 'background-color: #EBECF0' : '')
                        }`"
                    >

                    <i
                        class="ri-notification-4-fill fs-28"
                        :class="{
                            'text-white' : getRoute.includes('notifications') && dark.isActive,
                            'text-nv-dark' : getRoute.includes('notifications') && !dark.isActive,
                        }"
                    />
                </div>

                <div
                    style="min-height: 42px; max-height: 42px; width: 42px;"
                    @click="closeMenu()"
                    class="flex items-center no-padding cursor-pointer justify-center br-8 q-mr-md"
                    :style="`
                        ${
                            getRoute === '/' && dark.isActive ?
                            'background-color: #29313C' : (getRoute === '/' ? 'background-color: #EBECF0' : '')
                        }`"
                    >

                    <q-icon
                        size="1.8em"
                        name="fa-solid fa-wallet"
                        :class="{
                            'text-white' : getRoute === '/' && dark.isActive,
                            'text-nv-dark' : getRoute === '/' && !dark.isActive,
                        }"
                    />
                </div>

                <div>
                    <q-icon
                        class="cursor-pointer"
                        v-show="!showDesktopMenu"
                        :name="`img:icons/transfer-${getIconSuffix}.svg`"
                        size="4em"
                    />

                    <q-icon
                        v-show="showDesktopMenu"
                        size="4em"
                        :name="`img:icons/close-${getIconSuffix}.svg`"
                    />

                    <q-menu v-model="showDesktopMenu" :offset="[0, 15]" style="border-radius: 10px !important;">
                        <q-card
                            :class="{
                                'bg-nv-dark' : dark.isActive,
                                'bg-nv-light' : !dark.isActive
                            }"
                            class="q-pa-lg br-10 wp-100"
                            style="
                                height: 20em !important;
                            "
                        >
                            <div class="flex flex-inline items-center q-mb-sm">
                                <q-icon size="3em" :name="`img:icons/deposit-${getIconSuffix}.svg`" />
                                <div class="q-ml-md">
                                    <h5
                                        :class="{
                                            'text-white' : dark.isActive,
                                            'text-nv-light-accent' : !dark.isActive
                                        }"
                                        style="letter-spacing: 2px;"
                                        class="no-margin fs-18">
                                        {{ $t('buttons.deposit.title') }}
                                    </h5>
                                    <p
                                        :class="{
                                            'text-white' : dark.isActive,
                                            'text-nv-light-accent' : !dark.isActive
                                        }"
                                        class="q-mt-sm fs-12 text-light q-mb-none">
                                        {{ $t('buttons.deposit.caption') }}
                                    </p>
                                </div>
                            </div>

                            <div class="flex flex-inline items-center q-pt-lg q-mb-sm">
                                <q-icon size="3em" :name="`img:icons/withdraw-${getIconSuffix}.svg`" />
                                <div class="q-ml-md">
                                    <h5
                                        :class="{
                                            'text-white' : dark.isActive,
                                            'text-nv-light-accent' : !dark.isActive
                                        }"
                                        style="letter-spacing: 2px;"
                                        class="no-margin fs-18">
                                        {{ $t('buttons.withdraw.title') }}
                                    </h5>
                                    <p
                                        :class="{
                                            'text-white' : dark.isActive,
                                            'text-nv-light-accent' : !dark.isActive
                                        }"
                                        class="q-mt-sm text-light fs-12 no-margin">
                                        {{ $t('buttons.withdraw.caption') }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-inline items-center q-pt-lg q-mb-sm">
                                <q-icon size="3em" :name="`img:icons/p2p-${getIconSuffix}.svg`" />
                                    <div class="q-ml-md">
                                        <h5
                                            :class="{
                                                'text-white' : dark.isActive,
                                                'text-nv-light-accent' : !dark.isActive
                                            }"
                                            style="letter-spacing: 2px;"
                                            class="no-margin fs-18">
                                            {{ $t('buttons.sendMoney.title') }}
                                        </h5>
                                        <p
                                            :class="{
                                                'text-white' : dark.isActive,
                                                'text-nv-light-accent' : !dark.isActive
                                            }"
                                            class="q-mt-sm text-light fs-12 no-margin">
                                            {{ $t('buttons.sendMoney.caption') }}
                                        </p>
                                    </div>
                            </div>
                        </q-card>
                    </q-menu>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer
            :class="{
                'bg-nv-dark' : dark.isActive,
                'bg-nv-light' : !dark.isActive
            }"
            :width="400"
            :mini-width="90"
            show-if-above
            style="height: 100%;"
            :mini="mini"
            :behavior="screen.md ? 'mobile' : 'desktop'"
            v-model="leftDrawerOpen"
            v-if="!isMobile">
            <div class="flex justify-center q-py-md">
                <Logo :size="'8vh'" />
            </div>
            <q-list class="q-mt-sm">
                <EssentialLink :options="options" />
            </q-list>

            <template v-slot:mini>
                <div class="fit mini-slot cursor-pointer">
                    <div class="flex column items-center q-py-md">
                        <Logo :size="'5vh'" />

                        <q-icon
                            size="2.3em"
                            name="fa-solid fa-circle-user q-mt-xl"
                            style="color: #939BA6 !important;"
                        />
                    </div>
                    <div
                        v-for="(link, index) in options"
                        :key="index"
                        @click="$router.push(link.to)"
                        :class="{
                            'mt-25' : index > 0,
                            'mt-8' : index < 1,
                            'text-nv-light-tertiary' : !$router.currentRoute.value.path.includes(link.to)
                        }"
                        class="column items-center">
                        <span
                            class="iconify fs-30"
                            :class="`${ $router.currentRoute.value.path.includes(link.to) ? `text-nv-${GetSuffix('accent')}` : ''}`"
                            :data-icon="link.icon"
                        />
                    </div>
                </div>
            </template>
        </q-drawer>

        <q-page-container>
            <q-page
                :class="{
                    'flex items-center q-px-lg' : screen.gt.sm,
                    'justify-end' : screen.lt.lg && $router.currentRoute.value.path !== '/',
                    'justify-center' : screen.gt.md || screen.md && $router.currentRoute.value.path === '/',
                    'bg-nv-ultra-dark' : dark.isActive,
                }"
                style="height: 50vh;">
                <Transition
                    appear
                    appear-active-class="animated slideInLeft"
                    leave-active-class="animated slideOutLeft"
                    :duration="{
                        enter: 300,
                        leave: 200
                    }"
                >
                    <q-card
                        :class="{
                            'bg-nv-dark' : dark.isActive,
                            'wp-29 br-20 q-pa-md' : screen.gt.md,
                            'wp-35 br-20 q-pa-md' : screen.md,
                            'no-padding' : screen.sm || screen.xs
                        }"
                        flat
                        v-show="show"
                        class="hide-scrollbar"
                        :style="`
                            height: ${screen.gt.sm ? '80' : '100'}vh; overflow-y: auto;
                        `">
                        <router-view v-slot="{ Component, route }" >
                            <Transition
                                :appear-active-class="route.meta.enterAnimation"
                                :leave-active-class="route.meta.leaveAnimation"
                                :duration="{
                                    enter: 100,
                                    leave: 200
                                }"
                            >
                                <component
                                    style="height: 100% !important;"
                                    @close="closeMenu"
                                    :is="Component"
                                />
                            </Transition>
                        </router-view>
                    </q-card>
                </Transition>
                <div
                    style="contain: content;"
                    v-if="screen.gt.sm"
                    :class="{
                        'wp-68' : screen.gt.md,
                        'wp-80' : screen.md && $router.currentRoute.value.path === '/',
                        'wp-60' : screen.md && $router.currentRoute.value.path !== '/'
                    }">
                    <MainBalanceView class="hp-90" />
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import EssentialLink from '../components/EssentialLink.vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import GetSuffix from '../shared/helpers/GetSuffix';
import { useSettingsStore } from 'stores/settings';
import Logo from '../components/Logo.vue';
import MainBalanceView from '../../Balance/pages/MainBalanceView.vue';

const { version } = useQuasar();
const { dark } = useQuasar();
const { screen } = useQuasar();
const $router = useRouter();
const settingsStore = useSettingsStore();

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
const options = ref<{key: string, icon: string, to: string}[]>([
    {
        key: 'settings.paymentMethods.title',
        icon: 'ri:money-dollar-circle-fill',
        to: 'payment-methods'
    },
    {
        key: 'settings.security.title',
        icon: 'ant-design:security-scan-filled',
        to: '/settings/security'
    },
    {
        key: 'settings.support.title',
        icon: 'ic:round-contact-support',
        to: 'support'
    },
    {
        key: 'settings.share.title',
        icon: 'ci:share',
        to: 'share'
    }
]);

const leftDrawerOpen = ref<boolean>(false);
const showMobileMenu = ref<boolean>(true);
const morphGroupModel = ref<string>('menu');
const showMenu = ref<boolean>(false);
const show = ref<boolean>(false);
const mini = ref<boolean>(false);
const showDesktopMenu = ref<boolean>(false);

const toggleLeftDrawer = () =>
{
    if (screen.md || screen.lt.md)
    {
        showMenu.value = !showMenu.value;
    }

    if (screen.gt.md)
    {
        mini.value = !mini.value;
    }
    else
    {
        mini.value = false;
        leftDrawerOpen.value = !leftDrawerOpen.value;
    }
};

const switchMode = () =>
{
    dark.set(!dark.isActive);
};

const handleScroll = (info: any) =>
{
    if (info?.direction === 'down')
    {
        if (!showMenu.value)
        {
            showMobileMenu.value = false;
        }
    }
    else
    {
        setTimeout(() =>
        {
            showMobileMenu.value = true;
        }, 50);
    }
};

const openMenu = (link: string) =>
{
    if (link === '#')
    {
        showMenu.value = true;
    }
    else
    {
        $router.push(link);
    }
};

const closeMenu = () =>
{
    show.value = false;
    setTimeout(() =>
    {
        $router.replace('/');
    }, 198);
};

const getRoute = computed(() => $router.currentRoute.value.path);
const getRouteMeta = computed(() => $router.currentRoute.value.meta);
const isMobile = computed(() => screen.lt.md);
const getIconSuffix = computed(() => dark.isActive ? 'dark' : 'light');
const floatingMenu = computed(() => process.env.FLOATING_MENU === 'true');

watchEffect(() =>
{
    if ($router.currentRoute.value.path !== '/')
    {
        show.value = true;
    }
});
</script>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
}

.enter-overlay {
    animation: fade 1s both;
}
.leave-overlay {
    animation: fade1 1s both;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade1 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
