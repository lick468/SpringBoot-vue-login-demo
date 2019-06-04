<template>
    <div>
        
        <hr>
        <div>
            用户名：<input type="text" v-model="loginInfo.username" placeholder="请输入用户名"><br>
            密码：<input type="password" v-model="loginInfo.password" placeholder="请输入密码"><br>
            <button v-on:click="login">登录</button><br>

            登录情况：<textarea cols="30" rows="30" v-model="responseResult"></textarea>
        </div>
        <hr>
     
    </div>
</template>

<script>


export default {
   name : 'login',
   data() {
       return {
           loginInfo : {username : '',password :''},
           responseResult : []
       }
   },
   methods : {
       login() {
           this.$axios
           .post('/login',{
               username:this.loginInfo.username,
               password:this.loginInfo.password
           })
           .then(successResponse => {
               this.responseResult = JSON.stringify(successResponse.data)
               if(successResponse.data.code === 200){
                   this.$router.replace({path:'/index',query:{
                       username:successResponse.data.object.username,
                       phone:successResponse.data.object.phone
                       }
                       })
               }
           })
           .catch(failResponse => {})
       }
   }

}
</script>

