import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../../types/formation';
import { FormationService } from '../../services/formation.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html'
})
export class FormationComponent implements OnInit {
  formations: Formation[]=[];
  responsiveOptions;
  constructor(private router: Router, private formationService: FormationService) {
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
    this.formationService.getFormations().subscribe((data: Formation[]) => {
      console.log(data);
      this.formations = data;
    });
  }

  isFutureFormation(formationDate: string): boolean {
    const formationDateObj = new Date(formationDate);
    return formationDateObj > new Date();
  }

  formatDate(dateString: string): string {
    const formationDate = new Date(dateString);
    return format(formationDate, 'dd LLLL yyyy, HH:mm');
  }

  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }


}
