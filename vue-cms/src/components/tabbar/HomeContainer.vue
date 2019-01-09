<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">

            <mt-swipe-item v-for="item in lunbotuList"  :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>                
        </mt-swipe>
        <h2>HomeContainer</h2>
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
</style>