<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList"  :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>                
        </mt-swipe>
        
        <!-- 九宫格到6宫格的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../images/swap01.jpg" style="border-radius:50%" alt="">
                        <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">热门招聘</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">招工单位</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">热门人才</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">考试培训</div></a></li>               
            </ul> 

    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default{
    data(){
        return {
            lunbotuList:[] //保存轮播图的数组
        }
    },
    created() {
       this.getLunbotu(); 
    },
    methods:{
        getLunbotu(){
            // this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
            //     console.log(result.body);
            //     if(result.body.status === 0){
            //         this.lunbotuList = result.body.message; 
            //     }else{
            //         Toast('加载录播图失败...')
                    this.lunbotuList = [
                        {img:'../../src/images/swap01.jpg',url:'www.baidu.com'},
                        {img:'../../src/images/swap02.jpg',url:'www.sina.com'},
                    ];
            //     }
            // })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background: red;
            }
            &:nth-child(2){
                background: green;
            }
            &:nth-child(3){
                background: blue;
            }
           
        }

        img{
            width: 100%;
            height: 100%;
        }
    }

    .mui-grid-view.mui-grid-9{
        background: #fff;
        border:none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {       
        border:0; 
        /* 自己加的因为我没有图图像 start */
        li a span:nth-child(1){
            height: 60px;
            width: 60px;
            line-height:60px;
        }
        /* 自己加的因为我没有图图像 end */
        img {
            height: 60px;
            width: 60px;
            line-height:60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
   }
</style> 