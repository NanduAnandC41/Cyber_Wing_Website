import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { ChangePasswordComponent } from './modules/change-password/change-password.component';
import { CreateUserComponent } from './modules/create-user/create-user.component';
import { CDRDataComponent } from './modules/cdr-data/cdr-data.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'change-password' , component: ChangePasswordComponent},
  { path: 'create-user' , component: CreateUserComponent},
  { path: 'CDR-data' , component: CDRDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
