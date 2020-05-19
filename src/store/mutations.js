export default {
  addCounter(state,payload){
    payload.cont++
  },
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}

