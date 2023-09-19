import {Component, OnInit} from '@angular/core';
import {UserManagerService} from "../services/userManagerService";
import {map} from "rxjs/operators";
import {ApiResponse, ApiResponseData, UserDataModel} from "../models/ApiResponseModel";
import {Subscription} from "rxjs";
import {MessageService} from "primeng/api";

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
            <user-info [user-data]="serverResponse.data"></user-info>
        </div>
        
        <p-toast></p-toast>
    `
})

export class GetUserDetailsComponent implements OnInit {

    serverResponse!: ApiResponseData<UserDataModel>;
    loading: boolean = false;
    subscription$!: Subscription;

    constructor(private userManagerService: UserManagerService, private messageService : MessageService) {
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
                error : err =>
                {
                    this.messageService.add( {life: 8000, severity:"error", summary:"There is an Issue:", 
                        detail:err.error.message ?? err.statusText, data:err.error});
                    console.error(err);
                    this.loading = false;
                }
                ,
                complete : () => {
                    this.loading = false;
                    console.log("xhr call completed : Set Loading to false");
                    
                }
            });

        }
    }
}
