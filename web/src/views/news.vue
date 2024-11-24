<template>
    <div class="content">
      <van-nav-bar title="新页面" />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <van-signature @submit="onSubmit" @clear="onClear" />
     <van-image v-if="image" :src="image" />
     <!-- 联系人列表 -->
    <van-contact-list
    v-model="chosenContactId"
    :list="list"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect"
  />
    <!-- <main>
      <TheWelcome /> 
      <van-button type="primary">按钮</van-button>
    </main> -->
  </template>
  
  
  <!-- 下面的写法是setup语法糖 -->
  <script setup  name="news">
  
      import { onMounted,ref} from 'vue'
      import { showToast } from 'vant';
      import { useRouter } from 'vue-router'
  const router = useRouter()
      // 导入 Axios 实例
      import apiClient from '../utils/api';
      
      const image = ref('');
      const list = ref([]);
      const onSubmit = (data) => {
        image.value = data.image;
      };
      const chosenContactId = ref('1');
      function onClear() {  
        showToast('clear');
      };
      const onAdd = () => { router.push({path: '/about'}) };
      const onEdit = (contact) => showToast('编辑' + contact.id);
      const onSelect = (contact) => showToast('选择' + contact.id);
      async function getATalk(){
      await apiClient.get('/user/list')
         .then(function (res) {
            console.log('获取的列表',res.data);
                list.value = res.data.list
            })
            .catch(function (error) {
                console.log(error);
        });
     };
     onMounted(getATalk);
   
  // import TheWelcome from '../components/TheWelcome.vue'
  </script>
  <style scoped>
  .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
  }
  </style>
  