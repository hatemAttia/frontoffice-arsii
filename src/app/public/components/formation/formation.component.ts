import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../types/event';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormationsDetailsComponent } from '../formations-details/formations-details.component';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html'
})
export class FormationComponent implements OnInit {
  formations: Event[]=[];
  formation!: Event;
  responsiveOptions;
  constructor(private router: Router, private formationService: EventService, 
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
    this.formationService.getFormations().subscribe((data: Event[]) => {
      console.log(data);
      this.formations = data;
      this.formations.sort((a, b) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
    });
  }

  ref!: DynamicDialogRef;

  isFutureFormation(formationDate: string): boolean {
    const formationDateObj = new Date(formationDate);
    return formationDateObj > new Date();
  }
  show(formationId: number) {
    this.formationService.getEventById(formationId).subscribe((data) => {
      this.formation = data;
    });
    this.ref = this.dialogService.open(FormationsDetailsComponent, {
        data: {
          formationId: formationId
        },
        header: this.formation.title,
        width: '60%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });
  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }

  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }

}
