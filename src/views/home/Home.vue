<template>
<div id="home"  class="wrapper">

       <nav-bar class="home-nav">
         <template v-slot:center>
           购物街
         </template>
       </nav-bar>
     <tab-control class="tab-control"
                    :titles="['流行', '新款', '精选']"
                    @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"/>
      <scroll class="content"
              ref="scroll"
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp="loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
          <recommend-view :recommends="recommends" />
          <feature-view/>
        <tab-control class="tab-control"
                     :titles="['流行', '新款', '精选']"
                     @tabClick="tabClick" ref="tabControl2" />
          <good-list :goods="showGoods"/>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
 </div>
</template>

<script>

  import {getHomeMultidata,getHomeGoods} from '../../network/home'
  // import {Swiper,SwiperItem} from'../../components/common/swiper'
    import HomeSwiper from './childComps/HomeSwiper'
    import RecommendView from "./childComps/RecommendView"
    import FeatureView from './childComps/FeatureView'

    import NavBar from '../../components/common/navbar/NavBar'
    import TabControl from "../../components/content/tabControl/TabControl"
    import GoodList from '../../components/content/goods/GoodsList'

    import Scroll from '../../components/common/scroll/Scroll'
    import BackTop from '../../components/content/backtop/BackTop'
    export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data(){
      return{
        result:null,
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:545,
        isTabFixed:false,
        saveY:0
      }
    },
    computed:{
      showGoods(){
       return this.goods[this.currentType].list
      },
      activated(){
        this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0,this.saveY,20)
      },
      deactivated(){
        console.log(saveY)
        this.saveY = this.$refs.scroll.getScrollY()
      }
    },
    mounted(){

    },
    created(){
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
      // this.scroll.$refs('itemImagLoad',()=>{
      //   console.log('----')
      // })
    },
    methods:{
     backClick() {
             this.$refs.scroll.scrollTo(0, 0)
           },
      tabClick(index){
        switch(index){
          case 0:
          this.currentType = 'pop'
          break
          case 1:
          this.currentType = 'new'
          break
          case 2:
          this.currentType = 'sell'
          break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      contentScroll(position){
      // console.log(position)
      this.isShowBackTop=-position.y>1000
      this.isTabFixed=(-position.y)>this.tabOffsetTop
      },
      loadMore(){
        // console.log('加载更多')
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()
      },
      swiperImageLoad(){
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
      },
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          // console.log(res);
          this.result=res;
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
         this.goods[type].page++

         this.$refs.scroll.finishPullUp()
        })
      },
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
   .content {
      /* overflow: hidden; */
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
    }
/*    .tab-control{
      position: relative;

    } */
/* .content{
    height:calc(100%-93px);
    overflow: hidden;
  } */

</style>
