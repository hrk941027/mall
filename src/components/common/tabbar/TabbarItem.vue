<!--  -->
<template>
  <div class="tab-bar-item" @click="clibtn">
    <!-- 建议用div包裹起来改变插槽属性 -->
    <div v-if="!isactive"><slot  name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div v-bind:style="activeStyle"><slot  name="item-text"></slot></div>
    
    <!-- <img src="../../assets/images/home.svg" alt=""> -->
    <!-- <img src="../../assets/images/home_active.svg" alt=""> -->
    <!-- <span>首页</span> -->
  </div>
      
</template>

<script>
export default {
  name:'TabbarItem',
  props :{
    path:String,
    activeColor:{
      type:String,
      default : 'red',
    }
  },
  methods : {
    clibtn(){
      // this.router.push('./location').catch(err=>{console.log(err)})
      if(this.$route.path === this.path){
        return
      }
      this.$router.replace(this.path)
    }
  },
data() {
return {
  // isactive : true
}
},
computed:{
  isactive(){
    return this.$route.path.indexOf(this.path) !==-1
  },
  activeStyle(){
    return this.isactive ? {color:this.activeColor} : {}
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item span{
    display: block;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 6px 0 1px 0;
  }
  /* .active{
    color: red;
  } */
</style>