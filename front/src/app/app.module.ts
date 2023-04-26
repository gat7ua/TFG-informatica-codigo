import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CiudadFormComponent } from './components/ciudad-form/ciudad-form.component';
import { CiudadListComponent } from './components/ciudad-list/ciudad-list.component';

import {CiudadService} from './services/ciudad.service';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CiudadFormComponent,
    CiudadListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CiudadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
