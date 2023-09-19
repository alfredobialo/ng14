import {NgModule} from  "@angular/core";
import {UserManagerService} from "./services/userManagerService";
import {GetUserDetailsComponent} from "./components/getUserDetails.component";
import {CreateUserComponent} from "./components/createUser.component";
import {UserUiComponent} from "./components/ui/user-ui.component"
import {SharedModule} from "../shared/shared.module";
import {UserListComponent} from "./components/userList.component";
import {UserInfoComponent} from "./components/user-info.component";

@NgModule({
    providers : [UserManagerService],
    imports : [SharedModule],
    declarations : [GetUserDetailsComponent, CreateUserComponent, UserUiComponent, UserListComponent, UserInfoComponent],
    exports: [GetUserDetailsComponent, CreateUserComponent, SharedModule, UserUiComponent, UserListComponent, UserInfoComponent]
})
export class UserManagerModule{}
