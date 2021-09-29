<template>
  <div class="cart-list">
  <scroll class="content">
    <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"/>
  </scroll>
  
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from '../../../components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  export default{
    name:'CartList',
    components:{
      Scroll,
      CartListItem,
    },
    computed:{
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
  .cart-list{
    height: 100%;
    width: 100%;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
      /* height: calc(100% - 44px); */
  }
</style>
