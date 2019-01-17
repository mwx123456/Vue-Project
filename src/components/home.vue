<template>


<div>
   
    <mt-swipe :auto="4000">
    <mt-swipe-item><img src="http://img0.imgtn.bdimg.com/it/u=1269259457,1952255815&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="http://img5.imgtn.bdimg.com/it/u=1711851296,3741488527&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="http://img3.imgtn.bdimg.com/it/u=2742838211,4087012610&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
</mt-swipe>


<!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
						<router-link to="/home/newslist">
		                    <span class="mui-icon"><img src="../images/menu1(1).png" alt=""></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon"><img src="../images/menu2.png" alt=""></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon"><img src="../images/menu3.png" alt=""></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon"><img src="../images/menu4.png" alt=""></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon"><img src="../images/menu5.png" alt=""></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon"><img src="../images/menu6.png" alt=""></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		</ul> 

</div>



</template>
<script>
// export default {
//     data(){
//         return{}
//     },
//     created(){
//         this.getLunBoTu()
//     },
//     methods:{
//         getLunBoTu(){
//             this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
//                 console.log(result.body)
//             })
//         }
//     }
    
// }
</script>
<style lang="scss" scope>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        img{
			width: 486px;
			height: 200px;
		}
    }

}
.mui-icon{
    img{
        width: 60px;
        height: 60px;
    }
    
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 12px;
}
    
</style>