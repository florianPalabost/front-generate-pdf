import axios, { AxiosError } from 'axios';
import { ToastService } from './ToastService';

type Id = string | number;

export class ApiService {
    readonly baseUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/';

    toastService: ToastService;
    private static _instance: ApiService | null = null;

    private constructor() {
        this.toastService = ToastService.getInstance();
    }

    public static getInstance(): ApiService {
        return this._instance ?? new this();
    }

    async get<Type>(subPath: string, useBaseUrl = true): Promise<Type | null> {
        const response = await axios
            .get<Type>(useBaseUrl ? this.baseUrl + subPath : subPath)
            .catch((error: AxiosError) => {
                console.error('error', error);
                this.toastService.error('Api call error: ' + error.message);
            });

        if (response?.data) {
            return response.data;
        }

        return null;
    }

    async post<Type>(subPath: string, newItem: Type): Promise<unknown> {
        return await axios.post<Type>(this.baseUrl + subPath, newItem);
    }

    async put<Type>(subPath: string, updatedItem: Type): Promise<unknown> {
        return await axios.put(this.baseUrl + subPath, updatedItem);
    }

    async delete<Type>(subPath: string): Promise<unknown> {
        return await axios.delete<Type>(this.baseUrl + subPath);
    }
}
