<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!-- <img slot="item-icon-active" src="assets/img/tabbar/home_active.svg" alt=""> -->
      <!-- <div slot="item-text"></div> -->
 <!--     <template v-slot:item-icon>
        <img src="assets/img/tabbar/home.svg" alt="">
      </template>
        <template v-slot:item-icon-active>
          <img  src="../../../assets/img/tabbar/home_active.svg" alt="">
        </template> -->
      <template v-slot:item-text>
        详情
      </template>
              <template v-slot:item-icon>
                <div class=".tab-bar-item-img">
                  <img src="../../../assets/img/tabbar/home.svg" alt="">
                </div>
              </template>

              <template v-slot:item-icon-active>
                <div class=".tab-bar-item">
                  <img  src="../../../assets/img/tabbar/home_active.svg" alt="">
                </div>
              </template>
    </tab-bar-item>
    <tab-bar-item path="/category"><!--
      <img slot="item-icon" src="assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="assets/img/tabbar/category_active.svg" alt=""> -->
      <template v-slot:item-text>
        分类
      </template>
      <template v-slot:item-icon>
        <div class=".tab-bar-item">
          <img src="../../../assets/img/tabbar/category.svg" alt="">
        </div>
      </template>

      <template v-slot:item-icon-active>
        <div class=".tab-bar-item">
          <img  src="../../../assets/img/tabbar/category_active.svg" alt="">
        </div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
<!--      <img slot="item-icon" src="assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text"></div> -->
      <template v-slot:item-text>
        购物车
      </template>
      <template v-slot:item-icon>
        <div class=".tab-bar-item">
          <img src="../../../assets/img/tabbar/shopcart.svg" alt="">
        </div>
      </template>

      <template v-slot:item-icon-active>
        <div class=".tab-bar-item">
          <img  src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
        </div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile"><!--
      <img slot="item-icon" src="assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text"></div> -->
      <template v-slot:item-text>
        我的
      </template>
      <template v-slot:item-icon>
        <div class=".tab-bar-item">
          <img src="../../../assets/img/tabbar/profile.svg" alt="">
        </div>
      </template>

      <template v-slot:item-icon-active>
        <div class=".tab-bar-item">
          <img  src="../../../assets/img/tabbar/profile_active.svg" alt="">
        </div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
