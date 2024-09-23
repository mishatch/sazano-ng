import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../models/city.model";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  jsonUrl = 'assets/cities/cities.json';
  constructor(private http: HttpClient) { }

  getCities(): Observable<{
    cities: City[]
  }> {
    return this.http.get<{
      cities: City[]
    }>(this.jsonUrl);
  }
}
