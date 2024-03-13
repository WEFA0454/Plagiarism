<template>
  <div class="查重系统">
    <div class="header">
      <div class="logo">
        <img class="bjtulogo" src="./assets/bjjtLogo.png" alt="logo"></img>
      </div>
    </div>
    <div id="split"></div>
<!-- 使用 router-link 添加按钮跳转至 /submit -->
<!--使用 router-link 组件进行导航 -->
<!--通过传递 `to` 来指定链接 -->
<!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/"><button class="home">首页</button></router-link>
    <router-link to="/Submit"><button class="chachong">查重</button></router-link>
    <router-view></router-view>
  </div>
</template>
<style scoped>

html,body {
  margin: 0;/*没效果 */
  background-color: #f3f3f3;
}
.查重系统 {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
}
.header {
  width: 100%; /* 使用百分比单位，100% 表示整个页面宽度 */
  margin:0;
  max-width:none;
  overflow: hidden;
  height: 101.68px;
  background-color: #f3f3f3;
}
#split{
  width: 100%;
  height: 1px; /* 设置分界线高度 */
  background-color: #075fae; /* 设置分界线颜色 */
  content: "";
  display: block;
  margin-top: 0px; /* 设置分界线与上方元素的间距，可根据需求调整 */
}
.bjtulogo {
  height: 65px;
  width: 28%;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  margin-left: 30px;
}
.home{
  border:none;
  outline: none;
  width: 15%; 
  height: 40px;
  color: #075fae;
  font-size: 20px;
  font-weight: bold;
}
.home:hover{
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 鼠标悬停时显示阴影 */}
.chachong{
  border:none;
  outline: none;
  width: 15%; 
  height: 40px;
  color: #075fae;
  font-size: 20px;
  font-weight: bold;
}
.chachong:hover{
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 鼠标悬停时显示阴影 */
}
</style>
