import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { Media } from '../../types/media';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
})
export class MediasComponent implements OnInit {

  mediaData: any[] = [];
  limitedMediaData: any[] = [];

  constructor(private mediaService: MediaService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.mediaService.getMedias().subscribe((data: Media[]) => {
      console.log(data)
      this.mediaData = data;
      this.limitedMediaData = this.mediaData.slice(0, 6);
    });
  }

  public getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
   
}
