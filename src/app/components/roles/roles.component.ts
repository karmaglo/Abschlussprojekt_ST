import { Component, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [DatePipe]
})
export class RolesComponent {
  email: string = '';
  password: string = '';
  firstName: string = 'Lisa';
  lastName: string = 'Meier';
  currentDate: string = '';
  isActive: boolean = false;
  inputText: string = 'checkbox';
  inputType: string = 'button'; // button, checkbox, radio, text
  selectedState: string = ''; // active, inactive, unknown

  constructor(private changeDetectorRef: ChangeDetectorRef, private datePipe: DatePipe) {
    this.updateCurrentDate();
  }

  updateCurrentDate() {
    setInterval(() => {
      const date = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
      this.currentDate = date ? date : '';
      this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  showWelcomeAlert() {
    alert('Willkommen ' + this.firstName + ' ' + this.lastName);
  }

  showLoginAlert() {
    alert('Login mit ' + this.email + ' ' + this.password);
  }

  showLogoutAlert() {
    alert('Logout');
  }

  showMessage(message: string) {
    alert(message);
  }
}
