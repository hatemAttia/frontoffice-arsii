import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../types/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = '/api/arsii/visitor/allEvent';
  private eventUrl = 'api/arsii/admin/event'
  private imageUrl ='/api/arsii/admin/event/img/';
  eventId!: number;


  constructor(private http: HttpClient) { }
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTQxOTgyMSwiZXhwIjoxNjk1NDI5OTAxfQ.YYQq2XROq4ScxleJZbKcgyCIGMYvZFiHZVOhYEg1RLA',
    });
    return headers;
  }

  getEvents(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Event[]>(this.eventsUrl, {
      headers: headers,
    });
  }

  getEventById(eventId: number): Observable<Event> {
    const url = `${this.eventUrl}/${eventId}`; 
    const headers = this.createRequestOptions();

    return this.http.get<Event>(url, { headers });
  }

}

