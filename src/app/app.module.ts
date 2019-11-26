import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CRUDOperationsComponent } from './crud-operations/crud-operations.component';
import { CRUDInputComponent } from './crud-input/crud-input.component';
import { CRUDListComponent } from './crud-list/crud-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CRUDOperationsComponent,
    CRUDInputComponent,
    CRUDListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

