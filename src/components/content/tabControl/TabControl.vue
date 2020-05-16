<!--  -->
<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" :class="{active:cur === index}" @click="btn(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur : 0
    };
  },
  props :{
    titles :{
      type : Array,
      default(){
        return []
      }
    }
  },
  methods:{
    btn(index){
      this.cur = index;
      this.$emit('tabClick',index)
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
  .tab-control{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }
  .tab-control-item{
    flex: 1;
    padding-bottom: 5px;
    height: 40px;
    line-height: 40px;
    ;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-tint);
    /* border-bottom: 3px solid var(--color-tint); */
  }
  .active span{
      border-bottom: 3px solid var(--color-tint)
  }
</style>