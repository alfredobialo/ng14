import {Implement} from "@angular/cli/lib/config/workspace-schema";

export interface IApiQueryCriteria {
    sortBy?: string;
    pageSize: number,
    currentPage: number,
    query?: string;
}
export interface UserDataModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface ApiResponse {
    success: boolean;
    message: string;
    hasErrors?: boolean;
    errors?: any[];
    code?: number;
}

export interface ApiResponseData<T> extends ApiResponse {
    data: T;
}

export interface PagedApiResponseData<T> extends ApiResponseData<T> {
    pageSize: number,
    currentPage?: number,
    totalRecord: number,
    totalPages?: number,
}
