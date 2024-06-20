import { Component } from '@angular/core';
import { NavbarSimpleComponent } from './components/navbar-simple/navbar-simple.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarEstudianteComponent } from './components/registrar-estudiante/registrar-estudiante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarSimpleComponent, TestComponent, LoginComponent, RegistrarEstudianteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sisvitaG5';
}
