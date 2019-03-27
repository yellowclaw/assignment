import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Opportunity } from './opportunities.component';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {
  private opportunitiesUrl = '/api/opportunities';

  constructor(private http: HttpClient) { }

  getOpportunities(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>(this.opportunitiesUrl);
  }
}
