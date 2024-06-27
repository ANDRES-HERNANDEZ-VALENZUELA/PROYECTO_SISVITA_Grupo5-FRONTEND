import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  readonly BASE_URL: string = 'http://127.0.0.1:5000/test';
  headers: HttpHeaders;

  constructor(private http: HttpClient) { //crea un http de tipo http client
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getQuestions(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/get_questions`);
  }

  submitTest(testData: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/submit_test`, testData);
  }
}