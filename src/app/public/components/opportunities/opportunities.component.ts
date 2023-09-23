import { Component, OnInit } from '@angular/core';
import { Opportunity } from '../../types/opportunity';
import { Router } from '@angular/router';
import { OpportunityService } from '../../services/opportunity.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html'
})
export class OpportunitiesComponent implements OnInit {

  opportunities: Opportunity[]=[];
  responsiveOptions;
  constructor(private router: Router, private eventService: OpportunityService) {
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
    this.eventService.getOpportunities().subscribe((data: Opportunity[]) => {
      console.log(data);
      this.opportunities = data;
    });
  }

  isFutureOpportunity(eventDate: string): boolean {
    const eventDateObj = new Date(eventDate);
    return eventDateObj > new Date();
  }

  formatDate(dateString: string): string {
    const eventDate = new Date(dateString);
    return format(eventDate, 'dd LLLL yyyy, HH:mm');
  }

}
