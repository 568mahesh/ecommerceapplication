import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 private baseUrl = 'http://localhost:8082/auth';

  constructor(private http: HttpClient) {}

  //for registration validations
 register(user: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'text' });
}
//for login validation
login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

}
