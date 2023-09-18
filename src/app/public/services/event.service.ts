import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../types/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = '/api/arsii/admin/event';
  eventId!: number;


  constructor(private http: HttpClient) { }
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDc5NzE0MSwiZXhwIjoxNjk0ODA3MjIxfQ.Mn2okXg_nIkEAR_MGNzwyVUNJsYoB2nlnFOxFYOW-JI',
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
    const url = `${this.eventsUrl}/${eventId}`; 
    const headers = this.createRequestOptions();

    return this.http.get<Event>(url, { headers });
  }

}

