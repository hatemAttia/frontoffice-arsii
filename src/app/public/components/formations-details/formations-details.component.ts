import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../types/formation';
import { Galleria} from 'primeng/galleria';
import { PhotoService } from '../../services/photo.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-formations-details',
  templateUrl: './formations-details.component.html'
})
export class FormationsDetailsComponent implements OnInit {
  formation!:Formation;
  images!: any[];
  formationId!: number;

  constructor(private formationService: FormationService,
    public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 
      this.formationId = this.config.data.formationId;
    }

  ngOnInit(): void {
    this.formationService.getFormationById(this.formationId).subscribe((data) => {
      this.formation = data;
    });

  }
}
