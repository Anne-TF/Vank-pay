<template>
    <div
        :class="{
            'bg-nv-dark text-nv-dark-primary' : Dark.isActive,
            'bg-nv-light text-nv-light-primary' : !Dark.isActive
        }"
        class="fullscreen text-center flex flex-center"
    >
        <div>
            <div style="font-size: 20vh">404</div>

            <div class="text-h3 text-nv-light-tertiary" style="opacity: 0.4">
                Oops. Nothing here...
            </div>

            <q-btn
                class="q-mt-xl"
                :color="!Dark.isActive ? 'nv-light' : 'nv-dark'"
                :text-color="`text-nv-${GetSuffix('primary')}`"
                unelevated
                to="/"
                label="Go Home"
                no-caps
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Dark } from 'quasar';
import GetSuffix from '../shared/helpers/GetSuffix';
</script>
