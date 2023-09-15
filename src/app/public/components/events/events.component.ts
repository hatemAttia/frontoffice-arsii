import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { Event } from '../../types/event';
import { format } from 'date-fns';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events: Event[]=[];
  responsiveOptions;
  constructor(private router: Router, private eventService: EventService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
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

  isFutureEvent(eventDate: string): boolean {
    // Convertissez la date de l'événement en objet Date
    const eventDateObj = new Date(eventDate);

    // Comparez la date de l'événement avec la date actuelle
    return eventDateObj > new Date();
  }

  formatDate(dateString: string): string {
    const eventDate = new Date(dateString);
    return format(eventDate, 'dd LLLL yyyy, HH:mm');
  }

  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }
}
