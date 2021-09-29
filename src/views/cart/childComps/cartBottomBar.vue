<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-check="isSelectAll" @click.native="clickbtn"/>
      <span>全选</span>
      <div class="price">{{totalprice}}</div>
      <div class="calc-content">
        去计算：{{checkLength}}
      </div>
    </div>

   </div>
</template>

<script>
  import checkButton from '../../../components/content/checkButton/checkButton'
  export default{
    name:'cartBottomBar',
    components:{
      checkButton,
    },
    computed:{
      totalprice(){
        return '￥'+this.$store.state.cartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
          return preValue+item.price*item.count
        },0)
      },
      checkLength(){
        return this.$store.state.cartList.filter(item=>item.checked).length
      },
      isSelectAll(){
        // return !(this.cartList.filter(item=>!item.checked).length)
        if(this.$store.state.cartList.length===0)return false
        return !(this.$store.state.cartList.find(item=>!item.checked))
      }
    },
    methods:{
      clickbtn(){
        // console.log('...')
        // this.cartList.forEach(item=>item.checked=!this.isSelectAll)
        if(!this.$store.state.cartList)return
        if(this.isSelectAll){
          this.$store.state.cartList.forEach(item=>item.checked=false)
        }else{
          this.$store.state.cartList.forEach(item=>item.checked=true)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    z-index: auto;
    width: 100%;
    height: 40px;
    background-color: #fff;
    position:absolute;
    bottom: 49px;

  }
  .check-content{
    display: flex;
    flex: 1;
    align-items: center;

  }
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price{
    flex: 1;
    margin-left: 20px;
  }
  .calc-content{
    position:fixed;
     height: 40px;
    right: 0;
    width: 90px;
    background-color: var(--color-tint);
  }
</style>
