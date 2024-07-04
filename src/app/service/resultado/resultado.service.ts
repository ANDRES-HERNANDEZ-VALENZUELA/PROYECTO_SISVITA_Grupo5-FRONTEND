import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resultado } from '../../model/resultado';


@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  readonly BASE_URL: string = 'http://127.0.0.1:5000/resultados';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

  constructor(private http: HttpClient) { }

  getResultadosByCodigoEntidad(codigoEntidad: string): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${this.BASE_URL}/${codigoEntidad}`, { headers: this.headers });
  }

  getAllResultados(): Observable<any[]> {
    return this.http.get<Resultado[]>(`${this.BASE_URL}/all`);
  }
}
