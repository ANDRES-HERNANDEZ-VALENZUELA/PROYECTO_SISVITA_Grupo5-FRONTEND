import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarDataE } from './nav-dataE';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav-e',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './sidenav-e.component.html',
  styleUrl: './sidenav-e.component.css'
})
export class SidenavEComponent implements OnInit{

  constructor(private router: Router) { }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;
  collapsed=false;
  navData=navbarDataE;

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
      this.screenWidth=window.innerWidth;
  }

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav():void{
    this.collapsed=false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
