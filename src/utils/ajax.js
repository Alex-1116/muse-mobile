import vue from 'vue'
import axios from 'axios'
import baseUrl from './baseUrl'

axios.defaults.withCredentials = false;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';

axios.interceptors.request.use(
    config => {
        if (!localStorage.getItem('flag') || localStorage.getItem('flag') === '') {
            config.headers['flag'] = localStorage.getItem('safencrypt_ctoken');
        } else {
            config.headers['flag'] = localStorage.getItem('flag');
        }
        config.url = baseUrl.apiUrl + config.url;
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response => {
        if (response.config.method === 'post' || response.config.method === 'put' || response.config.method === 'get') {
            if (response.data.hasOwnProperty('type')) {
                response = JSON.parse(decryptResponse(JSON.stringify(response.data)));
                return response
            }
        }
        response = response.data;
        return response
    },
    err => {
        return Promise.reject(err)
    }
)

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

export function ajax(options) {
    return axios(options).then(res => {
        console.log('axios');
        console.log(res);
        return res
    }).catch(error => {
        // alert('error:' + error);
        console.log('error: ' + error);
        if (this && this.$message) {
            this.$message.error(error.message);
        }
        throw error
    })
}

vue.prototype.ajax = ajax;

export default axios;
