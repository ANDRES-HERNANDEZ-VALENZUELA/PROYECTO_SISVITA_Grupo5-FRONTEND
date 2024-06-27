import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSimpleComponent } from './components/navbar-simple/navbar-simple.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarEstudianteComponent } from './components/registrar-estudiante/registrar-estudiante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarSimpleComponent, TestComponent, LoginComponent, RegistrarEstudianteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SISIVITA (GRUPO5)';
}
