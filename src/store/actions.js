import{
  ADD_COUNTER,
  ADD_TO_CART
}from './mutation-types'
export default{
      addCart(context,payload){
        // let oldproduct=null;
        // for(let item of state.cartList){
        //   if(item.iid===payload.iid){
        //     oldproduct=item;
        //   }
        // }
        return new Promise((resolve,reject)=>{
          let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)
          if(oldProduct){
            // let oldproduct=state.cartList[index]
            // oldProduct.count+=1
            context.commit(ADD_COUNTER,oldProduct)
            resolve('当前商品数量加1')
          }else{
            payload.count=1
            // context.cartList.push(payload)
            context.commit(ADD_TO_CART,payload)
            resolve('添加新商品')
          }
        })
      }
}
