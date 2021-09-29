import Vue from 'vue';
import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// import {Vuex} from "vuex";

// Vuex.use(Vuex);
const state={
      tabBarShow:true,
      cartList:[],
      isLoading:true
    }
const store= new createStore({
     state,
    mutations,
    actions,
    getters,
});
export default store
