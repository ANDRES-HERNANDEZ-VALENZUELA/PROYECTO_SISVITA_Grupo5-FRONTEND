import { Component } from '@angular/core';
import { RegistrarEstudianteComponent } from '../registrar-estudiante/registrar-estudiante.component';
import { LoginComponent } from '../login/login.component';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-navbar-simple',
  standalone: true,
  imports: [RegistrarEstudianteComponent, LoginComponent, PrincipalComponent],
  templateUrl: './navbar-simple.component.html',
  styleUrl: './navbar-simple.component.css'
})
export class NavbarSimpleComponent {

}
