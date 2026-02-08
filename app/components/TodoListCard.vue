<template>
    <div class="todo-list">
        <h1 class="list-title">{{ list.name }}</h1>
        <div class="todo-count-badge">
            {{ list.todos.length }}
        </div>
    </div>
</template>

<script setup lang="ts">

import type { IList } from '~/utils/model/IList';

defineProps<{
    list: IList;
}>()

</script>