<template>
    <div>
        <h1>这是App组件</h1>   
        <mt-button type="default" @click="show">default</mt-button>
        <mt-button type="danger" size="large" icon="back">primary</mt-button>
        <mt-button type="danger" size="normal" plain>primary</mt-button>
        <mt-button type="danger " size="small" disabled>primary</mt-button>

        <mybtn type="primary">12345</mybtn>
        <router-link to="account">Account</router-link>
        <router-link to="goodslist">Goodslist</router-link>
        <router-view></router-view>     
    </div>    
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data(){
         return  {
             toastInstance: null
         }        
    },
    created() {
        this.getList()
    },
    methods: {
        getList(){
            this.show();
            setTimeout(() => {
                this.toastInstance.close();
            }, 3000);
        },
        show(){
            this.toastInstance = Toast({
                message: 'Upload Complete',
                position: 'bottom',
                duration: -1,
                iconClass: 'glyphicon glyphicon-heart',
                className: 'mytoast'
                });
        }
    },

}
</script>
<style scoped>
    .red{
        background: red;
    }
</style>