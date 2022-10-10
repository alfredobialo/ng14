import {NgModule} from '@angular/core';
import {AppUiModule} from "./app-ui.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [AppUiModule, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
    exports: [AppUiModule,CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
    providers: [],
})
export class SharedModule {
}
