import { Component } from '@angular/core';
import { Estudiante } from '../../model/estudiante';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup} from '@angular/forms';
import { EstudianteService } from '../../service/estudiante/estudiante.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

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
  
  constructor(private EstudianteService: EstudianteService, private router: Router){
    this.estudianteForm=new FormGroup({
      email: new FormControl('',[]),
      facultad: new FormControl('',[]),
      first_name: new FormControl('',[]),
      password: new FormControl('',[]),
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
        console.log(this.estudianteArray)
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
    const estudiante_usuario={
      email:this.estudianteForm.value.email,
      password:this.estudianteForm.value.password,
      first_name:this.estudianteForm.value.first_name,
      last_name:this.estudianteForm.value.last_name,
      facultad:this.estudianteForm.value.facultad,
      codigo_estudiante:this.estudianteForm.value.student_code,
    }
    console.log("lo que agarró del form: ", estudiante_usuario);

    this.EstudianteService.registraEstudiante(estudiante_usuario).subscribe(
      (result:any) => {
        this.router.navigate(['vercontenido']);
        
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
        window.location.href = 'login';
      },
      error => {
        console.log();
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

