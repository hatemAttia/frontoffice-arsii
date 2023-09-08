import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = '/api/arsii/event/allevents'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDA3NzMwNCwiZXhwIjoxNjk0MDg3Mzg0fQ._b8q4bbl8awMeJd_QzhfT1B9u46F_2BHpyVh3f6m5yY',
    });
    return headers;
  }

  getEvents(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Event[]>(this.eventsUrl, {
      headers: headers,
    });
  }

}

