<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" v-for="item in cates"
                       :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>

        <!--图片类别区域-->
        <ul class="photo-list">
            <li v-for="item in list">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/js/mui/mui.min.js';

    export default {
        data(){
            return{
                cates:[ //所有分类列表
                    {id:1,title: '推荐'},
                    {id:2,title: '热点'},
                    {id:3,title: '北京'},
                    {id:4,title: '社会'},
                    {id:5,title: '娱乐'},
                    {id:6,title: '科技'}
                ],
                list:[] //图标列表的数组
            }
        },
        created(){
            this.getAllCategory();
            //默认进入页面，就主动请求 所有图片列表的数据
            this.getPhotoListByCateId(0);
        },
        mounted(){
            //当 组件中的Dom结构被渲染好并放到页面中后，会执行这个钩子函数
            //如果 要操作元素了，最好在mounted里面，因为 这里时候的Dom元素是最新的
            //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            mui(".mui-scroll-wrapper").scroll({
              deceleration: 0.0005
            });
        },
        methods:{
            getAllCategory(){
                // this.$http.get('api/getimgcategory').then(result=>{
                //     if(result.body.status === 0){
                //         this.body.message.unshift({title:'全部',id:0})
                //     }
                // })
                this.cates.unshift({title:'全部',id:0});
            },
            getPhotoListByCateId(cateId){
                this.$http.get('api/getimages/'+cateId).then(result=>{
                    if(result.body.status ==0){
                        this.list = result.body.message;
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    *{
        touch-action: pan-y;
    }
    .photo-list{
        list-style: none;
        margin: 0;
        padding: 10px 10px 0 10px;
        li{
            background-color: #ccc ;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 6px #999;
            position: relative;
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy="loading"]{
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                color: #fff;
                text-align: left;
                position: absolute;
                bottom: 0;
                background: rgba(0,0,0,0.4);
                max-height: 84px;
                pi.info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }
        }
    }

</style>