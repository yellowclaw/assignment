import { Component, OnInit } from '@angular/core';
import { OpportunitiesService } from './opportunities.service';

export interface Opportunity {
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})

export class OpportunitiesComponent implements OnInit {
  opportunities: Opportunity[] = [];

  constructor(private opportunityService: OpportunitiesService) { }

  ngOnInit() {
    this.getOpportunities();
  }

  private getOpportunities() {
    this.opportunityService.getOpportunities().subscribe((res: Opportunity[]) => {
      console.log(res);
      this.opportunities = res;
    }, err => {
      console.log('Opportunity error', err);
    });
  }
}
