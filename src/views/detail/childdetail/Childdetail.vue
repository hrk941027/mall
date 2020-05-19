<!--  -->
<template>
  <NavBar class="nav-bar">
    <div slot="left" class="back" @click="backclick"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" :class="{'active': index===cur}" @click="btn(index)">{{item}}</div>
      </div>
    </NavBar>
</template>

<script>
import NavBar from "common/navbar/NavBar"; //导入导航

export default {
  components: {
    NavBar
  },

  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      cur : 0
    }
  },
  methods:{
    btn(index){
      this.cur = index;
      this.$emit('btn',index)
    },
    backclick(){
      // this.$router.go(-1)
      this.$router.back()
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
.title{
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}
.active{
    color: var(--color-tint);
  }
  .back img{
    padding-top: 10px;
  }
</style>