import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidenavEComponent } from '../sidenav-e/sidenav-e.component';
import { BodyEspecialistaComponent } from '../body-especialista/body-especialista.component';

//del navbar bacan
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-vista-especialista',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidenavEComponent, BodyEspecialistaComponent],
  templateUrl: './vista-especialista.component.html',
  styleUrls: ['./vista-especialista.component.css']
})
export class VistaEspecialistaComponent {
  isSidebarMinimized = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarMinimized = !this.isSidebarMinimized;
  }

    //del navbar bacan
    isSideNavCollapsed=false;
    screenWidth=0;
  
    //del navbar bacan
    onToggleSideNav(data: SideNavToggle):void{
      this.screenWidth=data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
    }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_email');
    this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
  }
}
