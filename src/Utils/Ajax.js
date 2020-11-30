import $ from 'jquery'
import vue from '../main'

export const Ajax = (function () {
    return {
        /*
        * 登录
        * url：请求地址
        * data:请求参数（是一个键值对的对象）
        * type：请求类型，默认值为get请求
        * isLogin:是否是登录，因为登录不需要token
        * isJson:false 是否需要添加headers
        * isFormData:是否是formData提交
        * isBlob:是否下载二进制文件流
        * */
        generalAjax(url, data = {}, type = 'GET', isLogin = false, isJson = true, isFormData = false, isBlob = false) {
            return new Promise(function (resolve, reject) {
                let promise;
                let token = sessionStorage.getItem('An');
                let requestBody = {
                    type: type,
                    url: url,
                };
                if (!isLogin) {
                    requestBody.beforeSend = function (xmlhttprequest) {
                        // xmlhttprequest.setRequestHeader('Authorization', token)
                    }
                }

                if (isFormData) {
                    requestBody.contentType = false;
                    requestBody.processData = false;
                    requestBody.data = data;
                    requestBody.header = {"Content-Type": "multipart/form-data"};
                } else if (type.toUpperCase() === 'GET' || !isJson) {
                    requestBody.data = data;
                    if (isBlob) {
                        requestBody.xhrFields = {responseType: "blob"}
                    }
                } else {
                    requestBody.data = JSON.stringify(data);
                    requestBody.headers = {
                        'Content-Type': 'application/json;charset=utf-8',
                    }
                }
                promise = $.ajax(requestBody);
                promise.then(function (response) {
                    //调用成功
                    resolve(response);
                }).catch(function (error) {
                    //权限不足，请联系管理员
                    let msg = error.responseJSON.msg;
                    vue.$message.closeAll();
                    if (msg === '用户凭证过期，请重新登陆') {
                        vue.$message.error('登录过期，即将退出！');
                        setTimeout(() => {
                            vue.$router.push({path: '/sysLogin'});
                        }, 2000);
                    } else {
                        // vue.$message.error(error.responseJSON.msg);
                    }
                    //调用失败
                    reject(error)
                })
            })
        }
    }
})();
