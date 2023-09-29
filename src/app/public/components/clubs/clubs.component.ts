import { Component, OnInit } from '@angular/core';
import { Club } from '../../types/club';
import { ClubService } from '../../services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html'
})
export class ClubsComponent implements OnInit {
  clubs: Club[] = [];
  responsiveOptions;
  constructor(private clubService: ClubService) {
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
    this.clubService.getAllClubs().subscribe((data: Club[]) => {
      console.log(data);
      this.clubs = data;
    });
  }

}
