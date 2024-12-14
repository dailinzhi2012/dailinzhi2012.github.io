<template>
    <div class="main">
        <div class="login_box">
            <div class="head">
                <img src="@/assets/images/logo2.png" alt="logo" width="100px" class="logo">
                <div class="title">WEB自动化平台</div>
            </div>

            <div class="login-form">
                <el-form :model="loginForm"  >
                    <el-form-item>
                        <el-input 
                        prefix-icon="UserFilled" 
                        v-model="loginForm.username"
                        placeholder="请输入账号|邮箱|用户名" />
                    </el-form-item>
                    <el-form-item>
                        <el-input 
                        type="password" 
                        prefix-icon="Lock" 
                        v-model="loginForm.password" 
                        placeholder="请输入密码"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-switch  v-model="loginForm.status" inactive-text="记住登录状态"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button  @click="loginSubmit" type="primary" style="width:100%;">点击登录</el-button>
                    </el-form-item>
                    <!--- 去注册 --->
                    <el-link @click='router.push({name:"register"})' type="primary">没有账号？去注册</el-link>
                </el-form>
            </div>

        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import http from '@/api/index'
import { ElNotification } from 'element-plus';
import { useRoute }from 'vue-router'
import { User } from '@element-plus/icons-vue/dist/types';

// 定义路由
const route = useRoute()
// 创建UserStore对象
const uStore = UserStore()

// 定义响应式的变量
const loginForm = reactive ({
    username:"",
    password:"",
    status:false
})

//定义点击登录调用的方法
const loginSubmit = async()=>{
    调用后端的接口发送请求
    const response = await http.user.RegisterApi(loginForm)
    if(response.status ===200){
        ElNotification({
            title:'Success',
            message:'登录成功',
            type:'success',
        })
        // 保存登录状态
        localStorage.setItem('token',response.data.token)

        // 跳转到项目页面
        route.push({name:"home"})

    }else{
        ElMessage({
            type:"error",
            message:response.data.detail
        })
    }

}
</script>

<style scoped lang="scss">
.main {
    width: 100vw;
    height: 100vh;
    background: url('../assets/svg/bj.svg');
    background-size: cover;

    .login_box {
        width: 500px;
        height: 460px;
        box-shadow: 0 0 5px var(--el-color-primary);
        position: absolute;
        top: calc(50vh - 230px);
        left: calc(50vw - 250px);
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.8)
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;

        .logo {
            width: 70px;
            height: 70px;

        }

        .title {
            font-size: 30px;
            font-weight: bold;
            color: var(--el-color-primary);
            margin-left: 20px;
        }
    }
    .login-form{
        margin:0 30px;

    }
}
</style>