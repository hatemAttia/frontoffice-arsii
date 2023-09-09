import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../types/event';

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
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDIxNTgwNSwiZXhwIjoxNjk0MjI1ODg1fQ.kXWHazvebXIEPSpDE5oBt1f8rdfel1Qldf1trCzD5mg',
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

