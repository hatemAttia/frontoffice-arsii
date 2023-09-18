import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../types/partner';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  private partnersUrl = 'api/arsii/admin/partner';
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDc5NzE0MSwiZXhwIjoxNjk0ODA3MjIxfQ.Mn2okXg_nIkEAR_MGNzwyVUNJsYoB2nlnFOxFYOW-JI',
    });
    return headers;
  }
  constructor(private http: HttpClient) {}

  getPartners(): Observable<Partner[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Partner[]>(this.partnersUrl, {
      headers: headers,
    });
  }
}
