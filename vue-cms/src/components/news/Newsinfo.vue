<template>
   <div class="newinfo-container">
       <h3 class="title">
           {{newsinfo.title}}
       </h3>
       <p class="subtitle">
           <span>发布时间:  {{newsinfo.add_time}}</span>
           <span>点击: {{newsinfo.click}}次</span>
       </p>
       <hr>
       <div class="content" v-html="newsinfo.content"></div>
       <comment-box :id="this.id"></comment-box>
   </div>
</template>


<script>
    import {Toast} from 'mint-ui';
    import comment from '../subcomponents/Comment.vue'

    export  default {
        data(){
            return{
                id: this.$route.params.id, //将URL地址中传递过来的ID值，挂载到data上，方便以后调用
                newsinfo:{id:'1',title:'1季度多家放弃利润跌幅超50%', add_time:'2018-12-12 12:12:12',
                          zhaiyao:'',click:'5',img_url:'../src/images/swap01.jpg',content:'此处省略一万个打飞机咖啡店的合法的萨科技合法电视剧会发生的开奖号反倒是看见发的数据库发哈数据库的划分空间大师傅的会计师发的发家史附近的发的撒胡椒粉和撒娇发货的撒娇发货的撒娇开发就卡死的恢复健康大师傅尽快的撒谎空间放大后撒上尽快发货金卡戴珊发空间大师傅尽快的撒划分空间撒谎的空间复合大师'}, //新闻对象
            }
        },
        methods:{
            getNewsInfo(){//获取新闻详情
                this.$http.get('api/news/'+this.id).then(result=>{
                    if (result.body.status === 0){
                        // this.newsinfo = result.body.message[0];
                    }else{
                        Toast('获取新闻失败!')
                    }
                })
            }
        },
        components:{
            'comment-box':comment
        }



    }
</script>

<!--scoped 去掉scoped img图片显示 就正常了-->
<style lang="scss" scoped>
    .newinfo-container{
        padding:0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>