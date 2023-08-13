import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {ApiResponse, ApiResponseData, UserDataModel} from "../models/ApiResponseModel";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class UserManagerService {

    baseUrl = environment.apiBaseUrls.userManager;

    constructor(private httpClient: HttpClient) {
    }

    // get User By Id
    getUserById(userId: string): Observable<ApiResponseData<UserDataModel>> {
        return this.httpClient.get<ApiResponseData<UserDataModel>>(`${this.baseUrl}/${userId}`);
    }
    
    createNewUser(userData :  UserDataModel){
        console.log("Create User with Data", userData);
        const headers = {"Content-Type" : "application/json", "Accept": "application/json"};
        return this.httpClient.post<ApiResponse>(`${this.baseUrl}`, userData, {
            headers
        });
    }
    
    getDevLimitType ()
    {
        return this.httpClient.get("https://api-dev.equitygroupholdings.com/v2/customer-limit/lookup/limit-type")
            .pipe(map(x => {
                console.log("DEV LIMIT TYPE => Check on CORS", x);
                return x;
            }));
    } 
    getUatLimitType ()
    {
        return this.httpClient.get("https://api-uat.equitygroupholdings.com/v2/customer-limit/lookup/limit-type")
            .pipe(map(x => {
            console.log("UAT LIMIT TYPE => Check on CORS", x);
            return x;
        }));;
    }
}
