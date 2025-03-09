import {IRequestHttp} from "./IRequestHttp";

export abstract class IHttpClient {
    // @formatter:off
    abstract Get(request:IRequestHttp): Promise<any>
    abstract Post(request:IRequestHttp): Promise<any>;
    abstract Delete(request:IRequestHttp): Promise<any>;
    abstract Patch(request:IRequestHttp): Promise<any>;
    abstract Put(request:IRequestHttp): Promise<any>;
    // @formatter:on
}
