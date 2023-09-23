import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../types/event';
import { Galleria} from 'primeng/galleria';
import { PhotoService } from '../../services/photo.service';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html'
})
export class EventsDetailsComponent implements OnInit {
  event!:Event;
  images!: any[];
  eventId!: number;

  constructor(private eventService: EventService,
    public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 
      this.eventId = this.config.data.eventId;
    }

  ngOnInit(): void {
    this.eventService.getEventById(this.eventId).subscribe((data) => {
      this.event = data;
    });

  }
}
