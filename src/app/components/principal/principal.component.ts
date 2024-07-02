import { Component } from '@angular/core';
import { NavbarSimpleComponent } from '../navbar-simple/navbar-simple.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavbarSimpleComponent, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
