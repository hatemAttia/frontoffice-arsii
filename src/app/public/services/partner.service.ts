import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../types/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private partnersUrl = 'http://localhost:8081/api/arsii/partner/allpartners'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.partnersUrl);
  }
}
