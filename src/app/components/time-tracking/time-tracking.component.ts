import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-time-tracking',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.css']
})
export class TimeTrackingComponent {
  private startTime: Date;
  private endTime: Date;

  constructor(private http: HttpClient) {
    this.startTime = new Date();
    this.endTime = new Date();
  }

  startTimer() {
    this.startTime = new Date();
    // Timer logic implementation
  }

  stopTimer() {
    this.endTime = new Date();
    const timeData = {
      user_id: 1, // Replace with actual user ID
      start_time: this.startTime,
      end_time: this.endTime,
      task: 'Task description', // Replace with actual task description
      description: 'Detailed description' // Replace with actual description
    };

    this.http.post('http://localhost/sales_time/record-time', timeData)
      .subscribe(response => {
        console.log('Time tracking data sent to backend', response);
      }, error => {
        console.error('Error sending time tracking data', error);
      });
  }
}