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
  constructor(private router: Router, private opportunityService: OpportunityService) {
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
    this.opportunityService.getOpportunities().subscribe((data: Opportunity[]) => {
      console.log(data);
      this.opportunities = data;
    });
  }

  isFutureOpportunity(opportunityDate: string): boolean {
    const opportunityDateObj = new Date(opportunityDate);
    return opportunityDateObj > new Date();
  }

  translateType(type: string): string {
    switch (type) {
      case 'Summer_internship':
        return 'Stage d\'été';
      case 'PFE':
        return 'Projet de fin d\'étude';
      case 'Job':
        return 'Offre d\'emploi';
   
      default:
        return 'Opportunité';
    }
  }
}
