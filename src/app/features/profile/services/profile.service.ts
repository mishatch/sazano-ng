import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/identity';
  private userInfoSource = new BehaviorSubject<any>(null);

  userInfo$ = this.userInfoSource.asObservable();

  constructor(private http: HttpClient) {}

  updateUserInfo(info: {
    name: string;
    surName: string;
    phoneNumber: string;
    email: string;
  }): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.patch(`${this.apiUrl}/updateUser`, info, { headers });
  }

  setUserInfo(info: {
    name: string,
    surName: string,
    phoneNumber: string,
    email: string
  }) {
    this.userInfoSource.next(info);
  }
  clearUserInfo() {
    this.userInfoSource.next(null);
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
