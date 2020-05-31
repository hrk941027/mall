<!--  -->
<template>
  <div id="detail">
    <Childdetail class="Childdetail" @btn="titelclick" ref="nav"></Childdetail>
    <Scroll class="content" ref="scroll" :probeType="3" @scroll="contentscroll">
      <!-- <ul>
        <li v-for="item in $store.state.cartList" :key="item.iid">
          {{item}}
        </li>
      </ul> -->
      <Detailswiper :topimages="topimages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" @imgload="imgload" />
      <DetailParamInfo ref="param" :paramInfo="paramInfo" />
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo" />
      <GoodListitem ref="goods" :goods="recommends" />
    </Scroll>
    <DetailBottomBar @addToCart="addToCart" />
    <Backtop @click.native="backtopclick" v-show="isbacktop" />
    <!-- <Toast :message="message" :show="show" /> -->
  </div>
</template>

<script>
import Childdetail from "./childdetail/Childdetail"; //导航
import Detailswiper from "./childdetail/Detailswiper"; //轮播图
import DetailBaseInfo from "./childdetail/DetailBaseInfo"; //商品文字详情
import DetailShopInfo from "./childdetail/DetailShopInfo"; //商铺信息详情
import DetailGoodsInfo from "./childdetail/DetailGoodsInfo"; //商品图片详情
import DetailParamInfo from "./childdetail/DetailParamInfo"; //商品参数详情
import DetailCommentInfo from "./childdetail/DetailCommentInfo"; //留言
import GoodListitem from "components/content/goods/GoodLists"; //推荐商品 因为和首页的样式差不多，直接导入这个封装好的组件
import DetailBottomBar from "./childdetail/DetailBottomBar"; //底部


import {debounce} from "../../common/utils"; //导入定义的防抖方法
import Scroll from "common/scroll/Scroll"; //导入beeterscroll插件

import {itemListenerMixin,backtop} from "../../common/mixin"; //导入定义mixin
// import Toast from "components/common/toast/Toast"; //导入toast弹窗

import { getDetail, Goods, Shop,GoodsParam ,GetRecommend} from "network/detail"; //导入详情页需要请求的数据axios请求
export default {
  name: "Detail",
  components: {
    Childdetail,
    Detailswiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodListitem,
    DetailBottomBar,
    // Toast
  },
  mixins : [ itemListenerMixin ,backtop],
  data() {
    return {
      iid: null,
      topimages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends :[],
      themetopYs:[],
      getthemetopYs:null,
      curindex :0,
      // message :'',
      // show : false
    };
  },
  methods:{
    imgload(){
      this.$refs.scroll.refresh()
      this.getthemetopYs()
      
    },
    titelclick(index){  
      // console.log(index);
      
      this.$refs.scroll.scroll.scrollTo(0, -this.themetopYs[index], 500)
    },
    contentscroll(position){
      // console.log(position);
      //1获取y值
      const positionY = -position.y
      //2.对比组件中的y  在某个区间，对应的index等于多少     方法一
      // let length = this.themetopYs.length
      // for(let i = 0; i < length; i++){
      //   //首先为了防止过于频繁的赋值  并且 如果不成立的话后面就都不成立
      //   // 然后判断0和某个数字之间（i<lenght-1）
      //   // 判断大于等于 i===lenght -1
      //   if(this.curindex !== i && ((i < length -1 && positionY >= this.themetopYs[i] && positionY < this.themetopYs[i+1])||(i === length-1) && positionY >= this.themetopYs[i])) {
      //     this.curindex = i  //
      //     // console.log(this.curindex);
      //     this.$refs.nav.cur = this.curindex //最后绑定导航的cur
      //   }
      // }
      //方法二  push一个最大值
      let length = this.themetopYs.length
      for(let i = 0; i < length -1; i++){
        if(this.curindex !== i && (positionY >= this.themetopYs[i] && positionY < this.themetopYs[i+1])){
          this.curindex = i ;
          this.$refs.nav.cur = this.curindex
        }
      }

      //3.判断backtop是否显示
      this.isbacktop = (-position.y) > 1000

    },
    addToCart(){
      //1。获取购物车需要展示的信息
      const product = {}
      product.logo = this.shop.logo
      product.name = this.shop.name
      product.image = this.topimages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      //2.添加到购物车内
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(res =>{
        // console.log(res);
        // this.show = true;
        // this.message =res;
        // setTimeout(() =>{
        //   this.show = false;
        //   this.message = ''
        // },1500)
      // console.log(this.$toast);
      
        this.$toast.show(res,1500)
      })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // console.log(this.$route.params);
    //1.保存存入的id
    this.iid = this.$route.params.iid;
    //2。根据id获取详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      //获取内页轮播图
      this.topimages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取商家店铺信息
      this.shop = new Shop(data.shopInfo);
      //商品详情图信息
      this.detailInfo = data.detailInfo
      //商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule,
      );
      //获取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })

    //请求推荐数据
    GetRecommend().then(res =>{
      // console.log(res);
      this.recommends = res.data.list
    })

    //给getthemetopYs赋值并且防抖操作
      this.getthemetopYs = debounce(() =>{
        this.themetopYs =[]
        this.themetopYs.push(0);
        this.themetopYs.push(this.$refs.param.$el.offsetTop)
        this.themetopYs.push(this.$refs.comment.$el.offsetTop)
        this.themetopYs.push(this.$refs.goods.$el.offsetTop)
        this.themetopYs.push(Number.MAX_VALUE)
        // console.log(this.themetopYs);
      },100)
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    
  },
  updated(){
    
  },
  destroyed(){
    this.$bus.$off('itemimgload',this.itemimglisten)
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#detail {
  position: relative;
  z-index: 9999;
  background: #fff;
  height: 100vh;
}
.Childdetail{
  position: relative;
  background: #fff;
  z-index: 99999;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>