import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./shared/components/auth/login-component";

@Component({
  standalone:true,
  imports :[BrowserModule,ReactiveFormsModule,BrowserAnimationsModule,FormsModule, LoginComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crypto-app';
}
