import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore('theme', () => {
    const theme = ref(localStorage.getItem('theme') || 'blue');
    function initTheme() {
        const themeStr: string = localStorage.getItem('theme') || 'blue';
        // 初始化主题变量
        document.documentElement.setAttribute('data-theme', themeStr);
    }
    function switchTheme(theme: string) {
        // 切换主题变量
        document.documentElement.setAttribute('data-theme', theme);
        // 保存主题到本地存储
        localStorage.setItem('theme', theme);
    }
    return { theme, initTheme, switchTheme }
})
