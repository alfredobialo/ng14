

    export interface UserDataModel {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    }

    export interface ApiResponse<T> {
        data: T;
        success: boolean;
        message: string;
        hasErrors: boolean;
        errors: any[];
        code: number;
    }
    
