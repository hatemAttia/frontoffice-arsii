import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../types/event';
import { format } from 'date-fns';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { EventsDetailsComponent } from '../events-details/events-details.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events: Event[]=[];
  event!:Event;
  responsiveOptions;
  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService,
    public dialogService: DialogService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
   }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: Event[]) => {
      console.log(data);
      this.events = data;
    });
  }

  ref!: DynamicDialogRef;
  
  isFutureEvent(eventDate: string): boolean {
    const eventDateObj = new Date(eventDate);
    return eventDateObj > new Date();
  }

  // formatDate(dateString: string): string {
  //   const eventDate = new Date(dateString);
  //   return format(eventDate, 'dd LLLL yyyy, HH:mm');
  // }

  show(eventId: number) {
    this.ref = this.dialogService.open(EventsDetailsComponent, {
        data: {
          eventId: eventId
        },
        header: 'Détails',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });
}

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }
  // navigateTo(path: string) {
  //   console.log('fffffffff');
  //   this.router.navigate([path]);
  // }
}
