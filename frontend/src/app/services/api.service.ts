import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service, TeamMember, ContactRequest, AboutInfo } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://prime-care-solutions-be.vercel.app';

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.baseUrl}/services`);
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.baseUrl}/services/${id}`);
  }

  getServicesByCategory(category: string): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.baseUrl}/services/category/${category}`);
  }

  getTeam(): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(`${this.baseUrl}/team`);
  }

  submitContactRequest(request: ContactRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, request);
  }

  getAboutInfo(): Observable<AboutInfo> {
    return this.http.get<AboutInfo>(`${this.baseUrl}/about`);
  }
}
