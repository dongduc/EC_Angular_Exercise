import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableServiceService } from './service/table-service.service';
import { UserListComponent } from './user-list/user-list.component';
import { SortPipe } from './pipes/sort.pipe';
import { PhonePipe } from './pipes/phone.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SortPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TableServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
