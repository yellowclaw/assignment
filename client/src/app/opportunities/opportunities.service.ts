import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Opportunity } from './opportunities.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {
  private opportunitiesUrl = '/api/opportunities';

  constructor(private http: HttpClient) { }

  getOpportunities(): Observable<Opportunity[]> {
    return this.http.get(this.opportunitiesUrl);
  }
}
