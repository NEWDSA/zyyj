<template>
  <div class="lg_container">
    <div class="lg_login">
      <div class="lg_title">
        <h1>中原统一登录系统</h1>
      </div>
      <div class="lgin_area">
        <div class="area_username"><input prefix-icon='el-icon-user-solid' type="text" name="" id="" /></div>
        <div class="area_password"><input type="password" name="" id="" /></div>
        <div class="area_btn"><input type="button" name="" id="" value="登录" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.lg_container {
  position: relative;
  width: 100%;
  height: 100%;
  .lg_login {
    width: 700px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid blue;
    .lg_title {
      position: relative;
      margin: 40px auto;
      // border: 1px solid pink;
    }
    .lgin_area {
      width: 650px;
      // height: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      // border: 1px solid gold;
      .area_username {
        width: 100%;
        height: 40px;
        margin: 40px auto;
        // border: 1px solid red;
        input {
          width: 100%;
          height: 100%;
        }
      }
      .area_password {
        width: 100%;
        height: 40px;
        margin: 40px auto;
        // border: 1px solid red;
        input {
          width: 100%;
          height: 100%;
        }
      }
      .area_btn{
        width: 100%;
        height: 50px;
        border: 1px solid gold;
        margin: 50px auto 0;
        box-sizing: border-box;
        input {
          width: 100%;
          height: 100%;
          border: 1px solid pink;
          font-size: 1.5em;
        }
      }
    }
  }
}
</style>
