import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router'; // Import von RouterModule
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TimeTrackingComponent} from './components/time-tracking/time-tracking.component';
import {OvertimeComponent} from './components/overtime/overtime.component';
import {VacationComponent} from './components/vacation/vacation.component';
import {EmployeeManagementComponent} from './components/employee-management/employee-management.component';
import {ReportsComponent} from './components/reports/reports.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        FormsModule,
        RouterModule,
        DashboardComponent,
        TimeTrackingComponent,
        OvertimeComponent,
        VacationComponent,
        EmployeeManagementComponent,
        ReportsComponent,
        HomeComponent
    ]
})

export class AppComponent implements OnInit {
    title = 'SalesTime - Zeiterfassung';

    constructor(private authService: AuthService, private router: Router) {


    }


    ngOnInit() {
        console.log(this.authService.isAuthenticated())
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/', 'login']);

        }
    }


    /*
    export const routes: Routes = [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'time-tracking', component: TimeTrackingComponent },
      { path: 'overtime', component: OvertimeComponent },
      { path: 'vacation', component: VacationComponent },
      { path: 'employee-management', component: EmployeeManagementComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' }
    ];

    bootstrapApplication(AppComponent, {
      providers: [provideRouter(routes)]
    });
    */
}