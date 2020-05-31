<template>
    <div>
      <cart-list-item v-for="(item,index) in cartList" :key="index" :itemInfo="item" @add = "add(index)" @sub = "sub(index)" @remove = "remove(index)"></cart-list-item>
    </div>
</template>

<script>

  import CartListItem from './CartListItem'
  import { mapGetters } from "vuex"


	export default {
		name: "CartList",
    components: {
      CartListItem
    },
    // props: {
		//   cartList: {
		//     type: Array,
    //     default() {
		//       return []
    //     }
    //   }
    // },
    computed:{
      ...mapGetters(['cartList'])
    },
    methods:{
      add(index){
        this.$store.commit('addNum',index)
      },
      sub(index){
        this.$store.commit('subNum',index)
      },
      remove(index){
        this.$store.commit('removeGood',index)
      }
    }
	}
</script>

<style scoped>

</style>
