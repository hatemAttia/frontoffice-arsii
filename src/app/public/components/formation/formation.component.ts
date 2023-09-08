import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html'
})
export class FormationComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateTo(path: string) {
    console.log('fffffffff');
    this.router.navigate([path]);
  }


}
