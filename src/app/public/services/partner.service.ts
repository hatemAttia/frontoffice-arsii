import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../types/partner';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  private partnersUrl = 'api/arsii/visitor/allPartner';
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTQ2ODY1MCwiZXhwIjoxNjk1NDc4NzMwfQ.RKi1iAitW1k3WtQQACyiUT9aLN-FYAikvC2b0xziqW4',
    });
    return headers;
  }
  constructor(private http: HttpClient) {}

  getPartners(): Observable<Partner[]> {
    // const headers = this.createRequestOptions();
    return this.http.get<Partner[]>(this.partnersUrl, {
      // headers: headers,
    });
  }
}
