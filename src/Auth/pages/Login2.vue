<template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, velit.
    <q-page class="row items-center justify-evenly">
        <ExampleComponent
            title="Example component"
            active
            :todos="todos"
            :meta="meta"
        />
    </q-page>

    <q-page class="hp-100" :class="{ row: !isMobile }">
        <!-- UPPER ROW WITH LOGO FOR MOBILE -->
        <div
            :class="{
                'hp-40 flex column items-center justify-evenly no-margin':
                    isMobile,
                'col-7 col-lg-8 row items-center justify-center': !isMobile
            }"
        >
            <div
                :class="{
                    'text-nv-light-accent': !Dark.isActive,
                    'text-white': Dark.isActive,
                    'q-px-sm': isXS
                }"
                class="flex column items-center"
            >
                <Logo class="q-mb-lg" :size="isMobile ? '165px' : '545px;'" />
                <h5
                    :class="{ 'fs-23': isXS }"
                    class="no-padding q-mb-xs q-mt-sm text-center"
                >
                    {{ $t('login.welcome', [`${name}`]) }}
                </h5>
                <p
                    class="no-margin no-padding text-center"
                    :class="{
                        'fs-12': !isMobile && isXS,
                        'fs-11': isXS
                    }"
                >
                    {{ $t('login.caption') }}
                </p>
            </div>
        </div>

        <div
            :class="{
                'hp-100 wp-100': isMobile && button === 'sign-up' || screenSize.height <= 764,
                'hp-60': isMobile && button === 'login' && screenSize.height > 764,
                'col-5 col-lg-4 flex justify-center items-center': !isMobile
            }"
            :style="`${isMobile && button === 'sign-up' || screenSize.height <= 764 ? `top: ${screenSize.height <= 764 ? '0' : position}% !important; position: absolute;` : ''}`"
        >
            <!-- LOGIN CARD -->
            <q-card
                :style="`${
                    isMobile && button === 'login' && screenSize.height > 764
                        ? 'border-radius: 40px 40px 0px 0px !important;'
                        : ''
                }`"
                class="no-margin q-px-sm"
                :class="{
                    'dark--card': Dark.isActive,
                    'bg-white': !Dark.isActive,
                    'br-40 hp-80 wp-93 q-py-md': !isMobile,
                    'hp-100 wp-100 q-py-md': isMobile
                }"
            >
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
                    class="no-margin hp-100"
                >
                   <q-card-section class="pt-35 row no-margin justify-between">
                       <div class="flex flex-inline justify-start">
                           <div
                               :class="`
                            ${
                                button === 'login'
                                    ? `bg-nv-${GetSuffix('secondary')}
                            ${!Dark.isActive ? 'text-nv-light-accent' : ''}`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !Dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
                        `"
                               class="flex items-center justify-center px-17 br-30 fs-12 ls-2 q-mr-sm cursor-pointer"
                               @click="changeView('login')"
                           >
                               {{ $t('buttons.login') }}
                           </div>
                           <div
                               :class="`
                            ${
                                button === 'sign-up'
                                    ? `bg-nv-${GetSuffix('secondary')}
                            ${!Dark.isActive ? 'text-nv-light-accent' : ''}`
                                    : `text-nv-${GetSuffix(
                                          `${
                                              !Dark.isActive
                                                  ? 'tertiary'
                                                  : 'secondary'
                                          }`
                                      )}`
                            }
                        `"
                               class="flex items-center justify-center px-17 br-30 fs-12 ls-2 cursor-pointer"
                               @click="changeView('sign-up')"
                           >
                               {{ $t('buttons.register') }}
                           </div>
                       </div>

                       <q-btn
                           @click="switchMode()"
                           flat
                           round
                           color="nv-light-tertiary"
                           :icon="Dark.isActive ? 'brightness_5' : 'dark_mode'"
                       />
                   </q-card-section>

                   <transition
                       mode="in-out"
                       :enter-active-class="`${isMobile ? '' : 'animated zoomIn'}`"
                       v-show="button === 'login'"
                       :duration='{enter: 0, leave: 0 }'>
                       <div>
                           <q-card-section>
                               <LoginForm :width="screenSize.width" />
                           </q-card-section>

                           <q-card-section class="fs-12 text-nv-light-tertiary q-py-none">
                               {{ $t('login.newInPlatform') }}
                               <span
                                   :class="`text-nv-${GetSuffix('accent')} cursor-pointer`"
                                   @click="changeView('sign-up')"
                               >
                                {{ $t('login.createAnAccount') }}
                            </span>

                               <p
                                   :class="`text-nv-${GetSuffix(
                                    'accent'
                                )} q-pt-md cursor-pointer`"
                               >
                                   {{ $t('login.forgotYourPassword') }}
                               </p>
                           </q-card-section>
                       </div>
                   </transition>

                   <transition
                       mode="in-out"
                       :enter-active-class="`${isMobile ? '' : 'animated zoomIn'}`"
                       v-show="button === 'sign-up'"
                       :duration='{ enter: 0, leave: 0 }'>
                       <div>
                           <q-card-section>
                               <SignUpForm />
                           </q-card-section>

                           <q-card-section class="fs-12 text-nv-light-tertiary q-py-none">
                               {{ $t('login.alreadyHaveAnAccount') }}
                               <span
                                   :class="`text-nv-${GetSuffix('accent')} cursor-pointer`"
                                   @click="$router.replace('/login')"
                               >
                                {{ $t('login.login') }}
                            </span>

                           </q-card-section>
                       </div>
                   </transition>
                </q-scroll-area>
            </q-card>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import { Dark, Screen } from 'quasar';
import { computed, onUnmounted, reactive, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Logo from '../../app/components/Logo.vue';
import GetSuffix from '../../app/shared/helpers/GetSuffix';
import LoginForm from '../component/LoginForm.vue';
import SignUpForm from '../component/SignUpForm.vue';
import {Meta, Todo} from 'src/app/components/Models';
import ExampleComponent from 'src/app/components/ExampleComponent.vue';

const todos = ref<Todo[]>([
    {
        id: 1,
        content: 'ct1'
    },
    {
        id: 2,
        content: 'ct2'
    },
    {
        id: 3,
        content: 'ct3'
    },
    {
        id: 4,
        content: 'ct4'
    },
    {
        id: 5,
        content: 'ct5'
    }
]);

const meta = ref<Meta>({
    totalCount: 1200
});

// CONSTANTS
const $router = useRouter();
const animateTimeout = <any>ref(null);

// REFERENCES
const button = ref<string>('login');
const position = ref(40);
const screenSize = reactive({
    height: 0,
    width: 0
});

// COMPUTEDS

const isMobile = computed(() => Screen.lt.md);

const isXS = computed(() => Screen.lt.sm);

const name = computed(() => process.env.APP_NAME);

// FUNCTIONS

const switchMode = () =>
{
    Dark.set(!Dark.isActive);
};

const animateDrawerTo = (height: number) =>
{
    clearTimeout(animateTimeout.value);

    const diff = height - position.value;

    if (diff !== 0)
    {
        position.value += Math.abs(diff) < 2 ? diff : Math.round(diff / 2);

        animateTimeout.value = setTimeout(() =>
        {
            animateDrawerTo(height);
        }, 30);
    }
};

const changeView = (view: string) =>
{
    button.value = view;
    $router.replace(`/${view}`);
    if (button.value === 'sign-up' && isMobile)
    {
        animateDrawerTo(0);
    }
    else
    {
        animateDrawerTo(39);
    }
};

function onResize()
{
    screenSize.height = window.innerHeight;
    screenSize.width = window.innerWidth;
}

onResize();
window.addEventListener('resize', onResize, { passive: true });

// WATCHERS
watchEffect(() =>
{
    if ($router.currentRoute.value.fullPath.includes('/sign-up'))
    {
        button.value = 'sign-up';
        position.value = 0;
    }
    else if ($router.currentRoute.value.fullPath.includes('/login'))
    {
        button.value = 'login';
    }
});

// LIFECYCLE HOOKS
onUnmounted(() =>
{
    if (typeof window !== 'undefined')
    {
        window.removeEventListener('resize', onResize, true);
    }
});
</script>

<style lang="scss" scoped>
.dark--card {
    background-color: #1d2229;
}
</style>
