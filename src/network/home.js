import {request} from "./request"

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

function test(){
  const names=['why','aaa']
}
