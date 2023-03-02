<template>
    <div>
        <p>{{ title }}</p>
        <ul>
            <li v-for="todo in todos" :key="todo.id" @click="useCounterStore().increment()">
                {{ todo.id }} - {{ todo.content }}
            </li>
        </ul>
        <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
        <p>Active: {{ active ? 'yes' : 'no' }}</p>
        <p>Clicks on todos: {{ useCounterStore().counter }}</p>
        <p>Clicks on todos x2: {{ useCounterStore().doubleCount }}</p>
    </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref, toRef } from 'vue';
import { Todo, Meta } from './Models';
import { useCounterStore } from '../../stores/test';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    todos: {
        type: Array as PropType<Todo[]>,
        default: () => []
    },
    meta: {
        type: Object as PropType<Meta>,
        required: true
    },
    active: {
        type: Boolean
    }
});

const todos = toRef(props, 'todos');

const todoCount = computed(() => todos.value.length);

</script>
