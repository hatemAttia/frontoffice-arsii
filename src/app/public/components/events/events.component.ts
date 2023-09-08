import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: Event[]) => {
      console.log(data);
      this.events = data;
    });
  }

  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }
}
