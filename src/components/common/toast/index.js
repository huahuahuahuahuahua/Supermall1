// import Toast from './Toast'
// // import Vue from 'vue'
// const obj={}

// // obj.install=function(Vue){
// //   // console.log('执行了obj的install函数',Vue)
// //   // document.body.appendChild(Toast.$el)
// //   // Vue.prototype.$toast=Toast;
// //   const toastContrustor =Vue.extend(Toast)
// //   const toast =new toastContrustor()

// //   toast.$mount(document.createElement('div'))
// //  document.body.appendChild(Toast.$el)
// //  Vue.prototype.$toast=toast;
// // }
// // export default obj

// import { createVNode ,render} from 'vue'
//     const body = document.body;
//     const root = document.createElement("div");
//     body.appendChild(root);
//     root.className = "custom-root";
//     export default{
//         install(app){
//             let div = document.createElement("div");
//             root.appendChild(div);
//             // com 为自己写的组件,  SoltChild 可以是自己的子组件 ，也可以不传
//             let vm = createVNode(Toast,{},{
//                 // slots
//                 default:()=>createVNode()
//             });
//             vm.appContext = app._context; // 这句很关键，关联起了数据
//             render(vm,div);

//         }
//     }
