import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApiResponse, UserDataModel} from "../models/ApiResponseModel";
import {UserManagerService} from "../services/userManagerService";

@Component({
    selector: 'create-user',
    styles: [`
        div.border-radius
        {
            border-radius: 2.2rem;
        }
    `],
    template: `
        <div class="p-4 mt-4 border border-2 border-radius">
            <h2>Create new User Profile</h2>
            <p class="text-info">Fill the form below to continue</p>
            <div class="alert " 
                 [ngClass]="{'alert-danger' : !serverResponse.success, 'alert-success':serverResponse.success}"
                 *ngIf="initServerCall && !!serverResponse">
                <p class="lead">{{serverResponse.message}}</p>
            </div>
            
            <div class="mt-2 p-4">
                <form name="frmCreateUser" #frmCreateUser="ngForm">
                    <div class="p-2 mb-2">
                        User Id:
                        <input type="text" class="form-control" [(ngModel)]="user.id" 
                               name="id" placeholder="Unique user Identity">
                    </div> 
                    <div class="p-2 mb-2">
                        First Name:
                        <input type="text" class="form-control" [(ngModel)]="user.firstName"
                               name="firstName" placeholder="First Name">
                    </div> 
                    <div class="p-2 mb-2">
                        Last Name:
                        <input type="text" class="form-control" [(ngModel)]="user.lastName"
                               name="lastName" placeholder="Surname ">
                    </div>
                    <div class="p-2 mb-2">
                        Email Address:
                        <input type="text" class="form-control" [(ngModel)]="user.email"
                               name="email" placeholder="User's Email">
                    </div>
                    <div class="p-2 mb-2">
                        <button class="btn btn-primary btn-lg" (click) ="createNewUser($event,frmCreateUser)">Create User</button>
                    </div>
                    
                </form>
            </div>
        </div>
    `
})

export class CreateUserComponent implements OnInit {
    user: any = {};
    serverResponse:ApiResponse = {
        success : false,
        message : "Failed Request"
    } ;
    
    initServerCall  = false;
    constructor(private userService : UserManagerService) {
    }

    ngOnInit() {
    }

    createNewUser(evt :MouseEvent , frm: NgForm) {
       
        console.log(evt , frm.value, frm.controls); 
        this.initServerCall =  true;
        this.userService.createNewUser(frm.value)
            .subscribe( {
                next : value => {
                    this.serverResponse = value;
                },
                error: err => {
                    console.log("Create User Error",err.error);
                    this.serverResponse = err.error;
                },
                complete: ()=>{
                   
                }
            })
    }
}
