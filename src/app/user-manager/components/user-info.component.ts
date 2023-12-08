import {Component, OnInit, Input} from '@angular/core';
import {UserDataModel} from "../models/ApiResponseModel";

@Component({
    selector: 'user-info',
    template: `<div class="p-5 border-light">
        <h4>Name : {{data.firstName}} {{data.lastName}} </h4>
        <h5>User Id :  {{data.id}}</h5>
        <p class="text-muted">Email: {{data.email}}<a [href]="'mailto:'+data.email" target="_blank"><span class="p-confirm-popup-icon"></span></a></p>
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
