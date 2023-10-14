import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = '/api/arsii/visitor/sendEmail';

  constructor(private http: HttpClient) {}

  sendFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
