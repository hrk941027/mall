import Toast from './Toast'


const obj = {}
  obj.install = function(Vue){

    // console.log('111111');
    // document.body.appendChild(Toast.$el)
    //1创建组件构造器
    const toastConstrustor = Vue.extend(Toast)
    //2new的方式，根据组件构造器，可以创建出来 一个组件对象
    const toast =new toastConstrustor()
    //3将组件对象，手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))
    //4. toast.$el对应的就是div了
    document.body.appendChild(toast.$el)
    

    Vue.prototype.$toast = toast;
  }








export default obj