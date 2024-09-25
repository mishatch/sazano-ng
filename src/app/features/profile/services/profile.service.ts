import { Injectable } from '@angular/core';
import {BehaviorSubject, tap} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {LoadingService} from "../../../core/services/loading.service";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/identity';
  private userInfoSource = new BehaviorSubject<any>(null);

  public userInfo$ = this.userInfoSource.asObservable();

  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  public updateUserInfo(info: {
    name: string;
    surName: string;
    phoneNumber: string;
    email: string;
  }) {
    this.loadingService.show();
    return this.http.patch(`${this.apiUrl}/updateUser`, info).pipe(
      tap({
        next: () => this.loadingService.hide(),
        error: () => this.loadingService.hide()
      })
    );
  }

  public setUserInfo(info: {
    name: string,
    surName: string,
    phoneNumber: string,
    email: string
  }) {
    this.userInfoSource.next(info);
  }

  public clearUserInfo() {
    this.userInfoSource.next(null);
  }
}
