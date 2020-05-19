<template>
    <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :itemInfo="item"></cart-list-item>
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
    }
	}
</script>

<style scoped>

</style>
