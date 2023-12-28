import {Component, EventEmitter, OnInit, Output, Signal, signal} from '@angular/core';
import {UserManagerService} from "../services/userManagerService";
import {IApiQueryCriteria, PagedApiResponseData, UserDataModel} from "../models/ApiResponseModel";
import {map} from "rxjs/operators";
import {MessageService} from "primeng/api";
import {PaginatorState} from "primeng/paginator";

@Component({
    selector: 'user-list-component',
    styles:[`
        div.user-list {
            background-color: #2c2a2a;
            border-radius: 7px;
            box-shadow: 1px 1px 19px #4d4d4c;
            transition: all 400ms;
            cursor: pointer;
        }

        div.user-list:hover, .user-list:focus, div.user-selected {
            background-color: #b72278;
            color: white;
            box-shadow: 1px -1px 14px #3a3939;
        }

        div.user-list p.header, div.user-list span.header {
            font-size: 18px;
            padding: 0.3rem
        }
    `],
    template: `
        <div class="p-3">
            <p class="lead text-muted">User List</p>
            <div class="mt-4">
                <div class="row">
                    <div class="col-12">
                        <div class="div p-1">
                            <input type="text" #txtInput (keyup.enter)="searchUsers(txtInput)" class="form-control"
                                   placeholder="Search Users">
                            <ng-container class="mt-2" *ngIf="response?.success">
                                Page :{{response?.currentPage}} of {{response?.totalPages}} ( {{response?.totalRecord | number}} Items )
                                <div *ngFor="let d of response.data" [ngClass]="{'user-selected' : d.id === selectedUser?.id}" 
                                     class="user-list mb-2 p-3" (click)="setSelectedItem(d)">
                                    <p class="header text-light">{{d.firstName}} {{d.lastName}}</p>
                                    <span ><a href="mailto:{{d.email}}" class="link-light link-offset-1-hover">{{d.email}}</a></span>
                                </div>
                                
                                <div class="mt-2">
                                    <p-paginator [rows]="response.pageSize" [totalRecords]="response.totalRecord" (onPageChange)="gotoPage($event, txtInput)" ></p-paginator>
                                </div>
                            </ng-container>

                        </div>
                    </div>
                </div>
            </div>
            <p-toast></p-toast>
        </div>`
})

export class UserListComponent implements OnInit {

    count = signal<number>(0);
    response!: PagedApiResponseData<UserDataModel[]>;
    selectedUser!: UserDataModel;
    @Output() onUserSelected : EventEmitter<UserDataModel>  = new EventEmitter<UserDataModel>();
    initValue : PagedApiResponseData<UserDataModel[]> =  {
        pageSize : 5,
        totalRecord :10,
        success : false,
        message : "No Data",
        data : []
    };
    loading: boolean  = false;

    constructor(private userService: UserManagerService, private messageService: MessageService) {
    }

    ngOnInit() {
        this.getUserList();
    }

    searchUsers(txtInput: HTMLInputElement) {
        this.messageService.add({
            life: 4000, 
            detail: "You've pressed a key: ",
            summary:txtInput.value,
            severity:"success"
        });
        
        this.getUserList(txtInput.value, this?.response?.currentPage ?? 1);
    }

    increaseCounter() {
        this.count.update(x => x = x + 1);
    }

    getUserList(query: string = "", curPage: number = 1) {
        const criteria: IApiQueryCriteria = {
            query: query,
            pageSize: 6,
            currentPage: curPage,
            sortBy: "name asc"
        };

        this.loading = true;
        this.userService.getUsers(criteria)
            .pipe(map(x => {
                console.log(x);
                return x;
            }))
            .subscribe(
                {
                    next: x => this.response = x,
                    error: err => console.log(err),
                    complete : () => {
                        console.log("REQUEST COMPLETE, Stop all Progress Status");
                        this.loading = false;
                    }
                }
            );
        
    }

    gotoPage($event: PaginatorState,txtInput: HTMLInputElement) {
        console.log("OnPageChange()",$event, txtInput.value)
        this.getUserList(txtInput.value, $event.page??+1);
    }

    setSelectedItem(d: UserDataModel) {
        this.selectedUser = d;
        //event event to listeners
        this.onUserSelected.emit(d);
    }
}
