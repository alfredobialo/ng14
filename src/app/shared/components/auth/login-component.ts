// noinspection AngularMissingOrInvalidDeclarationInModule

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthenticatedUserContextService} from './i-current-user-context';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
    standalone: true,
    imports: [CommonModule],
    providers: [AuthenticatedUserContextService, FormBuilder],
    selector: 'login-component',
    template: `
        <div class="login-container">
            <p class="lead mb-4 text-primary">Login to Continue</p>
            <span class="bg-danger p-2 text-white " style="font-size: 0.89rem;">Invalid user name / password combination</span>
            <div class="p-3">
                <form class="form-row" role="form" novalidate>
                    <div class="d-flex flex-column justify-content-start align-items-center">
                        <div class="mb-3">
                            <input type="text" #txtUserId class="form-control form-control-lg" placeholder="User Id / Email">
                        </div>
                        <div class="mb-3">
                            <input type="password" #txtPwd class="form-control form-control-lg" placeholder="Password">
                        </div>
                        <button class="btn btn-primary btn-lg btn-block"
                                (click)="loginUser(txtUserId.value, txtPwd.value)">
                            <div class="spinner-border text-light" *ngIf="processing" role="status">
                            </div>
                            <span class="" *ngIf="processing">&nbsp; Processing...</span>
                            <span *ngIf="!processing">Login</span>
                        </button>
                    </div>

                </form>

            </div>

        </div>
    `,
    styles: [`
        div.login-container {
            border-radius: 10px;
            font-size: 1.3rem;
            width: 27rem;
            min-height: 35rem;
            border: solid 1px #d7d6d6;
            background-color: #ffffff;
            box-shadow: 1px 0px 9px rgba(134, 133, 133, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    `]
})

export class LoginComponent implements OnInit {
    userIdCtrl!: FormControl;
    processing: boolean = false;

    constructor(private frmBuilder: FormBuilder,
                private authService: AuthenticatedUserContextService) {
    }

    ngOnInit() {
        this.userIdCtrl = this.frmBuilder.control({});
    }

    loginUser(userId: string, pwd: string) {
        this.processing = true;
        this.authService.authenticateUser(userId, pwd)
            .subscribe(x => {
                console.log("user authenticated")
            }, err => {
                console.log(err);
            }, () => {
                this.processing = false;
            })
    }
}
