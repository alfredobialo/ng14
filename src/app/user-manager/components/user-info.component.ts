import {Component, OnInit, Input} from '@angular/core';
import {UserDataModel} from "../models/ApiResponseModel";

@Component({
    selector: 'user-info',
    template: `<div class="p-5 border-light">
        <h2>Name : {{data.firstName}} {{data.lastName}} </h2>
        <h4>User Id :  {{data.id}}</h4>
        <p class="text-muted">Email: <a [href]="'mailto:'+data.email">{{data.email}}</a></p>
    </div>`
})

export class UserInfoComponent implements OnInit {

    @Input({required: true, alias: "user-data"})
    data!: UserDataModel;
    constructor() {
    }

    ngOnInit() {
    }
}
