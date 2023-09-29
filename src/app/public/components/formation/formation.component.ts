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
    });
    // localStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTkzOTAxOSwiZXhwIjoxNjk1OTQ5MDk5fQ.bEgaQvKtkiTXU2ugu84hzty_O4sw2YRaJgmMuiMyH7I');
  }

  ref!: DynamicDialogRef;

  isFutureFormation(formationDate: string): boolean {
    const formationDateObj = new Date(formationDate);
    return formationDateObj > new Date();
  }
  show(formationId: number) {
    this.formationService.getFormationById(formationId).subscribe((data) => {
      this.formation = data;
    });
    this.ref = this.dialogService.open(FormationsDetailsComponent, {
        data: {
          formationId: formationId
        },
        header: this.formation.title,
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

  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }

}
