import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinUsService {

  private apiUrl = '/api/arsii/auth/register';

  constructor(private http: HttpClient) {}

  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJpYXQiOjE2OTU5OTY1MjYsImV4cCI6MTY5NjAwNjYwNn0._rAtc6jyWUaYMynrLbiMUHWfPUKg5e62eDFWLMNNh9s',
    });
    return headers;
  }

  sendFormData(formData: any): Observable<any> {
     
    const headers = this.createRequestOptions();
    return this.http.post(this.apiUrl, formData, { headers });
  }
}
