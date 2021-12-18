import { LoginComponent } from './modules/login/login.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule, // RIGHT HERE
  ],
  declarations: [AppComponent, LoginComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
