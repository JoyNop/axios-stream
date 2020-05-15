import { AxiosRequestConfig } from "axios";
export interface AxiosStreamStatic {
    download(downFileName: string, extensionName: string, axiosConfig: AxiosRequestConfig): void;
    // Cancel: CancelStatic;
    // CancelToken: CancelTokenStatic;
    // isCancel(value: any): boolean;
    // all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
    // spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
}

declare const AxiosStream: AxiosStreamStatic;

export default AxiosStream;



