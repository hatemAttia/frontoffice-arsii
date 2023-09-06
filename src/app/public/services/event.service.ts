import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'http://localhost:8080/api/arsii/events'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }
}

