import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService]
})
export class LoginComponent {
  email: string = ''; // Variable to store the email input
  password: string = ''; // Variable to store the password input

  constructor(private authService: AuthService, private router: Router) {}

  // Method to handle form submission
  onSubmit() {
    // Call the login method from AuthService and subscribe to the response
    this.authService.login(this.email, this.password).subscribe(
      (response: { loginState: string }) => {
        // Update the login state in AuthService
        this.authService.loginState = response.loginState;
        console.log('Login', response.loginState);

        // Navigate to the dashboard if login is successful
        if (response.loginState === 'LOGGED_IN') {
          this.router.navigate(['/dashboard']);
          alert('Login successful');
        } else {
          // Show an alert if login fails
          alert('Login failed');
        }
      },
      (error) => {
        // Handle any errors that occur during login
        console.error('Login error', error);
        alert('An error occurred during login.');
      }
    );
  }
}