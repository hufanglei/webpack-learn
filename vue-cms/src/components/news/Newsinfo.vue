<template>
   <div>
       <h3>
           新闻详情页面 ------ {{id}}
       </h3>
   </div>
</template>


<script>
    export  default {
        data(){
            return{
                id: this.$route.params.id //将URL地址中传递过来的ID值，挂载到data上，方便以后调用
            }
        }

    }
</script>

<style scoped>

</style>