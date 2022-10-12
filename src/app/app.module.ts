import {NgModule } from  "@angular/core";
import {AppComponent} from "./app.component";
import {LoginPageComponent} from "./shared/components/auth/login-page.component";
import {LoginComponent} from "./shared/components/auth/login-component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserManagerModule} from "./user-manager/userManager.module";
import {ReverseTextComponent} from "./util/reverse-text-component";


@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule, UserManagerModule],
    exports : [],
    providers :[],
    declarations :[AppComponent, LoginPageComponent, LoginComponent, ReverseTextComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
