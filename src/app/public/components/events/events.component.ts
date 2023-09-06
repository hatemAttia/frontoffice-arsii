import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// export class EventsComponent implements OnInit {
//   events: Event[] = [];

//   constructor(private eventService: EventService) { }

//   ngOnInit(): void {
//     this.eventService.getEvents().subscribe((data: Event[]) => {
//       console.log(data);
//       this.events = data;
//     });
//   }
// }
