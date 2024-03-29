import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { ChangePasswordComponent } from './modules/change-password/change-password.component';
import { CreateUserComponent } from './modules/create-user/create-user.component';
import { CDRDataComponent } from './modules/cdr-data/cdr-data.component';
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
import { CrimeTypesComponent } from './modules/crime-types/crime-types.component';
import { SuspectAccountDetailsComponent } from './modules/suspect-account-details/suspect-account-details.component';
import { ListOfCdrDataComponent } from './modules/list-of-cdr-data/list-of-cdr-data.component';
import { ListOfSuspectDataComponent } from './modules/list-of-suspect-data/list-of-suspect-data.component';
import { ListOfSuspectAcDetialsComponent } from './modules/list-of-suspect-ac-detials/list-of-suspect-ac-detials.component';
import { ListOfSdrDataComponent } from './modules/list-of-sdr-data/list-of-sdr-data.component';
import { ListOfNcrpComponent } from './modules/list-of-ncrp/list-of-ncrp.component';
import { ListOfCyberBullyComponent } from './modules/list-of-cyber-bully/list-of-cyber-bully.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'change-password' , component: ChangePasswordComponent},
  { path: 'create-user' , component: CreateUserComponent},
  { path: 'cdr-data' , component: CDRDataComponent},
  { path: 'cyber-bully' , component: CyberBullyDataComponent},
  { path: 'suspect-data' , component: SuspectDataComponent},
  { path: 'cell-data' , component: CellDataComponent},
  { path: 'sdr-data' , component: SdrDataComponent},
  { path: 'caf-forms' , component: CafFormsDataComponent},
  { path: 'ration-card' , component: RationCardDetailsComponent},
  // { path: 'mobile-hunt' , component: MobileHuntDataComponent},
  { path: 'cdr-requests' , component: DailyCdrRequestsComponent},
  // { path: 'social-media' , component: SocialMediaDataComponent},
  // { path: 'cases-check' , component: CasesInvestigationDataComponent},
  // { path: 'search-criteria' , component: SearchMultipleCriteriaDataComponent},
  { path: 'ncrp-data' , component: NcrpDataComponent},
  { path: 'crime-types' , component: CrimeTypesComponent},
  { path: 'suspect-acc-data' , component: SuspectAccountDetailsComponent},
  { path: 'list-of-cdr-data', component: ListOfCdrDataComponent},
  { path: 'list-of-suspect-data', component: ListOfSuspectDataComponent},
  { path: 'list-of-suspect-ac-detials', component: ListOfSuspectAcDetialsComponent},
  { path: 'list-of-sdr-data', component: ListOfSdrDataComponent},
  { path: 'list-of-ncrp', component: ListOfNcrpComponent},
  { path: 'list-of-cyber-bully', component: ListOfCyberBullyComponent},
  { path: 'list-of-caf-forms', component: ListOfCyberBullyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
