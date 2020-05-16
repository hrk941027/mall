<!--  -->
<template>
  <div id="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
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
  #nav-bar{
    position: relative;
    z-index: 10;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left, .right{
    width: 15%;
  }
  .center{
    flex: 1;
  }
</style>