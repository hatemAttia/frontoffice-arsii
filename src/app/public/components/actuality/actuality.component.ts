import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { Media } from '../../types/media';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
})
export class ActualityComponent implements OnInit {
  medias!: Media[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  constructor(
    private mediaService: MediaService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.mediaService
      .getMedias()
      .subscribe((data: Media[]) => (this.medias = data));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event: { value: any }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
