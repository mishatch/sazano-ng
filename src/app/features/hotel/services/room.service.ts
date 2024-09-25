import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Room} from "../models/room.interface";
import {LoadingService} from "../../../core/services/loading.service";
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/rooms';

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  public getRooms(): Observable<Room[]> {
    this.loadingService.show();
    return this.http.get<Room[]>(`${this.apiUrl}`).pipe(
      tap({
        next: () => this.loadingService.hide(),
        error: () => this.loadingService.hide()
      })
    );
  }
}
