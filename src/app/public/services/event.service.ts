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
    const url = this.eventsUrl + '/Event';
    return this.http.get<Event[]>(
      url
    );
  }

  getEventById(eventId: number): Observable<Event> {
    const url = this.eventUrl +'/'+eventId;
    return this.http.get<Event>(url);
  }

  getFormations(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    const url = this.eventsUrl + '/Formation';
    return this.http.get<Event[]>(
      url
    );
  }

  // getFormationById(formationId: number): Observable<Event> {
  //   const url = this.eventUrl +'/'+formationId;;
  //   return this.http.get<Event>(url);
  // }
}
