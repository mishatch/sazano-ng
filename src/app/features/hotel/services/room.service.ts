import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/rooms';

  constructor(private http: HttpClient) { }
  getRooms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addRoom(room: any): Observable<any> {
    return this.http.post(this.apiUrl, room);
  }
  deleteRoom(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
