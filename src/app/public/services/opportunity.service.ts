import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunity } from '../types/opportunity';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private opportunitiesUrl = '/api/arsii/admin/opportunity';
  opportunityId!: number;


  constructor(private http: HttpClient) { }
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTQ2ODY1MCwiZXhwIjoxNjk1NDc4NzMwfQ.RKi1iAitW1k3WtQQACyiUT9aLN-FYAikvC2b0xziqW4',
    });
    return headers;
  }

  getOpportunities(): Observable<Opportunity[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Opportunity[]>(this.opportunitiesUrl, {
      headers: headers,
    });
  }

  getOpportunityById(opportunityId: number): Observable<Opportunity> {
    const url = `${this.opportunitiesUrl}/${opportunityId}`; 
    const headers = this.createRequestOptions();

    return this.http.get<Opportunity>(url, { headers });
  }
}
