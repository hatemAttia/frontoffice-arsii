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
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTk5NjI5OCwiZXhwIjoxNjk2MDA2Mzc4fQ.V8apgj5IXcijLsPgiH5zoNXdXf5SSEXxkx6lndPv_90',
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
