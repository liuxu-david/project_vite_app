// 处理各机型适配的fontsize
function handleRem() {
  const baseSize = 75;// 与postcss配置中的rootValue保持一致
  const scale = document.documentElement.clientWidth / 750;
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + 'px';
}
// 初始化设置根元素的值
handleRem()
// 监听窗口变化，根据窗口变化来改变根元素的值
window.addEventListener('resize', handleRem)
