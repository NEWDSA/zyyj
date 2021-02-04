<template>
  <div class="lg_container">
    <div class="lg_login">
      <div class="lg_title">
        <h1>中原统一登录系统</h1>
      </div>
      <div class="lgin_area">
        <el-form
          ref="elForm"
          :model="formData"
          :rules="rules"
          size="medium"
          label-width="100px"
        >
          <div class="area_username">
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="formData.username"
                placeholder="请输入用户名"
                clearable
                prefix-icon="el-icon-user-solid"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </div>
          <div class="area_password">
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="formData.password"
                placeholder="请输入密码"
                clearable
                prefix-icon="el-icon-lock"
                show-password
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </div>
          <div class="area_btn">
            <el-form-item size="large">
              <el-button
                type="primary"
                :style="{ width: '100%' }"
                @click="submitForm"
                >登录</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data () {
    return {
      formData: {
        username: 'admin',
        password: '1'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    submitForm () {
      this.$refs.elForm.validate((valid) => {
        if (!valid) return false
        let getUserRole=this.formData.username=='admin'?'admin':'user'
        localStorage.setItem('userRole', getUserRole)
        this.$router.push({path:'/main'})
      })
    }
  }
}
</script>
<style lang="scss">
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
    // border: 1px solid blue;
    box-sizing: border-box;
    box-shadow: 0 0 15px rgba(0, 138, 233, 0.15);
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
      }
      .area_password {
        width: 100%;
        height: 40px;
        margin: 40px auto;
        // border: 1px solid red;
      }
      .area_btn {
        width: 100%;
        height: 50px;
        // border: 1px solid gold;
        margin: 50px auto 0;
        box-sizing: border-box;
      }
    }
  }
}
</style>
