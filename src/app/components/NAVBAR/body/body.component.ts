import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  @Input() collapsed=false;
  @Input() screenWidth = 0;

  constructor(private router: Router) { }


  getBodyClass():string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }

    return styleClass;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
