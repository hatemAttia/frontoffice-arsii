import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  // @ViewChild('myCarousel', { static: true }) carousel!: NgbCarousel;
  constructor() { }

  ngOnInit(): void {
  }

  // goToPreviousSlide() {
  //   this.carousel.prev();
  // }

  // goToNextSlide() {
  //   this.carousel.next();
  // }

}
