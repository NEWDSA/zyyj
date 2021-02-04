<template>
  <div class="lc_header">
    <!-- <div class="brand"><img src="@/assets/img/brand.png" alt="" srcset=""></div> -->
    <ul>
      <li><img src="@/assets/img/brand.png" alt="" srcset="" /></li>
      <li>数据中心</li>
      <li>内联网</li>
      <li>成交报告系统</li>
      <li>考勤系统</li>
      <li>A+</li>
      <!-- <li>当前用户<span>登出</span></li> -->
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.lc_header {
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  // border: 1px solid red;
  ul {
    list-style-type: none;
    li {
      float: left;
      line-height: 70px;
      margin-left: 50px;
      img {
        height: 50px;
        margin-left: 20px;
        // line-height: 70px;
        vertical-align: middle;
        // border: 1px solid pink;
      }
    }
    li:nth-child(2) {
      margin-left: 90px;
    }
    // li:last-child{
    //     float: right;
    //     border: 1px solid pink;
    //     margin-right: 200px;
    // }
  }
}
</style>
