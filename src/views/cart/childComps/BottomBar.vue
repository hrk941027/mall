<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" :isChecked="isSelectAll" @click.native="checkClick"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="hjclick">去计算({{checkLength}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
		  totalPrice() {
        const cartList = this.$store.getters.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      checkLength(){
        return this.$store.getters.cartList.filter(item => item.checked).length
      },
      //单选后全部选中方法
      isSelectAll() {
        //首先判断有没有商品，没有直接为false
        if(this.$store.getters.cartLength === 0) return false
        //1用filter
        // return !( this.$store.getters.cartList.filter(item => !item.checked).length)
        //2用find
        return !this.$store.getters.cartList.find(item => !item.checked ) 
        // return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
        //3普通遍历
        // for(let item of this.$store.getters.cartList){
        //   if(!item.checked){
        //     return false
        //   }
        // }
        // return true
      }
    },
    methods: {
      checkClick() {
        // console.log('--------');
        // 1.判断是否有未选中的按钮
        // let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);

        // 2.有未选中的内容, 则全部选中
        if (this.isSelectAll) { //全部选中
          this.$store.state.cartList.forEach(item => { item.checked = false;});
        } else {  //部分或全部不选中
          this.$store.state.cartList.forEach(item => { item.checked = true;});
        }
      },
      hjclick(){
        if(!this.isSelectAll){
          this.$toast.show('请选择要购买的商品',1500)
        }
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
