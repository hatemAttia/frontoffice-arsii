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
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTQ2ODY1MCwiZXhwIjoxNjk1NDc4NzMwfQ.RKi1iAitW1k3WtQQACyiUT9aLN-FYAikvC2b0xziqW4',
    });
    return headers;
  }

  sendFormData(formData: any): Observable<any> {
     
    const headers = this.createRequestOptions();
    return this.http.post(this.apiUrl, formData, { headers });
  }
}
