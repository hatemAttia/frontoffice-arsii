import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../types/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formationsUrl = '/api/arsii/visitor/allFormation';
  formationId!: number;


  constructor(private http: HttpClient) { }
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTQxOTgyMSwiZXhwIjoxNjk1NDI5OTAxfQ.YYQq2XROq4ScxleJZbKcgyCIGMYvZFiHZVOhYEg1RLA',
    });
    return headers;
  }

  getFormations(): Observable<Formation[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Formation[]>(this.formationsUrl, {
      headers: headers,
    });
  }

  getFormationById(formationId: number): Observable<Formation> {
    const url = `${this.formationsUrl}/${formationId}`; 
    const headers = this.createRequestOptions();

    return this.http.get<Formation>(url, { headers });
  }

}
