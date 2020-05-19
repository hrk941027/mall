<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  data() {
    return {
      scroll : null,
      msg :'你好啊'
    };
  },
  props:{
    probeType:{
      tpye :Number,
      default :0
    },
    pullUpLoad:{
      tpye : Boolean,
      default : false
    }
  },
  methods:{
    // scrollTo(x,y,time){
    //   this.scroll && this.scroll.scrollTo(0,0,500)
    // },
    //封装加载更多后处理的的方法
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    //封装refresh方法
    refresh(){
      // console.log('--------------');
      this.scroll && this.scroll.refresh()
    },
    //封装判断获取scroll.y
    getscrolly(){
      return this.scroll ? this.scroll.y : 0
    }
    
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // 1.创建bscroll对象
    this.scroll = new Bscroll(this.$refs.wrapper,{
      click :true,
      probeType :this.probeType,    //动态绑定成哪种滑动
      pullUpLoad : this.pullUpLoad,  //动态绑定成需补需要上拉加载更多
    })
    // console.log(this.scroll);
    
    // 2.监听滚动的事件(位置)
    if(this.probeType === 2 || this.probeType ===3){
        this.scroll.on('scroll',(position) =>{
        // console.log(position);
        this.$emit('scroll',position)
      })
    }
    //3.监听上拉加载更多
    if(this.pullUpLoad){
      this.scroll.on('pullingUp', () => {
      // console.log('上拉加载');
      this.$emit('pullingUp')
      })
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>