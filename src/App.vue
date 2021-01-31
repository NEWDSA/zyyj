<template>
  <div id="app">
    <Header/>
    <Left/>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header' //头部导航
import Left from '@/components/Left' //左侧导航栏
export default {
  components: {
    Header,
    Left
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin:0;
}
html,body,#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
