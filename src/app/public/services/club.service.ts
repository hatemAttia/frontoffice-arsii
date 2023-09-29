import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../types/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private clubsUrl = '/api/arsii/admin/club/allclub';

  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NjAxMjg1OSwiZXhwIjoxNjk2MDIyOTM5fQ.NVRDoqwuLHecKlMcjGZJZnRO6NXLuJPKjRnOLFiMj_0',
    });
    return headers;
  }
  getAllClubs(): Observable<Club[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Club[]>(this.clubsUrl, {
      headers: headers,
    });
  }
  constructor(private http: HttpClient) {}
}
