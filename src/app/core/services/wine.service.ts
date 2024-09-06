import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Wine} from "../models/wine.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/wines';

  constructor(private http: HttpClient) { }

  addWine(wine: Wine) {
    return this.http.post(`${this.apiUrl}`, wine);
  }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiUrl}`);
  }

  getWineById(id: number): Observable<Wine> {
    return this.http.get<Wine>(`${this.apiUrl}/${id}`);
  }

  updateWine(id: number, wine: Wine): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, wine);
  }

  deleteWine(id: any) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
