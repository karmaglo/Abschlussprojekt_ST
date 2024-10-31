// this file is for the service that will be used to send the time tracking data to the backend.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  private apiUrl = 'http://your-backend-url/record-time';

  constructor(private http: HttpClient) {}

  recordTime(timeData: any): Observable<any> {
    return this.http.post(this.apiUrl, timeData);
  }
}
