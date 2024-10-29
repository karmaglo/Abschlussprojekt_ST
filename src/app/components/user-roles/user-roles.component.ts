import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/services/role.service';  // Corrected path

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  standalone: true,
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  userRole: any;

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getUserRole(1); //  replacing wirh  employee id here
  }

  getUserRole(employeeId: number) {
    this.roleService.getUserRole(employeeId).subscribe(
      (role: any) => { // Explicitly typed
        this.userRole = role;
      },
      (error: any) => { // Explicitly typed
        console.error('Error fetching user role:', error);
      }
    );
  }
}
