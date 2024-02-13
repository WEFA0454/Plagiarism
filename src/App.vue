<template>
  <div class="查重系统">
    <title>查重系统</title>
  </div>
  <p>查重系统</p>
  <!-- 使用 router-link 添加按钮跳转至 /submit -->
  <router-link to="/submit">
      <button>Go to Submit</button>
    </router-link>
  <router-view></router-view>
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
