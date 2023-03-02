<template>
    <q-item class="no-padding q-mb-lg">
        <q-item-section style="justify-content: start !important;" side>
            <span v-show="hasIcon" class="iconify fs-23 text-nv-light-tertiary" data-icon="ic:round-mail"></span>
        </q-item-section>

        <q-item-section
            :class="{
                'q-ml-lg' : !hasIcon
            }"
        >
            <q-item-label
                :class="{
                    'text-white' : Dark.isActive,
                    'text-nv-light-accent' : !Dark.isActive
                }"
                class="fs-14 q-pb-xs"
            >
                What is Lorem Ipsum?
            </q-item-label>
            <q-item-label caption class="text-nv-light-tertiary lh-18 fs-12">
               {{ TruncateText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid at aut facere commodi', 60) }}

               <p
                    :class="{
                        'text-white' : Dark.isActive,
                        'text-nv-light-accent' : !Dark.isActive
                    }"
                    style="font-weight: 600;"
                    class="q-mb-none q-mx-none q-mt-sm fs-11 text-light">
                    {{ getDate('2022-08-28') }}
               </p>
            </q-item-label>
        </q-item-section>
    </q-item>
</template>

<script lang="ts" setup>
import TruncateText from '../../app/shared/helpers/TruncateText';
import { Dark, date } from 'quasar';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    hasIcon: {
        type: Boolean,
        default: true
    }
});

// CONSTANTS
const { t } = useI18n({ useScope: 'global' });

// FUNCTIONS
const getDate = (value: string) =>
{
    return date.formatDate(value, 'DD MMM YYYY HH:ss a', {
        monthsShort: [t('dates.monthsShort.jan'), t('dates.monthsShort.feb'), t('dates.monthsShort.mar'), t('dates.monthsShort.apr'), t('dates.monthsShort.may'), t('dates.monthsShort.jun'), t('dates.monthsShort.jul'), t('dates.monthsShort.aug'), t('dates.monthsShort.sep'), t('dates.monthsShort.oct'), t('dates.monthsShort.nov'), t('dates.monthsShort.dec')]
    });
};
</script>