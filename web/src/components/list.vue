<template>
  <!-- 列表组件 -->
    <div class="rows" v-for="(item, index) in list" :key="(item.id)">
      <!-- 左侧插槽 -->
      <slot name="left"><div class="left">{{index+1}}</div></slot>
      <div class="title">
         <div>{{item.title}}</div>
         <!-- 标题默认插槽 -->
         <slot></slot>
      </div>
      <slot name="right">
        <div class="right"></div>
      </slot>
    </div>
</template>

<!-- 
  String: 字符串类型。
  Number: 数字类型。
  Boolean: 布尔类型。
  Array: 数组类型。
  Object: 对象类型。
  Function: 函数类型。
  Symbol: 符号类型。
  Date: 日期类型。
  BigInt: 大整数类型。
 -->
<script setup>
defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.rows {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5%;
  border-bottom: 1px solid #ccc;
  .title {
    flex: 1;
    margin: 0 10px;
  }
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
