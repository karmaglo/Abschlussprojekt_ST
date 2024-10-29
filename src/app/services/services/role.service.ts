import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private apiService: ApiService) {}

  getUserRole(employeeId: number) {
    return this.apiService.get(`employees/${employeeId}/role`);
  }

  hasPermission(employeeId: number, permission: string) {
    return this.apiService.get(`employees/${employeeId}/permissions/${permission}`);
  }
}
