<!--  -->
<template>
  <div id="home">
    <NavBar class="nav-bar">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol1" class="TabControl" v-show="isfixed" ></TabControl>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentscroll" :pullUpLoad="true" @pullingUp="loadMore">
      <homeswiper :banners="banners" @swiperimageload="swiperimageload" />
      <recommendview :recommends="recommends" />
      <FeatureView />
      <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol2" ></TabControl>
      <GoodLists :goods="showType" />
    </scroll>
    
    <Backtop @click.native="backtopclick" v-show="isbacktop" />
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar"; //导入导航
import homeswiper from "./childComps/homeswiper"; //导入轮播图子组件
import recommendview from "./childComps/recommendview"; //导入导航图下面四张小图组件
import FeatureView from "./childComps/FeatureView"; //导入四张小图下面大图片组件
import TabControl from "content/tabControl/TabControl"; //导入三个分类组件
import GoodLists from "content/goods/GoodLists"; //导入展示商品列表组件


import Scroll from "common/scroll/Scroll"; //导入beeterscroll插件
import Backtop from "content/backtop/Backtop"; //导入返回顶部组件

import {debounce} from "../../common/utils"; //导入定义的防抖方法
import {itemListenerMixin} from "../../common/mixin"; //导入定义mixin

import { getHomeMultidata, getHomeGoods } from "network/home"; //导入首页需要请求的数据axios请求

export default {
  components: {
    NavBar,
    homeswiper,
    recommendview,
    FeatureView,
    TabControl,
    GoodLists,
    Scroll,
    Backtop
  },
  mixins : [ itemListenerMixin ],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      curtype: "pop",
      isbacktop:false,
      taboffsetTop:0,
      isfixed :false,
      saveY:0,
      
    };
  },
  computed: {
    showType() {
      return this.goods[this.curtype].list;
    },
   
    
  },
  methods: {
    //网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data.banner.list);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //开始时是0
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //加载更多后调用这个方法
        this.$refs.scroll.finishPullUp()
      });
    },
    //事件监听方法
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.curtype = "pop";
          break;
        case 1:
          this.curtype = "new";
          break;
        case 2:
          this.curtype = "sell";
          break;
      }
      this.$refs.tabcontrol1.cur = index;
      this.$refs.tabcontrol2.cur = index
    },
    //组件原生点击
    backtopclick(){
      // console.log(this.$refs.scroll.msg);
      this.$refs.scroll.scroll.scrollTo(0,0,500)
      // this.$refs.scroll.scrollTo()
    },
    //子组件自定义方法 判断滑动到哪里
    contentscroll(position){
      // console.log(position);
      //1.判断backtop是否显示
      this.isbacktop = (-position.y) > 1000
      //2.决定是否吸顶(position:fixed)
      this.isfixed = (-position.y) > this.offsetTop
    },
    //子组件自定义方法 传递加载更多
    loadMore(){
      // console.log('上拉加载更多');
      this.getHomeGoods(this.curtype)
    },
    swiperimageload(){
      //所有组件中都有个$el属性，用于获取组件中的元素
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
      this.offsetTop = this.$refs.tabcontrol2.$el.offsetTop
    }
    
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // 1.请求首页轮播图、推荐列表数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  

    //获取tabcontrol的offsetTop
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
    
  },
  destroyed(){
    console.log('home destroyed');
  },
  activated(){ //活跃时
    // console.log('activated');
    this.$refs.scroll.scroll.scrollTo(0, this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated(){ //不活跃时
    // console.log('deactivated');
    //1.保存y值
    this.saveY = this.$refs.scroll.getscrolly()
    console.log(this.saveY);

    //2。取消全局事件监听
    this.$bus.$off('itemimgload',this.itemimglisten)
    
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#home{
  height: 100vh;
}
.nav-bar {
  background: var(--color-tint);
  color: #fff;
  /* position:fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999; */
}
/* .content{
  height: calc(100% - 93px);
} */
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .TabControl{
    position: relative;
    z-index: 9999;
  }
/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 999;
} */
</style>