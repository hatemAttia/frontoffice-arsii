import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'api/arsii/visitor/allMember'; // Remplacez par l'URL de votre API
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTQxOTgyMSwiZXhwIjoxNjk1NDI5OTAxfQ.YYQq2XROq4ScxleJZbKcgyCIGMYvZFiHZVOhYEg1RLA',
    });
    return headers;
  }
  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<User[]> {
    const headers = this.createRequestOptions();
    return this.http.get<User[]>(this.membersUrl, {
      headers: headers,
    });
  }
  getMembers() {
    return this.http.get<any>('assets/members.json')
    .toPromise()
    .then(res => <User[]>res.data)
    .then(data => { return data; });
}
}
