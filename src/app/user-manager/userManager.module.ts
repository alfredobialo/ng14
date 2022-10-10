import {NgModule} from  "@angular/core";
import {UserManagerService} from "./services/userManagerService";
import {GetUserDetailsComponent} from "./components/getUserDetails.component";
import {CreateUserComponent} from "./components/createUser.component";
import {UserUiComponent} from "./components/ui/user-ui.component"
import {SharedModule} from "../shared/shared.module";

@NgModule({
    providers : [UserManagerService],
    imports : [SharedModule],
    declarations : [GetUserDetailsComponent, CreateUserComponent, UserUiComponent],
    exports: [GetUserDetailsComponent, CreateUserComponent, SharedModule, UserUiComponent]
})
export class UserManagerModule{}
