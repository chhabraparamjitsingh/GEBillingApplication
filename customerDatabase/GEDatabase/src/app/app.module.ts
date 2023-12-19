import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DatatableComponent } from './datatable/datatable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { RecordDetailComponent } from './record-detail/record-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchbarComponent,
    DatatableComponent,
    RecordDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    FormsModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
