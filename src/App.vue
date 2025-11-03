<script setup lang="ts">
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { useThemeStore } from './store/theme';

const themeStore = useThemeStore();

onMounted(() => {
  // 方案一：CSS变量方案
    themeStore.initTheme();
})
</script>

<template>
  <div class="container">
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg);
}
</style>
