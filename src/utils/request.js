import Cookie from 'js-cookie'
const format = (obj)=>{
    return Object.entries(obj).map(item=>`${item[0]}=${
        typeof item[1] ==='object' ? JSON.stringify(item[1]) : item[1]
    }`).join('&')
}
const request = (url,method,data)=>{
    let baseOptions = {
        method,
        headers:{
            'content-type':'application/x-www-form-urlencoded;charset=utf-8',
            'authorization':Cookie.get('sessionid')
        }
    }
    if(method === 'GET'){
        url = `${url}${format(data) ? '?'+format(data) : ''}`;
    }else{
        baseOptions.body = format(data);
    }
    return fetch(url,baseOptions).then(response=>{
        if(response.ok){
            return response.json();
        }else{
            return Promise.reject(response)
        }
    })
}

export default {
    get(url,data={}){
        //key=value&key=value
        return request(url,'GET',data);
    },
    post(url,data){
        return request(url,'POST',data);
    }
}