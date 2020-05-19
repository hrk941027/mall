import {debounce} from "./utils"; //导入定义的防抖方法
import Backtop from "content/backtop/Backtop"; //导入返回顶部组件


export const itemListenerMixin = {
  data(){     //混入里还可以装变量
    return {
      itemimglisten:null
    }
  },
  mounted(){
    //3.监听图片是否加载完成  加上refresh 并且加上防抖动
    const refresh = debounce(this.$refs.scroll.refresh,200)
    //对监听的事件进行保存
    this.itemimglisten = () =>{
      // console.log('____________');
      refresh()
    }
    this.$bus.$on('itemimgload', this.itemimglisten)
    // console.log('我是混入的内容');
    
  }
}

//返回顶部
export const backtop={
  components:{
    Backtop
  },
  data(){
    return{
      isbacktop:false,
    }
  },
  methods:{
    backtopclick(){
      // console.log(this.$refs.scroll.msg);
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    }
  }
}