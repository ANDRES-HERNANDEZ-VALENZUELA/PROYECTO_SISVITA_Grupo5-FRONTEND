import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio-login',
  standalone: true,
  imports: [],
  templateUrl: './pagina-inicio-login.component.html',
  styleUrl: './pagina-inicio-login.component.css'
})
export class PaginaInicioLoginComponent {

  user: String | null='' ;
  constructor(
    private router: Router
  ){
    this.user = localStorage.getItem('user');
  }

}
