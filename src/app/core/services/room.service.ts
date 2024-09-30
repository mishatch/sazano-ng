import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Room} from "../models/room/room.interface";
import {LoadingService} from "./loading.service";
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/rooms';

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  public addRoom(room: Room): Observable<Room> {
    this.loadingService.show();
    return this.http.post<Room>(`${this.apiUrl}`, room).pipe(
      tap({
        next: () => this.loadingService.hide(),
        error: () => this.loadingService.hide()
      })
    );
  }

  public getRooms(): Observable<Room[]> {
    this.loadingService.show();
    return this.http.get<Room[]>(`${this.apiUrl}`).pipe(
      tap({
        next: () => this.loadingService.hide(),
        error: () => this.loadingService.hide()
      })
    );
  }

  public getRoomById(id: number): Observable<Room> {
    this.loadingService.show();
    return this.http.get<Room>(`${this.apiUrl}/${id}`).pipe(
      tap({
        next: () => this.loadingService.hide(),
        error: () => this.loadingService.hide()
      })
    );
  }

  public updateRoom(id: number, room: Room): Observable<Room> {
    this.loadingService.show();
    return this.http.patch<Room>(`${this.apiUrl}/${id}`, room).pipe(
      tap({
        next: () => this.loadingService.hide(),
        error: () => this.loadingService.hide(),
      })
    );
  }

  public deleteRoom(id: number): Observable<void> {
    this.loadingService.show();
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap({
        next: () => this.loadingService.hide(),
        error: () => this.loadingService.hide()
      })
    );
  }
}
