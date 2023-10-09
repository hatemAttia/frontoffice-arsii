import { Component, OnInit } from '@angular/core';
import { Event } from '../../types/event';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-formations-details',
  templateUrl: './formations-details.component.html'
})
export class FormationsDetailsComponent implements OnInit {
  formation!:Event;
  images!: any[];
  formationId!: number;

  constructor(private formationService: EventService,
    public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 
      this.formationId = this.config.data.formationId;
    }

  ngOnInit(): void {
    this.formationService.getEventById(this.formationId).subscribe((data) => {
      this.formation = data;
    });

  }
}
