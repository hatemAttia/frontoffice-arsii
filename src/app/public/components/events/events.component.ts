import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { Event } from '../../types/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events: any[]=[];
  event?: Event;
  // events: Event[] = [];
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
    this.eventService.getEvents().subscribe((data: any) => {
      console.log(data);
      this.events = data;
    });

    this.eventService.getEventById().subscribe((data: any) => {
      console.log(data);
      this.event = data;
    });
  }

  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }
}
