import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Wine } from "../models/wine.model";
import { Observable } from "rxjs";
import { LoadingService } from './loading.service';  // Make sure to import the LoadingService
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api/wines';

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  addWine(wine: Wine): Observable<Wine> {
    this.loadingService.show();
    return this.http.post<Wine>(`${this.apiUrl}`, wine).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  getWines(): Observable<Wine[]> {
    this.loadingService.show();
    return this.http.get<Wine[]>(`${this.apiUrl}`).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  getWineById(id: number): Observable<Wine> {
    this.loadingService.show();
    return this.http.get<Wine>(`${this.apiUrl}/${id}`).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  updateWine(id: number, wine: Wine): Observable<any> {
    this.loadingService.show();
    return this.http.patch(`${this.apiUrl}/${id}`, wine).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  deleteWine(id: any): Observable<any> {
    this.loadingService.show();
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}
