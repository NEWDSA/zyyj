/*
 * @Author: luciano 
 * @Date: 2021-01-31 22:32:17 
 * @Last Modified by: luciano
 * @Last Modified time: 2021-01-31 22:33:50
 * 登录接口
 */

import request from '@/utils/request'

export default{
    getLogin(form){
        return request({
            url:'/login',
            method:'post',
            data:{
                username:form.username,
                password:form.password
            }
        })
    }
}