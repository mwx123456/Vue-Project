//入口文件

import Vue from "vue";
// 1.导入安装路由的包
import VueRouter from "vue-router"
// 2.安装路由
Vue.use(VueRouter)



import {Header} from "mint-ui";
Vue.component(Header.name,Header);

import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"


import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 3.导入自己的router.js路由模块
import router from "./router.js"

import app from "./App.vue"

// import VueResource from "vue-resource"
// Vue.use(VueResource)
// var  VueResource
// this.$http.get()




var vm = new Vue({
  el:"#app",

  render:c => c(app),
  // 4挂在路由对象
  router



})