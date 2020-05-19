<!--  -->
<template>
  <div id="cart">
    <NavBar class="nav-bar"><div slot="center">购物车({{length}})</div></NavBar>
    <scroll class="content" ref="scroll">
      <CartList />
    </scroll>
    <BottomBar/>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar"; //导入导航
import CartList from "./childComps/CartList"; //
import BottomBar from "./childComps/BottomBar"; //导入购物车底部汇总

import Scroll from 'common/scroll/Scroll' //导入bs

import { mapGetters } from "vuex"
export default {
  components: {
    NavBar,
    CartList,
    Scroll,
    BottomBar
  },
  data() {
    return {};
  },
  computed:{
    // cartLength() {
		//     return this.$store.getters.cartLength
    //   }
    // ...mapGetters([
    //   'cartLength',
          // 'cartList'
    // ]),

    ...mapGetters({
      length : 'cartLength'
    }),
    // cartList() {
		//     return this.$store.getters.cartList
    // },

  },
  
  activated() {
    this.$refs.scroll.refresh()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#cart{
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
}

.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
</style>