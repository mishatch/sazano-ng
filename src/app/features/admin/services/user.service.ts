import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';
import { finalize } from 'rxjs/operators';
import {LoadingService} from "../../../core/services/loading.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/identity';

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  getUsers(): Observable<User[]> {
    this.loadingService.show();
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  deleteAdminRole(user: { userEmail: string; roleName: string; }) {
    this.loadingService.show();
    return this.http.delete(`${this.apiUrl}/userRole`, {
      body: user
    }).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  addAdminRole(user: { userEmail: string; roleName: string; }) {
    this.loadingService.show();
    return this.http.post(`${this.apiUrl}/userRole`, user).pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}
