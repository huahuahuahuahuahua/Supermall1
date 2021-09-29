<template>
  <div class="toast" v-show="isShow">
  <div >{{message}}</div>
  </div>
</template>

<script>
  export default{
    name:'Toast',
    props:{
      message:{
        type:String,
        default:''
      },
      isShow:{
        type:Boolean,
        default:false
      }
    },
    // data(){
    //   return {
    //     message:'',
    //     isShow:true
    //   }
    // },
    methods:{
      // show(message,duration){
      //     this.show=true;
      //     this.message=message;
      //     setTimeout(()=>{
      //        this.show=false;
      //         this.message=''
      //     },duration)
      // }
    }
  }
</script>

<style>
  .toast{
    left: 50%;
    top: 50%;
   width:100px;
    height: 20px;
    position: fixed;
   transform: translate(-50%,-50%);
    background-color: var(--color-tint);
    color:#fff
  }
</style>
