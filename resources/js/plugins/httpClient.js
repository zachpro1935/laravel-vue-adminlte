import axios from 'axios'
import Constants from './constants'
import StorageManage from '../helpers/storageManage';
import Helper from '../helpers/common'

export default class HttpClient {
    constructor(baseUrl) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            timeout: Constants.defaultRequestTimeOut,
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'authorization': StorageManage.getStorage('token')
            }
        });
    }

    getOptions(header = {}) {
        var options = {
            headers: Helper.buildHeaders(header)
        };
        return options;
    }

    handleError(err) {
        // let apiResponse = new ApiResponse(err, true)
        // let resultError = apiResponse.formatResponse().getResult();
        return {
            error: true,
            message:  err
        };
    }


    get(url, query = {}, headers = {}) {
        let options = this.getOptions(headers);
        url = Helper.buildUrl(url, query);

        return new Promise((resolve) => {
            this.axiosInstance.get(url, options).then((res) => resolve(res)).catch(err => resolve(this.handleError(err)));
        });
    }

    post(url, query = {}, body = {}, headers = {}) {
        let options = this.getOptions(headers);
        url = Helper.buildUrl(url, query);

        return new Promise((resolve) => {
            this.axiosInstance.post(url, body, options).then((res) => resolve(res)).catch(err => resolve(this.handleError(err)));
        });
    }

    put(url, query = {}, body = {}, headers = {}) {
        let options = this.getOptions(headers);
        url = Helper.buildUrl(url, query);

        return new Promise((resolve) => {
            this.axiosInstance.put(url, body, options).then((res) => resolve(res)).catch(err => resolve(this.handleError(err)));
        });
    }

    delete(url, query = {}, headers = {}) {
        let options = this.getOptions(headers);
        url = Helper.buildUrl(url, query);
        
        return new Promise((resolve) => {
            this.axiosInstance.delete(url, options).then((res) => resolve(res)).catch(err => resolve(this.handleError(err)));
        })
    }

    postFile(url, query = {}, file, body = {}, headers = {}, onUploadProgress = null) {
        let formData = new FormData();
        formData.append('file-upload', file);

        for (let key in body) {
            formData.append(key, body[key]);
        }

        let options = this.getOptions(headers);
        if (onUploadProgress) {
            options.onUploadProgress = onUploadProgress;
        }

        url = Helper.buildUrl(url, query);

        return new Promise((resolve) => {
            this.axiosInstance.post(url, formData, options).then((res) => resolve(res)).catch(err => resolve(this.handleError(err)));
        });
    }
}