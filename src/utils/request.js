import axios from 'axios'
import {message, Modal, notification} from 'ant-design-vue'
import moment from 'moment'
import store from '../store'
import db from '@/utils/localstorage'

moment.locale('zh-cn');

// 统一配置
let APP_REQUEST = axios.create({
    baseURL: 'api',
    responseType: 'json',
    validateStatus(status) {
        // 200 外的状态码都认定为失败
        return status === 200
    }
});

// 拦截请求
APP_REQUEST.interceptors.request.use((config) => {
    let expireTime = store.state.account.expireTime;
    let now = moment().format('YYYYMMDDHHmmss');
    // 让token早10秒种过期，提升“请重新登录”弹窗体验
    if (now - expireTime >= -10) {
        Modal.error({
            title: '登录已过期',
            content: '很抱歉，登录已过期，请重新登录',
            okText: '重新登录',
            mask: false,
            onOk: () => {
                return new Promise((resolve, reject) => {
                    db.clear();
                    location.reload()
                })
            }
        })
    }
    // 有 token就带上
    if (store.state.account.token) {
        config.headers.Authentication = store.state.account.token
    }
    return config
}, (error) => {
    return Promise.reject(error)
});

// 拦截响应
APP_REQUEST.interceptors.response.use((config) => {
    return config
}, (error) => {
    if (error.response) {
        let errorMessage = error.response.data === null ? '系统内部异常，请联系网站管理员' : error.response.data.message
        switch (error.response.status) {
            case 404:
                notification.error({
                    message: '系统提示',
                    description: '很抱歉，资源未找到',
                    duration: 4
                });
                break;
            case 403:
            case 401:
                notification.warn({
                    message: '系统提示',
                    description: '很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效',
                    duration: 4
                });
                break;
            default:
                notification.error({
                    message: '系统提示',
                    description: errorMessage,
                    duration: 4
                });
                break
        }
    }
    return Promise.reject(error)
});

const request = {
    post(url, data) {
        return APP_REQUEST.post(url, data)
    },
    put(url, data) {
        return APP_REQUEST.put(url, data)
    },
    get(url, params) {
        return APP_REQUEST.get(url, {
            params: params
        })
    },
    delete(url, params) {
        return APP_REQUEST.delete(url, {
            params: params
        })
    },
    export(url, params = {}) {
        message.loading('导出数据中');
        return APP_REQUEST.get(url, {
            params: params,
            responseType: 'blob'
        }).then((r) => {
            const content = r.data;
            const blob = new Blob([content]);
            const fileName = `${new Date().getTime()}_导出结果.xlsx`;
            if ('download' in document.createElement('a')) {
                const elink = document.createElement('a');
                elink.download = fileName;
                elink.style.display = 'none';
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href);
                document.body.removeChild(elink)
            } else {
                navigator.msSaveBlob(blob, fileName)
            }
        }).catch((r) => {
            console.error(r);
            message.error('导出失败')
        })
    },
    download(url, data, filename) {
        message.loading('文件传输中');
        return APP_REQUEST.post(url, data, {
            responseType: 'blob'
        }).then((r) => {
            const content = r.data;
            const blob = new Blob([content]);
            if ('download' in document.createElement('a')) {
                const elink = document.createElement('a');
                elink.download = filename;
                elink.style.display = 'none';
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href);
                document.body.removeChild(elink)
            } else {
                navigator.msSaveBlob(blob, filename)
            }
        }).catch((r) => {
            console.error(r);
            message.error('下载失败')
        })
    },
    upload(url, data) {
        return APP_REQUEST.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
};

export default request
