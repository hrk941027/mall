<!--  -->
<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image"  @load="imageload" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper'  //导入轮播图
export default {
  components :{
    Swiper,
    SwiperItem,
  },
  props:{
    banners :{
      type : Array ,
      default(){ //必须给个默认值
        return[]
      }
    }
  },
  data() {
    return {
      isLoad : false
    };
  },
  methods:{
    imageload(){
      // console.log(11111);
      if(!this.isLoad){
        this.$emit('swiperimageload')
        this.isLoad = true
      }
        // this.$emit('swiperimageload')

    }
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