import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalToDoListComponent } from './personal-to-do-list/personal-to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalToDoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
