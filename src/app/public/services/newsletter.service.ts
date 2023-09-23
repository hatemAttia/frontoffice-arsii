import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private apiUrl = '/api/arsii/newsletter';

  constructor(private http: HttpClient) {}

  sendFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
