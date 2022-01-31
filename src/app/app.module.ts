import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurierHomeComponent } from './components/curier-home/curier-home.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { QuestionModalComponent } from './components/question-modal/question-modal.component';
import { DeliveriesListComponent } from './components/deliveries-list/deliveries-list.component';
import { DeliveryDetailsComponent } from './components/delivery-details/delivery-details.component';


const routes: Routes = [
  {path: 'curier-home', component: CurierHomeComponent},
  {path: 'deliveries-list', component: DeliveriesListComponent},
  {path: '**', redirectTo: 'curier-home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CurierHomeComponent,
    HeaderComponent,
    QuestionModalComponent,
    DeliveriesListComponent,
    DeliveryDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
