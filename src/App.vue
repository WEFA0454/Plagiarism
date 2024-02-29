<template>
  <div class="查重系统">
    <title>查重系统</title>
    <p>查重系统</p>
<!-- 使用 router-link 添加按钮跳转至 /submit -->
<!--使用 router-link 组件进行导航 -->
<!--通过传递 `to` 来指定链接 -->
<!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Home</router-link>
    <router-link to="/Submit">  submit</router-link>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
