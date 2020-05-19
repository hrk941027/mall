<!--  -->
<template>

    <swiper>
      <SwiperItem class="swiper-item" v-for="(item,index) in topimages" :key="index">
      <a :href="item.link">
        <img :src="item"  />
      </a>
      </SwiperItem>
    </swiper>

</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper'  //导入轮播图
export default {
  components :{
    Swiper,
    SwiperItem,
  },
  props:{
    topimages :{
      type : Array ,
      default(){ //必须给个默认值
        return[]
      }
    }
  },
  data() {
    return {

    };
  },
  methods:{
    
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
  .swiper-item{
    height: 300px;
  }
  .swiper-item img{
    width: 100%;
  }
</style>