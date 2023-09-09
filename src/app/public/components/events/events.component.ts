import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events: any[]=[];
  // events: Event[] = [];
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: any) => {
      console.log(data);
      this.events = data;
    });
  }

  getEventGroups() {
    const groupSize = 3;
    const eventGroups = [];

    for (let i = 0; i < this.events.length; i += groupSize) {
      const group = this.events.slice(i, i + groupSize);
      eventGroups.push(group);
    }

    return eventGroups;
  }

  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }
}
