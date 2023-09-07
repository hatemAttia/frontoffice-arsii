import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  // @ViewChild('myCarousel', { static: true }) carousel!: NgbCarousel;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }

  // goToPreviousSlide() {
  //   this.carousel.prev();
  // }

  // goToNextSlide() {
  //   this.carousel.next();
  // }
}
