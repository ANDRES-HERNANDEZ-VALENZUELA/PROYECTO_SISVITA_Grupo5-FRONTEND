import { CommonModule } from '@angular/common';
import { Component, Inject, LOCALE_ID, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { NavbarSimpleComponent } from '../NAVBAR_INICIAL/navbar-simple.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule, NgxPaginationModule, NavbarSimpleComponent, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: String | null='';
  loginForm: FormGroup;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private router: Router,
    private usuarioService: UsuarioService,
    private modalService: NgbModal,


  ){

    this.loginForm = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
    localStorage.removeItem('user');
  }
  
  login() {
    if (this.loginForm.valid) {
      const usuario={
        email:this.loginForm.value.correo,
        password:this.loginForm.value.password,
      }
      console.log("lo que agarro el form",usuario)
      this.usuarioService.login(usuario).subscribe(
       (res: any) => {
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('user_email', usuario.email);
          localStorage.setItem('role', res.role)
          console.log("local: ",localStorage.getItem('user_email'))
          console.log("rol obtenido del usuario:", localStorage.getItem('role'))

          Swal.fire({
            icon: 'success',
            title: 'Bienvenido!',
            text: res.message,
          }).then((result) => {
            if (result.isConfirmed) {
              if (res.role == 'Estudiante'){
                this.router.navigate(['/vistaEstudiante']);
              }else{
                //acá vas a poner la ruta de la vista estudiante
                this.router.navigate(['principal'])
              }
                
            }
          });
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.error.message,
          });
        }
      );
    }
  }
}
