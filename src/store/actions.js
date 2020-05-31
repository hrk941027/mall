import { Promise } from "core-js"

export default {
  addCart(context,payload){
    // payload新添加的商品  
    
    //方法二
    return new Promise((resolve,reject) =>{
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //判断oldproduct
      if(oldProduct){  //数量+1
        // oldProduct.cont += 1
        context.commit('addCounter',oldProduct)
        resolve('当前商品数量+1')
        }else{  //添加新的商品
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('添加新的商品')
        }
    })



      //方法一
    // let oldProduct = null
    // for(let item of state.cartList){
    //   if(item.iid === payload.iid){
    //     oldProduct = item
    //   }
    // }
    // //2。判断oldproduct是否有值
    // if(oldProduct){
    //   oldProduct.cont += 1
    // }else{
    //   payload.cont = 1
    //   state.cartList.push(payload)
    // }
  }
}