<!--  -->
<template>
  <Tabbar>
    <Tabbaritem path="/home" >
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
      <img slot="item-active" src="~assets/img/tabbar/home_active.svg" alt />
      <span slot="item-text">首页</span>
    </Tabbaritem>
    <Tabbaritem path="/category" >
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
      <img slot="item-active" src="~assets/img/tabbar/category_active.svg" alt />
      <span slot="item-text">分类</span>
    </Tabbaritem>
    <Tabbaritem path="/cart" >
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt />
      <img slot="item-active" src="~assets/img/tabbar/cart_active.svg" alt />
      <span slot="item-text">购物车</span>
    </Tabbaritem>
    <Tabbaritem path="/profile" >
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
      <img slot="item-active" src="~assets/img/tabbar/profile_active.svg" alt />
      <span slot="item-text">我的</span>
    </Tabbaritem>
  </Tabbar>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import Tabbaritem from "components/common/tabbar/TabbarItem";
export default {
  components: {
    Tabbar,
    Tabbaritem
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
</style>