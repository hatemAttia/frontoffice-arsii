import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'api/arsii/visitor/allMember'; // Remplacez par l'URL de votre API
  createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NTQ2ODY1MCwiZXhwIjoxNjk1NDc4NzMwfQ.RKi1iAitW1k3WtQQACyiUT9aLN-FYAikvC2b0xziqW4',
    });
    return headers;
  }
  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<User[]> {
    const headers = this.createRequestOptions();
    return this.http.get<User[]>(this.membersUrl, {
      // headers: headers,
    });
  }
  getMembers() {
    return this.http.get<any>('assets/members.json')
    .toPromise()
    .then(res => <User[]>res.data)
    .then(data => { return data; });
  }

  getPresident(): Observable<User> {
    const position = 'NATIONAL_PRESIDENT';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User>(url);
  }

  getVicePresident(): Observable<User[]> {
    const position = 'VICE_PRESIDENT';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getTreasurer(): Observable<User[]> {
    const position = 'TREASURER';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getGeneralSecretary(): Observable<User[]> {
    const position = 'GENERAL_SECRETARY';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getProjectManager(): Observable<User[]> {
    const position = 'PROJECT_MANAGER';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getDeputySecretaryGeneral(): Observable<User[]> {
    const position = 'DEPUTY_SECRETARY_GENERAL';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getAssistantTreasurer(): Observable<User[]> {
    const position = 'ASSISTANT_TREASURER';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getRdManager(): Observable<User[]> {
    const position = 'R_D_MANAGER';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getLogisticsManager(): Observable<User[]> {
    const position = 'LOGISTICS_MANAGER';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getTrainingManager(): Observable<User[]> {
    const position = 'TRAINING_MANAGER';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }

  getVOpprtInterManager(): Observable<User[]> {
    const position = 'OPPORTUNITIES_INTERNSHIPS_MANAGER';
    const url = `${this.membersUrl}?post=${position}`;
    return this.http.get<User[]>(url);
  }
}
