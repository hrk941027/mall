<!--  -->
<template>
  <div id="cart">
    <NavBar class="nav-bar"><div slot="center">购物车({{length}})</div></NavBar>

    <scroll class="content" ref="scroll">
      <CartList v-if="this.$store.getters.cartLength" />
      <div class="kong" v-else>
        <div class="gwc"><img src="~assets/img/cart/gwc.png" alt=""></div>
        <h2>购物车竟然是空的</h2>
        <p>“再忙，也要记得买点什么犒赏自己~”</p>
      </div>
      
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
    return {
      back : true

    };
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
  methods :{
    // play(){
    //   console.log(this.$store.getters.cartList);
      
    //   if(this.$store.getters.cartList.length !== 0){
    //     this.back = false;
    //   }
    // },
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  created(){
    // this.play()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    
  }
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
  background: #eee;
}

.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
.kong{
  text-align: center;

}
.kong h2{
  margin: 20px 0;
}
.kong img{
  margin-top: 20%;
  width: 50px;
  height: 50px;
}
</style>