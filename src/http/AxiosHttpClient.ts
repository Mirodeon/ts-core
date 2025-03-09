import axios, {AxiosRequestConfig} from "axios";
import {IHttpClient} from "./IHttpClient";
import {IRequestHttp} from "./IRequestHttp";

export class AxiosHttpClient implements IHttpClient {

    async Get(request: IRequestHttp): Promise<any> {
        let config: AxiosRequestConfig = {
            headers: request.headers ?? {}
        }
        const res = await axios.get(request.url, config);
        return res.data;
    }

    async Post(request: IRequestHttp): Promise<any> {
        let config: AxiosRequestConfig = {
            headers: request.headers ?? {}
        }
        const res = await axios.post(request.url, request.data ?? {}, config);
        return res.data;
    }

    async Delete(request: IRequestHttp): Promise<any> {
        let config: AxiosRequestConfig = {
            headers: request.headers ?? {}
        }
        const res = await axios.delete(request.url, config);
        return res.data;
    }

    async Patch(request: IRequestHttp): Promise<any> {
        let config: AxiosRequestConfig = {
            headers: request.headers ?? {}
        }
        const res = await axios.patch(request.url, request.data ?? {}, config);
        return res.data;
    }

    async Put(request: IRequestHttp): Promise<any> {
        let config: AxiosRequestConfig = {
            headers: request.headers ?? {}
        }
        const res = await axios.put(request.url, request.data ?? {}, config);
        return res.data;
    }

}
