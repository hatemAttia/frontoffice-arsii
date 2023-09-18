import { Component, OnInit } from '@angular/core';
import { Partner } from '../../types/partner';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html'
})
export class PartnersComponent implements OnInit {
  partners: Partner[] = [];

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe((data: Partner[]) => {
      console.log('partners-------', data);
      this.partners = data;
    });
  }
}
