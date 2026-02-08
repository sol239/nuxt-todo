<template>
    <footer id="app-footer">
        <ul class="nav-menu">
            <li>
                <NuxtLink to="/" class="icon-name-box">
                    <Home :size="24" stroke-width="2" />
                    <span class="nav-label">Home</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/lists" class="icon-name-box">
                    <List :size="24" stroke-width="2" />
                    <span class="nav-label">Lists</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/settings" class="icon-name-box">
                    <Settings :size="24" stroke-width="2" />
                    <span class="nav-label">Settings</span>
                </NuxtLink>
            </li>
        </ul>
    </footer>
</template>

<script setup lang="ts">
import { Home, List, Settings } from 'lucide-vue-next'
</script>


<style scoped>
#app-footer {
    background-color: var(--space-indigo);
    color: var(--white-smoke);
    padding: 1rem;
    height: 4.5rem;
}

.nav-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
}

.icon-name-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
}

</style>