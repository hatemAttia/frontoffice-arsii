import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Opportunity } from '../../types/opportunity';
import { Router } from '@angular/router';
import { OpportunityService } from '../../services/opportunity.service';
import { format } from 'date-fns';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OpportunitiesDetailsComponent } from '../opportunities-details/opportunities-details.component';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html'
})
export class OpportunitiesComponent implements OnInit {

  opportunities: Opportunity[]=[];
  opportunity!: Opportunity;
  responsiveOptions;
  constructor(private router: Router, private opportunityService: OpportunityService,
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

   ref!: DynamicDialogRef;

  ngOnInit(): void {
    this.opportunityService.getOpportunities().subscribe((data: Opportunity[]) => {
      console.log(data);
      this.opportunities = data;
    });
  }

  show(opportunityId: number) {
    this.opportunityService.getOpportunityById(opportunityId).subscribe((data) => {
      this.opportunity = data;
    });
    this.ref = this.dialogService.open(OpportunitiesDetailsComponent, {
        data: {
          opportunityId: opportunityId
        },
        header: this.opportunity?.title,
        width: '60%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });
  }

  isFutureOpportunity(opportunityDate: string): boolean {
    const opportunityDateObj = new Date(opportunityDate);
    return opportunityDateObj > new Date();
  }

  translateType(type: string): string {
    switch (type) {
      case 'Summer_internship':
        return 'Offre de Stage';
      case 'PFE':
        return 'Projet de fin d\'étude';
      case 'Job':
        return 'Offre d\'emploi';
   
      default:
        return 'Opportunité';
    }
  }
}
