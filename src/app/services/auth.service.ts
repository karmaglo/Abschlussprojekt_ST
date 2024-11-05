import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private apiURL = 'http://localhost/SalesTimeAPI/login.php'; // URL corrected
loginState = 'GUEST'

 constructor(private http: HttpClient) {}

 login(username: string, password: string): Observable<any> {
  return this.http.post<any>(this.apiURL, { username, password }, { withCredentials: true });
 }

 isAuthenticated(): boolean {
  return document.cookie.includes('PHPSESSID') && this.loginState==='LOGGED_IN';

 }
}
