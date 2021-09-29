<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-params-info ref="params" :itemParams="itemParams" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <toast :message="message" :isShow="isShow" />
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import {
    getDetail,
    Goods,
    Shop,
    GoodsParam,
    getRecommend
  } from "../../network/detail"
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import Scroll from '../../components/common/scroll/Scroll'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import GoodsList from '../../components/content/goods/GoodsList'
  import DetailBottomBar from './childComps/DetailBottomBar'
  import Toast from '../../components/common/toast/Toast'
  import {
    debounce
  } from '../../common/utils'
  import {mapActions} from 'vuex'
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        itemParams: {},
        commentInfo: {},
        recommends: {},
        themeTopYs: [],
        currentIndex:0,
        message:'',
        isShow:false,
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      Toast,
    },
    updated() {
      this.$refs.scroll.refresh();
    },
    created() {


      this.iid = this.$route.params.iid
      // console.log(this.iid)

      getRecommend(this.iid).then(res => {
        // console.log(res)
        this.recommends = res.data.list
      })





      getDetail(this.iid).then(res => {
        // console.log(res)
        const data = res.result;
        this.topImages = res.result.itemInfo.topImages

        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        this.itemParams = data.itemParams
        // console.log(data.itemParams)
        // console.log(data)
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }
        console.log(this.goods)


        this.$nextTick(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopYs);
        })
      })


    },

    mounted() {

    },

    methods: {
      ...mapActions({
        add:'addCart'
      }),

      imageLoad() {
        this.$refs.scroll.refresh()
        this.getThemeTopY();
      },
      titleClick(index) {
        console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
      },
      contentScroll(position){
        const positionY =-position.y;
        // console.log(position)
        let length=this.themeTopYs.length
        for(let i=0;i<length;i++){
          if(this.currentIndex!==i&&((i<length-1&&positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])
          ||(i===length-1&&positionY>=this.themeTopYs[i]))){
            this.currentIndex=i;
            this.$refs.nav.currentIndex=this.currentIndex;
          }
        }
      },
      addToCart(){
        // console.log('---')
        const product={}
        product.image=this.topImages[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.realPrice;
        product.iid=this.iid;

        this.add(product).then(res=>{
          console.log(res)
          // this.$Toast.show(res,2000)
          // console.log(this.$Toast)
          this.isShow=true;
          this.message=res;
          setTimeout(()=>{
             this.isShow=false;
              this.message=''
          },1500)
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    overflow: hidden;
    height: calc(100% - 44px);
  }
</style>
