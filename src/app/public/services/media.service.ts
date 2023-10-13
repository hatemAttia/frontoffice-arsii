import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../types/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private mediasUrl = '/api/arsii/visitor/allMedia';
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

  getMediaById(mediaId: number): Observable<Media> {
    const url = this.mediaUrl +'/'+mediaId;
    return this.http.get<Media>(url);
  }

  filterMediaByType(mediaData: any[], mediaType: string): any[] {
    return mediaData.filter((media) => media.type === mediaType);
  }

}
