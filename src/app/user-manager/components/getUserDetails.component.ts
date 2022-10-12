import {Component, OnInit} from '@angular/core';
import {UserManagerService} from "../services/userManagerService";
import {map} from "rxjs/operators";
import {ApiResponse, ApiResponseData, UserDataModel} from "../models/ApiResponseModel";
import {Subscription} from "rxjs";

@Component({
    selector: 'user-details',
    template: `
        <h3>User Details</h3>
        <div class="panel p-5 mt-3">
            <p-progressSpinner *ngIf="loading"></p-progressSpinner>
            <p>Enter User Id</p>
            <input type="text"
                   [disabled]="loading"
                   class="form-control" #txtUserId name="txtUserId">

            <button
                    [disabled]="loading"
                    (click)="getUserDetails(txtUserId)" class="btn-primary btn btn-lg mt-3">Get User
            </button>
        </div>
        <div class="bg-info p2" *ngIf="loading"></div>
        <div class="p-5 mt-5 border border-dark">
            <p class="lead">Response from Server</p>
            <hr>
            <div *ngIf="serverResponse?.success">
                <h2>Name : {{serverResponse.data.firstName}} {{serverResponse.data.lastName}} </h2>
                <h4>User Id :  {{serverResponse.data.id}}</h4>
                <p class="text-muted">Email: <a [href]="'mailto:'+serverResponse.data.email">{{serverResponse.data.email}}</a></p>
            </div>
        </div>
    `
})

export class GetUserDetailsComponent implements OnInit {

    serverResponse!: ApiResponseData<UserDataModel>;
    loading: boolean = false;
    subscription$!: Subscription;

    constructor(private userManagerService: UserManagerService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe();
    }

    getUserDetails(txtUserId: HTMLInputElement) {
        const id = txtUserId.value;
        if (id !== "") {
            this.loading = true;
            // hit the server
            const http = this.userManagerService.getUserById(id)
                .pipe(map(x => {
                    console.log("get User Detail Response  : ", x);
                    return x;
                }));
            this.subscription$ = http.subscribe( {
                next : (data) => {
                    this.serverResponse  = data;
                },
                error : err => console.error(err),
                complete : () => {
                    console.log("xhr call completed");
                    this.loading = false;
                }
            });

        }
    }
}
