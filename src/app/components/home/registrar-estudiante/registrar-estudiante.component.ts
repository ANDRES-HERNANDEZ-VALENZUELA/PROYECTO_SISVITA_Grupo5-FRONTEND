import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../model/estudiante';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup} from '@angular/forms';
import { EstudianteService } from '../../../service/estudiante/estudiante.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { NavbarSimpleComponent } from '../NAVBAR_INICIAL/navbar-simple.component';
import { UbigeoService } from '../../../service/ubigeo/ubigeo.service';

@Component({
  selector: 'app-registrar-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarSimpleComponent],
  templateUrl: './registrar-estudiante.component.html',
  styleUrl: './registrar-estudiante.component.css'
})
export class RegistrarEstudianteComponent implements OnInit{
  //forms estudiantes
  estudianteArray: Estudiante[]=[];
  estudianteForm: FormGroup;

  //los selectores:
  departments: any[];
  provinces: any[];
  districts: any[];

  selectedDepartment: number;
  selectedProvince: number;
  selectedDistrict: number;
  
  constructor(
    private EstudianteService: EstudianteService, 
    private router: Router,
    private ubigeoService: UbigeoService
  ){
    this.estudianteForm=new FormGroup({
      email: new FormControl('',[]),
      facultad: new FormControl('',[]),
      first_name: new FormControl('',[]),
      password: new FormControl('',[]),
      last_name: new FormControl('',[]),
      student_code: new FormControl('',[]),
      celular: new FormControl('',[]),
    });
  }

  //
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
    this.loadDepartments();
  }

  loadDepartments() {
    this.ubigeoService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  onDepartmentChange() {
    this.ubigeoService.getProvinces(this.selectedDepartment).subscribe(data => {
      this.provinces = data;
    });
  }

  onProvinceChange() {
    this.ubigeoService.getDistricts(this.selectedProvince).subscribe(data => {
      this.districts = data;
    });
  }

  getEstudiantes():void{
    this.EstudianteService.getEstudiantes().subscribe(
      (result:any)=>{
        this.estudianteArray=result.data;
        console.log('estudiantes: ',this.estudianteArray)
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
      cell_phone:this.estudianteForm.value.celular,
      department_id:this.selectedDepartment,
      province_id:this.selectedProvince,
      district_id:this.selectedDistrict
    }
    console.log("lo que agarró del form: ", estudiante_usuario);

    this.EstudianteService.registraEstudiante(estudiante_usuario).subscribe(
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

