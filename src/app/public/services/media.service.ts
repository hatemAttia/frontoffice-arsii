import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../types/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private mediasUrl = '/api/arsii/visitor/allMedias';
  private mediaUrl = '/api/arsii/visitor/media';

  constructor(private http: HttpClient) { }

  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return headers;
  }

  getMedias() : Observable<Media[]> {
    return this.http.get<Media[]>(this.mediasUrl);
  }
}
