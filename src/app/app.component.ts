import { Component, VERSION } from '@angular/core';
import {UserDataModel} from "./user-manager/models/ApiResponseModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng14';
  version = VERSION.full;
    selectedUser!: UserDataModel;
}
