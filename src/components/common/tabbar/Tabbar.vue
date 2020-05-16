<!--  -->
<template>
<div id="tab-bar">
    <slot></slot>
</div>
</template>

<script>

export default {
name : "tabbar",
data() {
return {

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
   #tab-bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -3px 1px rgba(63, 55, 55, 0.02);
    z-index: 999;
  }
  
</style>