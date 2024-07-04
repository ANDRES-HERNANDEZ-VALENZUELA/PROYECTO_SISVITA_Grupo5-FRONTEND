import { Injectable } from '@angular/core';
import { Especialista } from '../../model/especialista';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  readonly BASE_URL: string = 'http://127.0.0.1:5000/especialista';
  headers: HttpHeaders;

  constructor(private http: HttpClient) { //crea un http de tipo http client
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  }

  getEspecialistaPorEmail(especialista_usuario: { email: string }): Observable<Especialista> {
    const params = new HttpParams().set('email', especialista_usuario.email);
    return this.http.get<Especialista>(`${this.BASE_URL}/buscarPorEmail`, { headers: this.headers, params: params });
  }
}
