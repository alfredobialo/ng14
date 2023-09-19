import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class ApiRequestInterceptor implements HttpInterceptor
{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        
        const header : Headers =  new Headers();
        header.append("Authorization", "Bearer {token-value-goes-here}");
        header.append("Content-Type", "application/json");
        header.append("Accept", "application/json");
        header.append("X-App-Name", "Angular User Client");
        header.append("X-App-Id", "AngularUser-Client");
        const newReq  = req.clone(
            {
                headers : new HttpHeaders(header)
            }
        );
        
        
        console.log("Http Interceptor : ", newReq)
        return next.handle(newReq);
    }
    
}
