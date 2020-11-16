export const request = (url, method = 'GET', data) =>{
    // const baseUrl = 'https://5b5e71c98e9f160014b88cc9.mockapi.io';
    // const baseUrl = 'http://tingapi.ting.baidu.com';
    // const baseUrl = '/apc'
    let config = {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
    }
    if (method !== 'GET') {
        config.data = JSON.stringify(data)
    }else {
        if (data) {
            let paramsArray = [];
            //拼接参数
            Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
    }
     return fetch(url, config)
         .then((res)=>{
             if(res.status === 200) {
                 return res.json()
             }
         })
         .then((res1)=>{
             return Promise.resolve(res1)
         })
}