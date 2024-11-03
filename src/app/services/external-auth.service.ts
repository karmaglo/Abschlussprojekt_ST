/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExternalAuthService {
  private apiUrl = 'http://localhost/SalesTimeAPI/auth/jwt_auth.php';

  constructor(private http: HttpClient) {}

  loginWithJWT(jwt: string): Observable<any> {
    return this.http.post(this.apiUrl, { jwt }).pipe(
        tap(response => {
          if (response.success) {
            localStorage.setItem('sessionToken', response.sessionToken);
            localStorage.setItem('employeeId', response.employeeId);
          }
        })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('sessionToken');
  }

  logout() {
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('employeeId');
  }
}
*/
 */