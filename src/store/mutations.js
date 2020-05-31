export default {
  //增加商品数量
  addCounter(state,payload){
    payload.count++
  },
  //增加商品
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  },
  addNum(state,index){
    state.cartList[index].count++
  },
  subNum(state,index){
    if(state.cartList[index].count == 1){
      return
    }
    state.cartList[index].count--
  },
  removeGood(state,index){
    state.cartList.splice(index,1)
  },
}

