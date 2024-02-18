import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ChangePasswordComponent } from './modules/change-password/change-password.component';
import { CreateUserComponent } from './modules/create-user/create-user.component';
import { CDRDataComponent } from './modules/cdr-data/cdr-data.component';
import { AppRoutingModule } from './app-routing.module';
import { CyberBullyDataComponent } from './modules/cyber-bully-data/cyber-bully-data.component';
import { SuspectDataComponent } from './modules/suspect-data/suspect-data.component';
import { CellDataComponent } from './modules/cell-data/cell-data.component';
import { SdrDataComponent } from './modules/sdr-data/sdr-data.component';
import { CafFormsDataComponent } from './modules/caf-forms-data/caf-forms-data.component';
import { RationCardDetailsComponent } from './modules/ration-card-details/ration-card-details.component';
import { MobileHuntDataComponent } from './modules/mobile-hunt-data/mobile-hunt-data.component';
import { DailyCdrRequestsComponent } from './modules/daily-cdr-requests/daily-cdr-requests.component';
import { SocialMediaDataComponent } from './modules/social-media-data/social-media-data.component';
import { CasesInvestigationDataComponent } from './modules/cases-investigation-data/cases-investigation-data.component';
import { SearchMultipleCriteriaDataComponent } from './modules/search-multiple-criteria-data/search-multiple-criteria-data.component';
import { NcrpDataComponent } from './modules/ncrp-data/ncrp-data.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChangePasswordComponent,
    CreateUserComponent,
    CDRDataComponent,
    CyberBullyDataComponent,
    SuspectDataComponent,
    CellDataComponent,
    SdrDataComponent,
    CafFormsDataComponent,
    RationCardDetailsComponent,
    MobileHuntDataComponent,
    DailyCdrRequestsComponent,
    SocialMediaDataComponent,
    CasesInvestigationDataComponent,
    SearchMultipleCriteriaDataComponent,
    NcrpDataComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
