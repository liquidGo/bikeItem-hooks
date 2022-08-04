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
    DateUpdate(getTime) {
        if (!getTime) {
            let data = new Date(Date.now())
            return `
            ${data.getFullYear()}-${data.getMonth() + 1 > 9 ? data.getMonth() + 1 : '0' + (data.getMonth() + 1)}-${data.getDate() > 9 ? data.getDate() : '0' + data.getDate()} ${data.getHours() > 9 ? data.getHours() : '0' + data.getHours()}:${data.getMinutes() > 9 ? data.getMinutes() : '0' + data.getMinutes()}:${data.getSeconds() > 9 ? data.getSeconds() : '0' + data.getSeconds()}`
        } else {
            let data = new Date(getTime)
            return `
            ${data.getFullYear()}-${data.getMonth() + 1 > 9 ? data.getMonth() + 1 : '0' + (data.getMonth() + 1)}-${data.getDate() > 9 ? data.getDate() : '0' + data.getDate()} ${data.getHours() > 9 ? data.getHours() : '0' + data.getHours()}:${data.getMinutes() > 9 ? data.getMinutes() : '0' + data.getMinutes()}:${data.getSeconds() > 9 ? data.getSeconds() : '0' + data.getSeconds()}`
        }
    },
    //封装的这个函数就是为了把JSON中的页数的信息解析出来并且返回去
    paginationjj(backjson) {
        console.log(backjson, 'json');
        return {
            current: backjson.data.result.page,
            pageSize: backjson.data.result.page_size,
            total: backjson.data.result.total_count,
        }
    }
    // pagination(data, callback) {
    //     // console.log(data, '12312312312312');
    //     return {
    //         onChange: current => callback(current), //页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
    //         current: data.data.result.page,
    //         pageSize: data.data.result.page_size,
    //         total: data.data.result.total_count,
    //         showTotal: () => {
    //             return `共${data.data.result.total_count}条`
    //         },
    //         // showQuickJumper: true
    //     }
    // },







}