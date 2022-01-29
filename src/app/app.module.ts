import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurierHomeComponent } from './components/curier-home/curier-home.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  // {path: 'curier-home', component: CurierHomeComponent},
  // {path: '**', redirectTo: 'main-page', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CurierHomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
