<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
                        科技
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import mui from '../../lib/js/mui/mui.js';

    export default {
        data(){
            return{}
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

        }
    }
</script>

<style scoped lang="scss">
    *{
        touch-action: pan-y;
    }
</style>