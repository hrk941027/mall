<!--  -->
<template>
  <div class="toast" v-show="isshow">
    {{message}}
  </div>
</template>

<script>
export default {
  props:{
    // message :{
    //   type :String,
    //   default : ''
    // },
    // show :{
    //   type : Boolean,
    //   default : false
    // }
  },
  data() {
    return {
      message : '',
      isshow : false
    };
  },
  methods:{
    show(message,duration){
      this.isshow = true;
      this.message = message;
      setTimeout(() =>{
        this.isshow = false;
        this.message = ''
      },duration)
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
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 5px 10px;
  letter-spacing: 1px;
  z-index: 99999;
}
</style>