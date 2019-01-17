import VueRouter from 'vue-router'

import home from "../src/components/home.vue"
import member from "../src/components/member.vue"
import shopcart from "../src/components/shopcart.vue"
import search from "../src/components/search.vue"
import newslist from "../src/components/news/newslist.vue"

var router = new VueRouter({
  routes: [
    
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/member",component:member},
    {path:"/shopcart",component:shopcart},
    {path:"/search",component:search},
    {path:"/home/newslist",component:newslist},

        
  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router