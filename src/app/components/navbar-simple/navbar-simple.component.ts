import { Component } from '@angular/core';
import { RegistrarEstudianteComponent } from '../registrar-estudiante/registrar-estudiante.component';

@Component({
  selector: 'app-navbar-simple',
  standalone: true,
  imports: [RegistrarEstudianteComponent],
  templateUrl: './navbar-simple.component.html',
  styleUrl: './navbar-simple.component.css'
})
export class NavbarSimpleComponent {

}
