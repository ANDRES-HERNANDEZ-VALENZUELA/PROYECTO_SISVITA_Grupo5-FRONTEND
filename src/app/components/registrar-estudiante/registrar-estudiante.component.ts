import { Component } from '@angular/core';
import { Estudiante } from '../../model/estudiante';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup} from '@angular/forms';
import { EstudianteService } from '../../service/estudiante/estudiante.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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

  student = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    student_code: '',
    facultad: '',
  };
  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
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

  createEstudiante(): void {
    const jsonString = JSON.stringify(this.estudianteForm.value);
    this.EstudianteService.registraEstudiante(jsonString).subscribe(
      (result:any) => {
        
        Swal.fire({
          icon: 'success',
          title: 'Estudiante registrado',
          text: 'El estudiante ha sido registrado exitosamente.',
        });
        // Aquí puedes resetear el formulario si lo deseas
        this.student = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          student_code: '',
          facultad: ''
        };
      },
      error => {
        console.log(jsonString);
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: 'Hubo un problema al registrar el estudiante.',
        });
        console.error(error);
      }
    );
  }
}

