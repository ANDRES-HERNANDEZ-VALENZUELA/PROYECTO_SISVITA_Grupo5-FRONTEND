import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSimpleComponent } from './components/navbar-simple/navbar-simple.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarEstudianteComponent } from './components/registrar-estudiante/registrar-estudiante.component';
import { PaginaInicioLoginComponent } from './components/pagina-inicio-login/pagina-inicio-login.component';
import { ResultadosComponent } from './components/pagina-inicio-login/pagina-inicio-login/resultados/resultados.component';
import { Router, NavigationEnd } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavBarComponent } from './components/navbar-v2/nav-bar/nav-bar.component';
import { SidenavComponent } from './components/NAVBAR/sidenav/sidenav.component';
import { BodyComponent } from './components/NAVBAR/body/body.component';
//no pongas el browser module xD

//del navbar bacan
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrincipalComponent, CommonModule, NgIf, NavbarSimpleComponent, SidenavComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SISIVITA (GRUPO5)';
  showNavbar = false;

  //del navbar bacan
  isSideNavCollapsed=false;
  screenWidth=0;

  //del navbar bacan
  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = this.shouldShowNavbar(event.urlAfterRedirects);
      }
    });
  }

  shouldShowNavbar(url: string): boolean {
    // Define the routes where you want to show the navbar
    const routesWithNavbar = [
      '/principal',
      '/login',
      '/register',
    ];
    return routesWithNavbar.some(route => url.startsWith(route));
  }
}