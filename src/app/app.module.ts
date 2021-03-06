import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurierHomeComponent } from './components/curier-home/curier-home.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { QuestionModalComponent } from './components/question-modal/question-modal.component';
import { DeliveriesListComponent } from './components/deliveries-list/deliveries-list.component';
import { DeliveryDetailsComponent } from './components/delivery-details/delivery-details.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { DeliverySummaryComponent } from './components/delivery-summary/delivery-summary.component';
import { FailSuccessModalComponent } from './components/fail-success-modal/fail-success-modal.component';


const routes: Routes = [
  {path: 'curier-home', component: CurierHomeComponent},
  {path: 'deliveries-list', component: DeliveriesListComponent},
  {path: 'delivery-details', component: DeliveryDetailsComponent},
  {path: 'vehicles-list', component: VehiclesListComponent},
  {path: 'delivery-summary', component: DeliverySummaryComponent},
  {path: '**', redirectTo: 'curier-home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CurierHomeComponent,
    HeaderComponent,
    QuestionModalComponent,
    DeliveriesListComponent,
    DeliveryDetailsComponent,
    VehiclesListComponent,
    DeliverySummaryComponent,
    FailSuccessModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
