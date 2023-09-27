import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../../types/formation';
import { FormationService } from '../../services/formation.service';
import { format } from 'date-fns';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormationsDetailsComponent } from '../formations-details/formations-details.component';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html'
})
export class FormationComponent implements OnInit {
  formations: Formation[]=[];
  responsiveOptions;
  constructor(private router: Router, private formationService: FormationService, 
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
    this.formationService.getFormations().subscribe((data: Formation[]) => {
      console.log(data);
      this.formations = data;
    });
  }

  ref!: DynamicDialogRef;

  isFutureFormation(formationDate: string): boolean {
    const formationDateObj = new Date(formationDate);
    return formationDateObj > new Date();
  }
  show(formationId: number) {
    this.ref = this.dialogService.open(FormationsDetailsComponent, {
        data: {
          formationId: formationId
        },
        header: 'Détails',
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
