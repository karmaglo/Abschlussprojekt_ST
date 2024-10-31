import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimeTrackingComponent } from './components/time-tracking/time-tracking.component';
import { OvertimeComponent } from './components/overtime/overtime.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LoginComponent } from './components/login/login.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    DashboardComponent,
    TimeTrackingComponent,
    OvertimeComponent,
    VacationComponent,
    EmployeeManagementComponent,
    ReportsComponent
  ]
})
export class AppComponent {
  title = 'SalesTime - Zeiterfassung';
}

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'time-tracking', component: TimeTrackingComponent },
  { path: 'overtime', component: OvertimeComponent },
  { path: 'vacation', component: VacationComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
