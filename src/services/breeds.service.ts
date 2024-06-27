import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})

export class BreedsService {
  private baseUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getBreedsList(search: string): Observable<TDogBreed[]> {
    let searchParams = new HttpParams();

    searchParams = searchParams.set('q', search);
    searchParams = searchParams.set('limit', '10');

    return this.http.get<TDogBreed[]>(`${this.baseUrl}/breeds/search?${search}`, {
      params: searchParams,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey
      }
    })
  }
}
