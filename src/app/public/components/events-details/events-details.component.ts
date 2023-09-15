import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../types/event';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html'
})
export class EventsDetailsComponent implements OnInit {
  event!:Event;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
    const eventId = +idParam;
    this.eventService.getEventById(eventId).subscribe((data: Event) => {
      console.log(data);
      this.event = data;
    });
  }
  }
}
