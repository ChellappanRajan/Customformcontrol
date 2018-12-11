import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomradiobuttonComponent } from './formComponent/customradiobutton/customradiobutton.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './formComponent/create/create.component';
import { CompositeformComponent } from './component/compositeform/compositeform.component';
import { GeneralComponent } from './component/compositeform/general/general.component';
import { AddressComponent } from './component/compositeform/address/address.component';
import { Learnd3Component } from './component/learningd3/learnd3/learnd3.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomradiobuttonComponent,
    CreateComponent,
    CompositeformComponent,
    GeneralComponent,
    AddressComponent,
    Learnd3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
