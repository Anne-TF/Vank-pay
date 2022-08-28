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
                    class="flex items-center no-padding justify-center br-8 q-mr-md"
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
            style="height: 100%;"
            :mini-to-overlay="screen.md || screen.lt.md"
            :mini="leftDrawerOpen"
            v-if="!isMobile"
            show-if-above>
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
                        :class="{
                            'mt-25' : index > 0,
                            'mt-8' : index < 1
                        }"
                        class="column items-center text-nv-light-tertiary">
                        <span
                            class="iconify fs-30"
                            :data-icon="link.icon"
                        />
                    </div>
                </div>
            </template>
        </q-drawer>

        <q-page-container>
            <q-scroll-observer @scroll="handleScroll" />
            <Transition
                enter-active-class="enter-overlay"
                leave-active-class="leave-overlay"
            >
                <div v-show="showMenu" class="overlay" />
            </Transition>
            <router-view v-slot="{ Component, route }" >
            <Transition
                :appear-active-class="route.meta.enterAnimation"
                :leave-active-class="route.meta.leaveAnimation"
                :duration="{
                  enter: 100,
                  leave: 200
                }"
                appear
              >
              <component style="height: 100% !important;" :is="Component" />
            </Transition>
            </router-view>
        </q-page-container>

        <Transition
            mode="in-out"
            enter-active-class="animated fadeInUp"
            :duration='{ enter: 200, leave: 200 }'
            leave-active-class="animated fadeOutDown">
            <div
                style="z-index: 4;"
                v-show="(isMobile && showMobileMenu) && (!getRouteMeta?.hideMobileMenu ?? true) && settingsStore.showMobileMenu"
                :class="{
                    'mb-30' : floatingMenu,
                    'mb-0' : !floatingMenu
                }"
                class="fixed-bottom mb-0">
                <div
                    :style="`
                        background-color: ${dark.isActive ? '#1D2229' : '#FFF'};
                        border: 1px solid ${floatingMenu ? (dark.isActive ? '#303640' : '#939BA6') : 'transparent'};
                        contain: content;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        ${showMenu && !floatingMenu ?
                            'border-radius: 18px 18px 0px 0px'
                            : (floatingMenu ? '18px' : '0px')
                        };
                    `"
                    :class="{
                        'enter--menu' : showMenu,
                        'leave--menu items-end' : !showMenu,
                        'wp-88 q-mx-auto br-18' : floatingMenu,
                        'wp-100' : !floatingMenu
                    }"
                    class=" q-py-sm q-px-lg menu flex"
                >
                    <!-- PAY OPTIONS -->
                    <div v-show="showMenu">
                        <div class="flex flex-inline items-center q-pt-lg q-mb-sm">
                            <q-icon size="3.5em" :name="`img:icons/deposit-${getIconSuffix}.svg`" />
                            <div class="q-ml-md">
                                <h5
                                    :class="{
                                        'text-white' : dark.isActive,
                                        'text-nv-light-accent' : !dark.isActive
                                    }"
                                    style="letter-spacing: 2px;"
                                    class="no-margin fs-20">
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
                            <q-icon size="3.5em" :name="`img:icons/withdraw-${getIconSuffix}.svg`" />
                            <div class="q-ml-md">
                                <h5
                                    :class="{
                                        'text-white' : dark.isActive,
                                        'text-nv-light-accent' : !dark.isActive
                                    }"
                                    style="letter-spacing: 2px;"
                                    class="no-margin fs-20">
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
                            <q-icon size="3.5em" :name="`img:icons/p2p-${getIconSuffix}.svg`" />
                            <div class="q-ml-md">
                                <h5
                                    :class="{
                                        'text-white' : dark.isActive,
                                        'text-nv-light-accent' : !dark.isActive
                                    }"
                                    style="letter-spacing: 2px;"
                                    class="no-margin fs-20">
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

                        <div
                            :class="{
                                'bg-nv-dark' : dark.isActive,
                                'bg-nv-light' : !dark.isActive
                            }"
                            class="flex justify-center absolute-bottom pb-3">
                            <transition
                                enter-active-class="enter-overlay"
                                leave-active-class="leave-icons"
                            >
                            <q-icon v-show="showMenu" size="4em" :name="`img:icons/close-${getIconSuffix}.svg`" @click="showMenu = false" />
                            </transition>
                        </div>
                    </div>

                    <!-- MENU ICONS -->
                    <Transition
                        enter-active-class="enter-icons"
                        leave-active-class="leave-icons"
                    >
                        <div v-show="!showMenu" class="flex flex-inline wp-100 justify-between">
                            <div
                                v-for="(link, index) in linksList"
                                :key="index"
                                @click="openMenu(link.link)"
                                style="min-height: 38px; max-height: 38px;"
                                :class="{
                                    'mb-4' : link.link !== '#',
                                    'mt-3' : link.link === '#'
                                }"
                                class="wp-13 flex items-center no-padding justify-center br-8"
                                :style="`
                                    ${
                                        getRoute === link.link && link.link !== '#' && dark.isActive ?
                                        'background-color: #29313C' : (getRoute === link.link ? 'background-color: #EBECF0' : '')}
                                `"
                            >
                                <q-icon
                                    size="22px"
                                    v-show="link.library === 'fa'"
                                    :name="link.icon"
                                    :class="{
                                        'text-white' : getRoute === link.link && dark.isActive,
                                        'text-nv-dark' : getRoute === link.link && !dark.isActive,
                                    }"
                                />

                                <q-icon
                                    :name="`img:icons/transfer-${getIconSuffix}.svg`"
                                    v-show="link.link === '#'"
                                    size="4em"
                                    style="margin-top: -10px"
                                />

                                <i
                                    v-show="link.library === 'ri'"
                                    :class="`
                                        fs-24
                                        ${link.icon} ${getRoute === link.link && dark.isActive ?'text-white' : (getRoute === link.link && !dark.isActive ? 'text-nv-dark' : '')}`"
                                />
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </Transition>
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
        to: 'security'
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
const morphGroupModel = ref('menu');
const showMenu = ref(false);
const showDesktopMenu = ref(false);

const toggleLeftDrawer = () =>
{
    leftDrawerOpen.value = !leftDrawerOpen.value;
    if (screen.md || screen.lt.md)
    {
        showMenu.value = !showMenu.value;
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

const getRoute = computed(() => $router.currentRoute.value.path);
const getRouteMeta = computed(() => $router.currentRoute.value.meta);
const isMobile = computed(() => screen.lt.md);
const getIconSuffix = computed(() => dark.isActive ? 'dark' : 'light');
const floatingMenu = computed(() => process.env.FLOATING_MENU === 'true');

watchEffect(() =>
{
    if (screen.lt.lg)
    {
        leftDrawerOpen.value = true;
    }

    if (screen.lt.md)
    {
        showMenu.value = false;
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

.enter-icons {
    animation: fade 1s both;
}
.leave-icons {
    animation: fade1 0.2s both;
}

.menu {
    height: 60px;
    transition: height 0.5s linear;
}

.leave--menu {
    height: 60px;
}

.enter--menu {
    height: 40vh;
}

</style>
