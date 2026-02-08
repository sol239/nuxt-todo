<template>
    <div class="todo-list">
        <TodoListCard :list="list" />
        <div class="todos-container">
            <TodoCard v-for="todo in list.todos" :key="todo.id" :todo="todo" />
        </div>
    </div>
</template>

<script setup lang="ts">

import type { IList } from '~/utils/model/IList';

defineProps<{
    list: IList;
}>()


</script>