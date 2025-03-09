import {IData} from "../data/IData";


export interface IRequestHttp {
    url: string;
    data?: IData;
    headers?: IData;
}