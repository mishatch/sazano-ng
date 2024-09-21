import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/identity';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  deleteAdminRole(user: {
    userEmail: string;
    roleName: string;
  }) {
    return this.http.delete(`${this.apiUrl}/userRole`, {
      body: user
    });
  }
  addAdminRole(user: {
    userEmail: string;
    roleName: string;
  }) {
    return this.http.post(`${this.apiUrl}/userRole`, user);
  }
}
