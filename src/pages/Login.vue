<template>
  <div class="login">
    <el-form :model="form" label-width="60px">
      <span class="word">登录</span>
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      if (!this.form.username || !this.form.password) {
        await this.$message({
          message: '用户名和密码不能为空',
          type: 'error'
        })
        this.username = ''
        this.password = ''
        return
      }
      const res = await this.$axios.post('./login', this.form)
      console.log('登陆了', res)
      const { statusCode, message, data } = res.data
      if (statusCode === 200) {
        this.$message({
          message,
          type: 'success'
        })
        localStorage.setItem('token', data.token)
        // console.log(localStorage.getItem('token'))
        this.$router.push('/home')
      } else {
        this.$message({
          message,
          type: 'error'
        })
      }
    },
    reset () {
      this.form.username = ''
      this.form.password = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    position: absolute;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #eee;
    padding: 40px;
    .word{
      position: absolute;
      text-align: center;
      width: 100%;
      top: -40px;
      transform: translateX(-35px)
    }
    .el-form-item{
      .el-button:first-child{
        margin-right: 150px;
      }
    }
  }
</style>
