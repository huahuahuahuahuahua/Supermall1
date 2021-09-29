<template>
  <div id="shop-item">
   <div class="item-selector">
      <checkButton :isCheck="itemInfo.checked" @click.native="checkClick"/>
      </div>
      <div class="item-img">
        <img :src="itemInfo.image"  alt="商品图片">
      </div>
        <div class="item-info">
          <div class="item-title">{{itemInfo.title}}</div>
          <div class="item-desc">{{itemInfo.desc}}</div>
          <div class="info-bottm">
            <div class="item-price left">￥{{itemInfo.price}}</div>
            <div class="item-count right">x{{itemInfo.count}}</div>
          </div>
        </div>
  </div>
</template>

<script>
  import checkButton from '../../../components/content/checkButton/checkButton'
  export default{
    name:'CartListItem',
    props:{
      itemInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    components:{
      checkButton,
    },
    methods:{
      checkClick(){
        this.itemInfo.checked=!this.itemInfo.checked
      }
    }
  }
</script>

<style scoped>
  #shop-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title,.item-desc{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottm{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottm .item-price{
    color: orangered;
  }
</style>
