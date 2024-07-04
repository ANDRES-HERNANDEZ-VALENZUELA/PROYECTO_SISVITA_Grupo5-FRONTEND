import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  readonly BASE_URL: string = 'http://127.0.0.1:5000/api'
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   }

  ;

    // Obtener lista de departamentos desde el backend
    getDepartments(): Observable<any[]> {
      return this.http.get<any[]>(`${this.BASE_URL}/departments`);
    }
  
    // Obtener lista de provincias según el ID del departamento seleccionado
    getProvinces(departmentId: number): Observable<any[]> {
      return this.http.get<any[]>(`${this.BASE_URL}/provinces/${departmentId}`);
    }
  
    // Obtener lista de distritos según el ID de la provincia seleccionada
    getDistricts(provinceId: number): Observable<any[]> {
      return this.http.get<any[]>(`${this.BASE_URL}/districts/${provinceId}`);
    }
}
