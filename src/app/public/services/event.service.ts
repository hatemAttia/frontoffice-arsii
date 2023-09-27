import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../types/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = '/api/arsii/visitor/allEvent';
  private eventUrl = 'api/arsii/admin/event';
  eventId!: number;


  constructor(private http: HttpClient) { }
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTQ2ODY1MCwiZXhwIjoxNjk1NDc4NzMwfQ.RKi1iAitW1k3WtQQACyiUT9aLN-FYAikvC2b0xziqW4',
    });
    return headers;
  }

  getEvents(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    return this.http.get<Event[]>(this.eventsUrl, {
      // headers: headers,
    });
  }

  getEventById(eventId: number): Observable<Event> {
    const url = `${this.eventUrl}/${eventId}`; 
    const headers = this.createRequestOptions();

    return this.http.get<Event>(url, { headers });
  }

}

