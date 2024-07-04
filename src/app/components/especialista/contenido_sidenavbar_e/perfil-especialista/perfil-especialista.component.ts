import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Especialista } from '../../../../model/especialista';
import { EspecialistaService } from '../../../../service/especialista/especialista.service';


@Component({
  selector: 'app-perfil-especialista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-especialista.component.html',
  styleUrl: './perfil-especialista.component.css'
})
export class PerfilEspecialistaComponent {

  email_obtenido: string;
  codigo_entidad: string;
  especialista: Especialista | null = null;

  constructor(
    private router: Router,
    private EspecialistaService: EspecialistaService,
  ){
    this.email_obtenido = localStorage.getItem('user_email')+'';
    this.codigo_entidad = '';
  }

  ngOnInit():void{
    console.clear();
    this.getEspecialistaPorEmail();
  }

  //función para retornar la info del usuario logueado en su página principal
  getEspecialistaPorEmail():void{
    const especialista_usuario={
      email:this.email_obtenido
    }
    console.log("email recuperado del local: ", this.email_obtenido);
    console.log("email del const: ", especialista_usuario);
    this.EspecialistaService.getEspecialistaPorEmail(especialista_usuario).subscribe(
      (result:any)=>{
        this.especialista=result.data;
        console.log("Objeto obtenido: ",this.especialista);
        
        //unica información a usar
        this.especialista = result.data ? result.data[0] : null;
        //no sé si lo utilizaré, porsiaca lo dejo:
        const usuario={
          email:this.especialista?.email,
          codigo:this.especialista?.specialist_code,
          first_name:this.especialista?.first_name,
          last_name:this.especialista?.last_name,
          facultad:this.especialista?.specialty,
          rol:this.especialista?.rol,
        }

        console.log("datos a usar en el html: ",usuario);
        console.log("codigo al storage: ", usuario.codigo);
        localStorage.setItem('codigo_entidad', usuario.codigo+'');

      },(err:any)=>{
        console.log("error de traer al especialista usando su email: ",err);
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
