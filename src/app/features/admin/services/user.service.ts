import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/identity';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`, { headers: this.getAuthHeaders() });
  }

  deleteAdminRole(user: {
    userEmail: string;
    roleName: string;
  }) {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/userRole`, {
      headers,
      body: user
    });
  }
  addAdminRole(user: {
    userEmail: string;
    roleName: string;
  }) {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/userRole`, user, { headers });
  }
}
