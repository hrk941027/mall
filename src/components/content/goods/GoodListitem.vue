<!--  -->
<template>
  <div class="goodlist" @click="itemclick">
    <img v-lazy="showimg" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="cfav">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    gooditem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showimg(){
      return this.gooditem.image || this.gooditem.show.img
    }
  },
  methods:{
    imageLoad(){
      // console.log(222);
      this.$bus.$emit('itemimgload')

    //首页和详情页监听图片加载事件  
      //方法1
      // if(this.$route.path('./home')){
      //   this.$bus.$emit('homeitemimgload')
      // } else if(this.$route.path('./detail')){
      //   this.$bus.$emit('detailitemimgload')
      // }

    },
    itemclick(){
      // console.log(222);
      this.$router.push('/detail/' + this.gooditem.iid)  
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
  .goodlist{
    width: 48%;
    overflow: hidden;
    padding-bottom: 2%;
  }
  .goodlist img{
    width: 100%;
  }
  .goods-info{
    font-size: 12px;
  }
  .goodlist p{
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .cfav {
    position: relative;
  }

  .goods-info .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 -1px/14px 14px;
  }
</style>