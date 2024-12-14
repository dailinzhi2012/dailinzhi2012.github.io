import axios from '@/api/request'




export default {
    LoginApi(data){
        return axios.post('/api/users/login', data)
    },
    RegisterApi(data){
        return axios.post('/api/users/register', data)
    }
}