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
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDQzODAxMiwiZXhwIjoxNjk0NDQ4MDkyfQ.Zi-X4aVZ1EWyKrXVWkcyU_h21dERc0ftEBR6UGMNLa4',
    });
    return headers;
  }
  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<Member[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Member[]>(this.membersUrl, {
      headers: headers,
    });
  }
  getMembers() {
    return this.http.get<any>('assets/members.json')
    .toPromise()
    .then(res => <Member[]>res.data)
    .then(data => { return data; });
}
}
