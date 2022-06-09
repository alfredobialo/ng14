import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from "@angular/platform-browser";
import { environment } from './environments/environment';
import {AppComponent} from "./app/app.component";
import {HttpClientModule} from "@angular/common/http";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers : [importProvidersFrom(HttpClientModule)]
})
  .catch(err => console.error(err));
