import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {ApiResponse, UserDataModel} from "../models/ApiResponseModel";
import {Observable} from "rxjs";

@Injectable()
export class UserManagerService {

    baseUrl = environment.apiBaseUrls.userManager;

    constructor(private httpClient: HttpClient) {
    }

    // get User By Id
    getUserById(userId: string): Observable<ApiResponse<UserDataModel>> {
        return this.httpClient.get<ApiResponse<UserDataModel>>(`${this.baseUrl}/${userId}`);
    }
}
