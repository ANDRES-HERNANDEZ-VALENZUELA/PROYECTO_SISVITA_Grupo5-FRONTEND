import { CommonModule } from '@angular/common';
import { Component, Inject, LOCALE_ID, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../service/usuario/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule, NgxPaginationModule],
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
    this.user = localStorage.getItem('user');

    this.loginForm = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
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
          this.router.navigate(['vercontenido']);
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido!',
            text: res.message,
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
