import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {
  private opportunitiesUrl = '/api/opportunities';

  constructor(private http: HttpClient) { }

  public getOpportunities() {
    return this.http.get(this.opportunitiesUrl);
  }
}
