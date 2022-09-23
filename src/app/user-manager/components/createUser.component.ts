import {Component, Input, Output, SimpleChanges, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApiResponse, UserDataModel} from "../models/ApiResponseModel";
import {UserManagerService} from "../services/userManagerService";
import {Subscription} from "rxjs";

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
                        User Id: <span class="fw-bolder" *ngIf="isEditMode">{{user.id}}</span>
                        <input type="text" class="form-control" [(ngModel)]="user.id"
                               [disabled]="processing" name="id" 
                               *ngIf="!isEditMode"
                               placeholder="Unique user Identity">
                    </div> 
                    <div class="p-2 mb-2">
                        First Name:
                        <input type="text" class="form-control" [(ngModel)]="user.firstName"
                              [disabled]="processing" name="firstName" placeholder="First Name">
                    </div> 
                    <div class="p-2 mb-2">
                        Last Name:
                        <input type="text" class="form-control" [(ngModel)]="user.lastName"
                              [disabled]="processing" name="lastName" placeholder="Surname ">
                    </div>
                    <div class="p-2 mb-2">
                        Email Address: <span class="fw-bold">
                        <a  *ngIf="isEditMode" href="mailto:{{user.email}}"></a>
                    </span>
                        <input type="text" class="form-control" [(ngModel)]="user.email"
                              [disabled]="processing" name="email"
                               *ngIf="!isEditMode"
                               placeholder="User's Email">
                    </div>
                    <div class="p-2 mb-2">
                        <button
                                [disabled]="processing"
                                class="btn btn-primary btn-lg" (click) ="createNewUser($event,frmCreateUser)">
                            <span *ngIf="!isEditMode">Create User</span> 
                            <span *ngIf="isEditMode">Update User</span>
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    `
})

export class CreateUserComponent implements OnInit, OnDestroy, OnChanges {
    createUserSubscription$! : Subscription ; 
    updateUserSubscription$! : Subscription ; 
    
    processing : boolean  =false;
    user: any = {};
    @Input() isEditMode = false;
    serverResponse:ApiResponse = {
        success : false,
        message : "Failed Request"
    } ;
    
    initServerCall  = false;
    constructor(private userService : UserManagerService) {
    }

    ngOnChanges(): void {
       
    }

    ngOnDestroy(): void {
        if(this.createUserSubscription$)
        {
            this.createUserSubscription$.unsubscribe();
        }
    }

    ngOnInit() {
    }

    createNewUser(evt :MouseEvent , frm: NgForm) {
       
        console.log(evt , frm.value, frm.controls); 
        this.initServerCall =  true;
        this.processing  = true;
        this.createUserSubscription$ =  this.userService.createNewUser(frm.value)
            .subscribe( {
                next : value => {
                    this.serverResponse = value;
                },
                error: err => {
                    console.log("Create User Error",err.error);
                    this.serverResponse = err.error;
                    this.processing  = false;
                },
                complete: ()=>{
                   this.processing  = false;
                }
            });
    }
}
