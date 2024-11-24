<template>
  <div class="content">
    <div class="login">
      <van-nav-bar title="欢迎来到Vant4+vite" />
      <van-form @submit="onSubmit">
        <van-cell-group>
          <van-field v-model="username" name="usename" label="" placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="passord" label="" placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div class="tip">用户名：admin 密码：123456</div>
        <div style="margin: 16px;">
          <van-row justify="center">
            <van-col span="12"> <van-button  block type="primary" native-type="submit">登录</van-button></van-col>
          </van-row>
        </div>
      </van-form>
    </div>
  </div>
</template>


<!-- 下面的写法是setup语法糖 -->
<script setup name="login">

import { onMounted, ref } from 'vue'
import { showToast } from 'vant';
import { useRouter } from 'vue-router'
const router = useRouter()
// 导入 Axios 实例
// import apiClient from '../utils/api';
const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  if (username.value === 'admin' && password.value === '123456') {
    showToast('登录成功');
    localStorage.setItem('token', 'ok123456')
    router.push('/')
  } else {
    showToast('用户名或密码错误');
  }
  console.log('submit', values);
};
</script>
<style lang="scss" scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 16px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  :deep(.van-field__control) {
    height: 42px;
    line-height: 42px;
    background: #eee;
    text-align: center;
  }
  .tip {
    font-size: 12px;
    margin: 10px 20px;
    color: $font-color-gray;
  }
}


</style>