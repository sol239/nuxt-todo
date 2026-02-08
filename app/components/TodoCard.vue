<template>
    <div class="todo-card">
        <h2 class="todo-title">{{ todo.title }}</h2>
        <p class="todo-description">{{ todo.description }}</p>
        <div class="todo-meta">
            <span class="todo-created">Created: {{ new Date(todo.createdAt || '').toLocaleDateString() }}</span>
            <span class="todo-updated">Updated: {{ new Date(todo.updatedAt || '').toLocaleDateString() }}</span>
        </div>
    </div>  
</template>

<script setup lang="ts">
import type { ITodo } from '~/utils/model/ITodo';


defineProps<{
    todo: ITodo;
}>()

</script>

