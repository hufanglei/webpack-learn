<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                    <router-link :to="'/home/newsinfo/'+item.id">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                        <div class="mui-media-body">
                            <h1>{{item.title}}</h1>
                            <p class='mui-ellipsis'>
                                <span>发布时间: {{item.add_time }}</span>
                                <span>点击: {{item.click}}次</span>
                            </p>
                        </div>
                    </router-link>

            </li>
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/swap02.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>木屋</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发布时间: 2018-12-12 12:12:12</span>-->
                            <!--<span>点击: 0次</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/swap01.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--<h1>CBD</h1>-->
                        <!--<p class='mui-ellipsis'>-->
                            <!--<span>发布时间: 2018-12-12 12:12:12</span>-->
                            <!--<span>点击: 0次</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->

        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export  default {
        data(){
            return{
                newsList:[]
            }
        },
        created(){
            this.getNewsList();
        },
        methods: {
            getNewsList(){
                // this.$http.get('api/').then(result=>{
                //     this.newsList = result.body.message;
                //      if(result.body.status ==0){
                //         //如果没有失败，应该吧数据保存到data上
                //          this.newsList = result.body.message;
                //      }else{
                //          Toast('获取新闻列表失败!')
                //      }
                // })
                this.newsList = [
                    {id:'1',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'2',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'3',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'4',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'5',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'6',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'7',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'8',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'9',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'10',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'11',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'12',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'13',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'14',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'15',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'16',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'17',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'18',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'19',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'20',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'21',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'22',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'23',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                    {id:'24',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap02.jpg'},
                    {id:'25',title:'1季度多家放弃利润跌幅超50%',add_time:'2018-12-12 12:12:12',zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg'},
                ];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }

</style>