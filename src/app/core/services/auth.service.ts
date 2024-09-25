import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoggedInUser, User} from '../models/user.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import {LoadingService} from "./loading.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string =
    'https://sazanowine-api-dev.azurewebsites.net/api/identity';
  private loggedInStatus = new BehaviorSubject<boolean>(this.checkToken());

  constructor(private http: HttpClient, private router: Router, private loadingService: LoadingService) {}

  public registerUser(user: User): Observable<any> {
    this.loadingService.show();
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap({
        next: () => this.loadingService.hide(),
        error: () => this.loadingService.hide()
      })
    );
  }

  public loginUser(user: LoggedInUser): Observable<any> {
    this.loadingService.show();
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap({
        next: (response: any) => {
          this.loadingService.hide();
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.loggedInStatus.next(true);
          }
        },
        error: () => this.loadingService.hide()
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.loggedInStatus.next(false);
    this.router.navigate(['/']);
  }

  public isLoggedIn(): Observable<boolean> {
    return this.loggedInStatus.asObservable();
  }

  public decodeToken(): any {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return decoded;
      } catch (error) {
        console.error('Error decoding token', error);
        return null;
      }
    }
    return null;
  }

  public isTokenExpired(): boolean {
    const decodedToken = this.decodeToken();
    if (decodedToken && decodedToken.exp) {
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      return expirationDate < new Date();
    }
    return true;
  }

  public isUserAdmin(): boolean {
    const decodedToken = this.decodeToken();
    if (decodedToken && Array.isArray(decodedToken.roles)) {
      return decodedToken.roles.includes('Admin');
    }
    return false;
  }

  private checkToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
