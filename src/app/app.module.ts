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
import { CrimeTypesComponent } from './modules/crime-types/crime-types.component';
import { SuspectAccountDetailsComponent } from './modules/suspect-account-details/suspect-account-details.component';
import { ListOfCdrDataComponent } from './modules/list-of-cdr-data/list-of-cdr-data.component';
import { CustomePaginationComponent } from './components/custome-pagination/custome-pagination.component';
import { ListOfCyberBullyComponent } from './modules/list-of-cyber-bully/list-of-cyber-bully.component';
import { ListOfSuspectDataComponent } from './modules/list-of-suspect-data/list-of-suspect-data.component';
import { ListOfSdrDataComponent } from './modules/list-of-sdr-data/list-of-sdr-data.component';
import { ListOfCafFormsComponent } from './modules/list-of-caf-forms/list-of-caf-forms.component';
import { ListOfNcrpComponent } from './modules/list-of-ncrp/list-of-ncrp.component';
import { ListOfSuspectAcDetialsComponent } from './modules/list-of-suspect-ac-detials/list-of-suspect-ac-detials.component';

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
    NavBarComponent,
    CrimeTypesComponent,
    SuspectAccountDetailsComponent,
    ListOfCdrDataComponent,
    CustomePaginationComponent,
    ListOfCyberBullyComponent,
    ListOfSuspectDataComponent,
    ListOfSdrDataComponent,
    ListOfCafFormsComponent,
    ListOfNcrpComponent,
    ListOfSuspectAcDetialsComponent
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
