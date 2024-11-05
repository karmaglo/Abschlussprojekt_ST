
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimeTrackingComponent } from './components/time-tracking/time-tracking.component';
import { OvertimeComponent } from './components/overtime/overtime.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'time-tracking', component: TimeTrackingComponent },
  { path: 'overtime', component: OvertimeComponent },
  { path: 'vacation', component: VacationComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // standard redirect  'home'
  { path: '**', redirectTo: 'home' } ,// Wildcard-Route for all not defined routes
  { path: 'home', component: HomeComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);