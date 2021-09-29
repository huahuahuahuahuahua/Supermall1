<template>
<div class="detail-swiper">
  <swiper>
    <swiper-item v-for="(item,index) in topImages" :key="index" class="swiper-item">
        
          <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import{Swiper,SwiperItem} from '../../../components/common/swiper'

  export default{
    name:"DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style>
    .detail-swiper {
      height: 300px;
      overflow: hidden;
    }
    .swiper-item img{
      height: 100%;
      width: 100%;
    }
</style>
