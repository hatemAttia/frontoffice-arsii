import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../types/event';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EventsDetailsComponent } from '../events-details/events-details.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  event!: Event;
  responsiveOptions;
  constructor(
    private eventService: EventService,
    public dialogService: DialogService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: Event[]) => {
      console.log(data);
      this.events = data;
      this.events.sort((a, b) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
    });
  }

  ref!: DynamicDialogRef;

  isFutureEvent(eventDate: string): boolean {
    const eventDateObj = new Date(eventDate);
    return eventDateObj > new Date();
  }

  show(eventId: number) {
    this.eventService.getEventById(eventId).subscribe((data) => {
      this.event = data;
    });
    this.ref = this.dialogService.open(EventsDetailsComponent, {
      data: {
        eventId: eventId,
      },
      header: this.event?.title,
      width: '60%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
