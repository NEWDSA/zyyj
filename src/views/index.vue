<template>
  <div class="l_container">
    <Area/>
  </div>
</template>

<script>
import Area from '@/views/Area'// 引入公共组件
export default {
  name: "base",
  components: {
    Area
  },
};
</script>

<style lang="scss" scoped>
  .l_container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .hengq{
      width: 50%;
    }
    .group{
      width: 50%;
    }
    .macau{
      width: 50%;
    }
  }
</style>