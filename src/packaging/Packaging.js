import axios from 'axios'
import '../style/loading.less'


export default {
    Axios(url, data) {
        let ajaxLoading = document.getElementById('ajaxLoading')
        ajaxLoading.style.display = 'block'
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(res => {
                    ajaxLoading.style.display = 'none'
                    return resolve(res)
                })
                .catch(error => {
                    ajaxLoading.style.display = 'none'
                    return new Promise((resolve, reject) => {
                        return reject(error)
                    })
                })
        })

    },
    DateUpdate(getTime){
        if(!getTime){
            let data=new Date(Date.now())
            return `
            ${data.getFullYear()}-${data.getMonth() + 1 > 9 ? data.getMonth() + 1 : '0' + (data.getMonth() + 1)}-${data.getDate() > 9 ? data.getDate() : '0' + data.getDate()} ${data.getHours() > 9 ? data.getHours() : '0' + data.getHours()}:${data.getMinutes() > 9 ? data.getMinutes() : '0' + data.getMinutes()}:${data.getSeconds() > 9 ? data.getSeconds() : '0' + data.getSeconds()}`
        }else{
            let data=new Date(getTime)
            return `
            ${data.getFullYear()}-${data.getMonth() + 1 > 9 ? data.getMonth() + 1 : '0' + (data.getMonth() + 1)}-${data.getDate() > 9 ? data.getDate() : '0' + data.getDate()} ${data.getHours() > 9 ? data.getHours() : '0' + data.getHours()}:${data.getMinutes() > 9 ? data.getMinutes() : '0' + data.getMinutes()}:${data.getSeconds() > 9 ? data.getSeconds() : '0' + data.getSeconds()}`
        }
    }
    




}