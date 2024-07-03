import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../../../../service/estudiante/estudiante.service';
import { Estudiante } from '../../../../model/estudiante';
import { NgModule } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-inicio-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-inicio-login.component.html',
  styleUrl: './pagina-inicio-login.component.css'
})
export class PaginaInicioLoginComponent {
  

  email_obtenido: string;
  codigo_entidad: string;
  estudiante: Estudiante | null = null;  // Atributo para almacenar un solo estudiante

  constructor(
    private router: Router,
    private EstudianteService: EstudianteService,
  ){
    this.email_obtenido = localStorage.getItem('user_email')+'';
    this.codigo_entidad = '';
  }

  ngOnInit():void{
    console.clear();
    this.getEstudianteporEmail();
  }

  //función para retornar la info del usuario logueado en su página principal
  getEstudianteporEmail():void{
    const estudiante_usuario={
      email:this.email_obtenido
    }
    console.log("email recuperado del local: ", this.email_obtenido);
    console.log("email del const: ", estudiante_usuario);
    this.EstudianteService.getEstudianteporEmail(estudiante_usuario).subscribe(
      (result:any)=>{
        this.estudiante=result.data;
        console.log("Objeto obtenido: ",this.estudiante);
        
        //unica información a usar
        this.estudiante = result.data ? result.data[0] : null;
        //no sé si lo utilizaré, porsiaca lo dejo:
        const usuario={
          email:this.estudiante?.email,
          codigo:this.estudiante?.student_code,
          first_name:this.estudiante?.first_name,
          last_name:this.estudiante?.last_name,
          facultad:this.estudiante?.facultad,
          rol:this.estudiante?.rol,
        }

        console.log("datos a usar en el html: ",usuario);
        console.log("codigo al storage: ", usuario.codigo);
        localStorage.setItem('codigo_entidad', usuario.codigo+'');

      },(err:any)=>{
        console.log("error de traer el estudiante usando su email: ",err);
        Swal.close();
        Swal.fire({
          icon:'error',
          title:'Advertencia...',
          text:'Ah ocurrido un error!',
        });
      }
    )
  }
}
