import { Injectable } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly BASE_URL: string = 'http://127.0.0.1:5000/usuario';
  headers: HttpHeaders;

  constructor(private http: HttpClient) { //crea un http de tipo http client
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  login(form:any) {
    return this.http.post<Usuario>(`${this.BASE_URL}/login`, form);
  }
}
