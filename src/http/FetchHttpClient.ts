import {IHttpClient} from "./IHttpClient";
import {IRequestHttp} from "./IRequestHttp";

export class FetchHttpClient implements IHttpClient {

    async Get(request: IRequestHttp): Promise<any> {
        const res = await fetch(request.url, {
            method: 'GET',
            headers: request.headers ?? {}
        });
        return res.json();
    }

    async Post(request: IRequestHttp): Promise<any> {
        const res = await fetch(request.url, {
            method: 'POST',
            headers: request.headers ?? {},
            body: JSON.stringify(request.data ?? {})
        });
        return res.json();
    }

    async Delete(request: IRequestHttp): Promise<any> {
        const res = await fetch(request.url, {
            method: 'DELETE',
            headers: request.headers ?? {}
        });
        return res.json();
    }

    async Patch(request: IRequestHttp): Promise<any> {
        const res = await fetch(request.url, {
            method: 'PATCH',
            headers: request.headers ?? {},
            body: JSON.stringify(request.data ?? {})
        });
        return res.json();
    }

    async Put(request: IRequestHttp): Promise<any> {
        const res = await fetch(request.url, {
            method: 'PUT',
            headers: request.headers ?? {},
            body: JSON.stringify(request.data ?? {})
        });
        return res.json();
    }
}