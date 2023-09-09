import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../types/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'api/arsii/member'; // Remplacez par l'URL de votre API
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDA3NzMwNCwiZXhwIjoxNjk0MDg3Mzg0fQ._b8q4bbl8awMeJd_QzhfT1B9u46F_2BHpyVh3f6m5yY',
    });
    return headers;
  }
  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Member[]>(this.membersUrl, {
      headers: headers,
    });
  }
}
