import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header/header/header.component';
import { NavBarComponent } from '../../navbar-v2/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../NAVBAR/sidenav/sidenav.component';
import { BodyComponent } from '../../NAVBAR/body/body.component';

//del navbar bacan
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports:[RouterOutlet, CommonModule, HeaderComponent,SidenavComponent, BodyComponent],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
