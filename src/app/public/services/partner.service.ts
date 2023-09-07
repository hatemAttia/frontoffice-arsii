import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../types/partner';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  private partnersUrl = 'api/arsii/admin/category'; // Remplacez par l'URL de votre API
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDA3NzMwNCwiZXhwIjoxNjk0MDg3Mzg0fQ._b8q4bbl8awMeJd_QzhfT1B9u46F_2BHpyVh3f6m5yY',
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
