import { Component } from '@angular/core';
import { Estudiante } from '../../model/estudiante';
import { FormControl, FormGroup } from '@angular/forms';
import { EstudianteService } from '../../service/estudiante/estudiante.service';
import Swal from 'sweetalert2';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrar-estudiante.component.html',
  styleUrl: './registrar-estudiante.component.css'
})
export class RegistrarEstudianteComponent {
  estudianteArray: Estudiante[]=[];
  estudianteForm: FormGroup;
  
  constructor(private EstudianteService: EstudianteService){
    this.estudianteForm=new FormGroup({
      email: new FormControl('',[]),
      facultad: new FormControl('',[]),
      first_name: new FormControl('',[]),
      id: new FormControl('',[]),
      last_name: new FormControl('',[]),
      student_code: new FormControl('',[]),
    });
  }

  ngOnInit():void{
    this.getEstudiantes();

  }

  getEstudiantes():void{
    this.EstudianteService.getEstudiantes().subscribe(
      (result:any)=>{
        this.estudianteArray=result.data;
      },(err:any)=>{
        console.log(err);
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

