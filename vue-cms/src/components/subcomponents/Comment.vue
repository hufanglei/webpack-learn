<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要Bb的内容（最多吐槽120字）"  maxlength="120"  rows="5" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <!--<div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">-->
                <!--<div class="cmt-title">-->
                    <!--第{{i+1}}楼&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}-->
                <!--</div>-->
                <!--<div class="cmt-body">-->
                    <!--{{item.content==='undefined' ? '此用户很懒，什么都没说':item.content}}-->
                <!--</div>-->
            <!--</div>-->
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12::12
                </div>
                <div class="cmt-body">
                    锄禾日当午，复方
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                pageIndex:1,//默认展示 第一页数据
                comments:[], //所有的评论数据
                msg:'' //评论输入的内容
            }
        },
        created(){
            this.getComments();
        },
        methods:{
            getComments(){
                this.$http.get('api/getComments/:'+this.id+'?pageindex='+this.pageIndex)
                    .then(result =>{
                        if(result.body.status === 0){
                            //每当获取新评论的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
                            this.comments = this.comments.concat(result.body.message);
                        }else{
                            Toast('获取评论失败!')
                        }
                    })

            },
            getMore(){ //加载更多
                this.pageIndex ++;
                this.getComments();
            },
            postComment(){
                //发表评论
                //参数1: 请求的url地址
                //参数2: 提交给服务器的数据对象
                //参数3: 定义提交的时候，表单中数据的格式
                this.$http.post('api/postcomment/'+this.$route.params.id,{
                    content: this.msg.trim()
                }).then(function (result) {
                    if(result.body.status === 0){
                        var cmt = {user_name: '匿名用户', add_time:Date.now(),
                            content:this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = '';
                    }
                })
            }

        },
        props:["id"]
    }
</script>

<style scoped lang="scss">
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px ;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2rem;
                }
            }
        }
    }
</style>