<template>
  <!-- <h2>购物车</h2> -->
 <nav-bar class="cart-nav">
   <template v-slot:center>
     购物车({{cartLength}})
   </template>
 </nav-bar>

 <cart-list/>
<cart-bottom-bar/>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import cartBottomBar from './childComps/cartBottomBar'
  import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      cartBottomBar
    },
    computed:{
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
.cart-nav{
  background-color: var(--color-tint);
  color:#fff;
  font-weight: 700;
  z-index: 8;
}
</style>
