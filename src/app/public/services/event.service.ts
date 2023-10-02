import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../types/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventsUrl = '/api/arsii/visitor/allEvent';
  private eventUrl = '/api/arsii/visitor/event';
  eventId!: number;
  formationId!: number;

  constructor(private http: HttpClient) {}
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return headers;
  }

  getEvents(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    const url = this.eventsUrl + '/Event';
    return this.http.get<Event[]>(
      url
      //{headers: headers,}
    );
  }

  getEventById(eventId: number): Observable<Event> {
    const url = `${this.eventUrl}/${eventId}`;
    const headers = this.createRequestOptions();

    return this.http.get<Event>(url, { headers });
  }

  getFormations(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    const url = this.eventsUrl + '/Formation';
    return this.http.get<Event[]>(
      url
      // { headers: headers,}
    );
  }

  getFormationById(formationId: number): Observable<Event> {
    const url = `${'/api/arsii/visitor/event/'}${formationId}`;
    const headers = this.createRequestOptions();

    return this.http.get<Event>(url, { headers });
  }
}
