<!--  -->
<template>
  <div class="goods">
    <GoodListitem v-for="(item,index) in goods" :key="index" :gooditem="item"></GoodListitem>
  </div>
</template>

<script>
import GoodListitem from "./GoodListitem"; //导入商品详情组件
export default {
  components: {
    GoodListitem
  },
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
  .goods{
    padding: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
  }
</style>