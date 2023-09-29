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
  formationId!: number;

  constructor(private http: HttpClient) { }
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTk4NTc4MCwiZXhwIjoxNjk1OTk1ODYwfQ.NpYMdQdXnnlBmMU0Cu8QCxrE0d-sMkrkOXYqdqmUWi0',
    });
    return headers;
  }

  getEvents(): Observable<Event[]> {
    const headers = this.createRequestOptions();
    const url = this.eventsUrl+'/Event';
    return this.http.get<Event[]>(url 
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
    const url = this.eventsUrl+'/Formation';
    return this.http.get<Event[]>(url
     // { headers: headers,}
      );
  }

  getFormationById(formationId: number): Observable<Event> {
    const url = `${this.eventUrl}/${formationId}`; 
    const headers = this.createRequestOptions();

    return this.http.get<Event>(url, 
      { headers }
      );
  }
  
}

