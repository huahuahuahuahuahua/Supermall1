<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index" class="swiper-item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imagLoad">
      </a>
      </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from'../../../components/common/swiper'
  export default{
    name:"HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      imagLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad=true
        }
      }
    },
  }
</script>

<style scoped>
  .swiper-item img{
    width: 100%;
  }
</style>
