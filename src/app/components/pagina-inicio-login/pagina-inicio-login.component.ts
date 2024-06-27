import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../../service/estudiante/estudiante.service';
import { Estudiante } from '../../model/estudiante';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio-login',
  standalone: true,
  imports: [],
  templateUrl: './pagina-inicio-login.component.html',
  styleUrl: './pagina-inicio-login.component.css'
})
export class PaginaInicioLoginComponent {

  user: String | null='' ;
  estudiante: Estudiante=;

  constructor(
    private router: Router,
    private EstudianteService: EstudianteService,
  ){
    this.user = localStorage.getItem('user');
    const estudiante_usuario={

    }
  }

  getEstudianteporEmail():void{
    this.EstudianteService.getEstudianteporEmail
  }
}
