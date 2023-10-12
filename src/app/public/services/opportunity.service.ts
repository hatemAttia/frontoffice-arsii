import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunity } from '../types/opportunity';

@Injectable({
  providedIn: 'root',
})
export class OpportunityService {
  private opportunitiesUrl = '/api/arsii/visitor/allOportunity';
  opportunityId!: number;

  constructor(private http: HttpClient) {}
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
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
    const url = this.opportunitiesUrl+'/'+opportunityId;
    const headers = this.createRequestOptions();

    return this.http.get<Opportunity>(url, { headers });
  }
}
