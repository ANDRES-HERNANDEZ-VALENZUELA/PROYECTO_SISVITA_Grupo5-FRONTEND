import { Injectable } from '@angular/core';
import { Estudiante } from '../../model/estudiante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  readonly BASE_URL: string = 'http://127.0.0.1:5000/estudiante';

  constructor(private http: HttpClient) { //crea un http de tipo http client

  }

  //retorno del método
  //en el caso de angular necesita que se defina un observador 
  //getEstudiantes devuelve un observable de la colección Estudiante
  getEstudiantes(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${this.BASE_URL}/listar`); //cuando llame a esa ruta del dolar, descarga
                                                                   //el resultado en el objeto Estudiante
  }

  registraEstudiante(form: any){
    return this.http.post(`${this.BASE_URL}/add`, form);
  }

  actualizarEstudiante(form: any){
    return this.http.post(`${this.BASE_URL}/update`, form);
  }

  eliminarEstudiante(estudiante: Estudiante){
    return this.http.delete(`${this.BASE_URL}/delete`, {body:estudiante});
  }
}
