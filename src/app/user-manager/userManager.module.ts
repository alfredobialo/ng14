import {NgModule} from  "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {UserManagerService} from "./services/userManagerService";
import {GetUserDetailsComponent} from "./components/getUserDetails.component";
import {CreateUserComponent} from "./components/createUser.component";


@NgModule({
    providers : [UserManagerService],
    imports : [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations : [GetUserDetailsComponent, CreateUserComponent],
    exports: [GetUserDetailsComponent, CreateUserComponent]
})
export class UserManagerModule{}
