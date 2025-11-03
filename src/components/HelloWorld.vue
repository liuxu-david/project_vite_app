<script setup lang="ts">
import { useThemeStore } from '../store/theme';

const themeStore = useThemeStore();

</script>

<template>
    <div class="header">
        <button @click="themeStore.switchTheme('blue')">蓝</button>
        <button @click="themeStore.switchTheme('white')">白</button>
        <button @click="themeStore.switchTheme('black')">黑</button>
    </div>
    <div class="tab">
        <div>测试文字</div>
        <div :style="{ color: 'var(--color-share)' }">测试文字二，模板中使用主题色</div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

}

.tab {
    width: 160px;
    height: 160px;
    border: 4px solid var(--color-border);
    box-sizing: border-box;
    color: var(--color-text);
    font-size: 16px;
}
</style>
