import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../types/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = '/api/arsii/event/allevents'; // Remplacez par l'URL de votre API
  private eventUrl = '/api/arsii/event/{{ eventId }}'

  constructor(private http: HttpClient) { }
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDUzODMxNiwiZXhwIjoxNjk0NTQ4Mzk2fQ.nnlUo4Z2vQmN67mccY6Rf2ugPOPyV_lmtC3xQ2S3xM8',
    });
    return headers;
  }

  getEvents(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Event[]>(this.eventsUrl, {
      headers: headers,
    });
  }

  getEventById(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Event[]>(this.eventUrl, {
      headers: headers,
    });
  }

}

