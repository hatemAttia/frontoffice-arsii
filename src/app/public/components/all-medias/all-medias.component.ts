import { Component, OnInit } from '@angular/core';
import { Media } from '../../types/media';
import { MediaService } from '../../services/media.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-all-medias',
  templateUrl: './all-medias.component.html',
})
export class AllMediasComponent implements OnInit {
  mediaData: any[] = [];
  displayedMediaData: any[] = [];
  selectedMediaType: string = 'Tous';
  mediaTypes: string[] = [];
  facebookMedia: Media[] = [];
  youtubeMedia: Media[] = [];
  linkedinMedia: Media[] = [];
  totalRecords!: number;
  rows: number = 6;
  first!: number;

  constructor(
    private mediaService: MediaService,
    private sanitizer: DomSanitizer
  ) {
    this.selectedMediaType = 'Tous';
  }

  ngOnInit(): void {
    this.mediaService.getMedias().subscribe((data: Media[]) => {
      console.log(data);
      this.mediaData = data;
      // this.selectedMediaType = 'Tous';
      // this.updateDisplayedMediaData();
      this.totalRecords = this.mediaData.length;
      console.log(this.totalRecords);
    });
  }

  public getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onMediaTypeChange(mediaType: string): void {
    this.selectedMediaType = mediaType;
    this.first = 0;
    this.updateDisplayedMediaData();
  }

  updateDisplayedMediaData() {
    if (this.selectedMediaType === 'Tous') {
      this.displayedMediaData = this.mediaData.slice(
        this.first,
        this.first + this.rows
      );
    } else {
      const filteredMedia = this.mediaService.filterMediaByType(
        this.mediaData,
        this.selectedMediaType
      );
      this.displayedMediaData = filteredMedia.slice(
        this.first,
        this.first + this.rows
      );
    }
  }

  paginateMediaData(): void {
    this.displayedMediaData = this.mediaData.slice(
      this.first,
      this.first + this.rows
    );
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.updateDisplayedMediaData();
  }
}
