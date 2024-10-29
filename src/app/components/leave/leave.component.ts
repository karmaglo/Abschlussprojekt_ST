import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  standalone: true
})
export class LeaveComponent implements OnInit {
  leaveForm!: FormGroup;
  leaveRequests: any[] = []; // service to get leave requests

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.leaveForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      leaveType: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.leaveForm.valid) {
      console.log(this.leaveForm.value);
      // Here you would typically call a service to submit the leave request
      this.leaveRequests.push(this.leaveForm.value);
      this.leaveForm.reset();
    }
  }
}
