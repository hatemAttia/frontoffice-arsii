import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Opportunity } from '../../types/opportunity';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OpportunityService } from '../../services/opportunity.service';

@Component({
  selector: 'app-opportunities-details',
  templateUrl: './opportunities-details.component.html'
})
export class OpportunitiesDetailsComponent implements OnInit {
  opportunity!:Opportunity;
  images!: any[];
  opportunityId!: number;

  constructor(private opportunityService: OpportunityService,
    public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 
      this.opportunityId = this.config.data.opportunityId;
    }

  ngOnInit(): void {
    this.opportunityService.getOpportunityById(this.opportunityId).subscribe((data) => {
      this.opportunity = data;
    });

  }
}
