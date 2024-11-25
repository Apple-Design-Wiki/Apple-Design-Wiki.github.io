<template>
  <div class="content">
    <div class="item" v-for="(item, index) in list" :key="index" @click="goToPage(item)">
      <div class="left">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
      <div v-for="(img, j) in item.imgs" :key="index + '+' + j">
        <img class="img" :src="'https://apple-design-wiki.github.io' + img" />
      </div>
    </div>
  </div>
</template>
<script setup name="homes">
import { onMounted, ref, reactive } from "vue";
import { showToast } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const list = reactive([]);

async function getAll() {
  function fetchData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("网络请求错误");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("请求错误:", error);
      });
  }
  // const arr = ["iBook1999", "iMac1999"]; // 假设这是您要请求的数据
    
  // const data = await fetch('https://apple-design-wiki.github.io/index.json');
  // const arr = await data.json();

  const promises =    window.arr.map((e) =>
    fetchData(`https://apple-design-wiki.github.io/${e}/index.json`)
  );
  Promise.all(promises) .then((data) => {
      data.forEach((item, index) => {
        list.push({ folder: item[0], title: item[1], desc: item[2], imgs: window.isPc ? item.slice(3).filter((e) => !e.includes("mobile")) : item.slice(3).filter((e) => e.includes("mobile")), });
      });
    })
    .catch((error) => {
      console.error("请求错误:", error);
    });
}

const goToPage = (page) => {
  console.log('page', page,);
  router.push({ path: "/detail", query: {folder:page.folder} });
};

onMounted(() => {
  getAll();
});
</script>
<style lang="scss" scoped>
.content {
  background-color: #fff;
}

.item {
  display: flex;
  margin: 30px 0;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.item:hover {
  background-color: #f2f2f2;
}

.left {
  width: 33%;
  padding: 0 10%;
}

.title {
  font-weight: 800;
}

.desc {
  // text-indent: 20px;
  margin-top: 20px;
  line-height: 20px;
}

.img {
  max-width: 300px;
}

@media only screen and (max-width: 1000px) {
  .content {
    padding: 10px 10px 0 10px;
  }
  .left {
    width: 80%;
  }

  .item {
    flex-direction: column;
  }
}
</style>
