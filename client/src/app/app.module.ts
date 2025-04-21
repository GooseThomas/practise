import {Inject, Injectable, InjectionToken, NgModule, Optional} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from './app.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routes';
import {GuardComponent} from './guard-component/guard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    GuardComponent,


  ],
  bootstrap:[AppComponent]
 // providers: [{ provide: ENVIRONMENT, useValue: environment }],
 // providers: [{ provide: ENVIRONMENT, useValue: environment }],

})
export class AppModule {
}
