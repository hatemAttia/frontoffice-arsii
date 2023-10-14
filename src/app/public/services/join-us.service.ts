import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinUsService {

  private apiUrl = '/api/arsii/auth/register';
  private usedUserNames: string[] = [];
  private usedEmails: string[] = [];

  constructor(private http: HttpClient) {}

  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      });
    return headers;
  }

  sendFormData(formData: any): Observable<any> {
     
    const headers = this.createRequestOptions();
    return this.http.post(this.apiUrl, formData, { headers });
  }

  isUserNameUnique(userName: string): boolean {
    return !this.usedUserNames.includes(userName);
  }

  isEmailUnique(email: string): boolean {
    return !this.usedEmails.includes(email);
  }

  addUser(userName: string, email: string): void {
    this.usedUserNames.push(userName);
    this.usedEmails.push(email);
  }
}
