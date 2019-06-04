<template>
    <div>
        
        <hr>
        <div>
            This is username. <span v-text="username"> </span>  <br> 
            This is the phone. <span v-text="phone"> </span>  <br>  
            This is also username {{$route.query.username}}
        </div>
        <hr>
        
    </div>
</template>
<script>
export default {
    name : 'index',
    //created  钩子函数  Vue 初始化时执行
    created:function() {
        this.getQuerys();
       // this.getParams();
    },
    watch:{
        //监测路由变化，只要变化了就调用路由参数方法将数据存储本组件即可
        '$route':'getQuerys',
        //'$route':'getParams'
    },
    methods:{
        getQuerys:function() {
            //取得路由带过来的参数
            let routeUsername = this.$route.query.username
            let routePhone = this.$route.query.phone
            //将数据放在当前组件的数据内
            this.username = routeUsername
            this.phone = routePhone
        },
        // getParams:function() {
        //     //取得路由带过来的参数
        //     let routeUsername = this.$route.params.username
        //     let routePhone = this.$route.params.phone
        //     //将数据放在当前组件的数据内
        //     this.username = routeUsername
        //     this.phone = routePhone
        // },
    }
}
</script>

