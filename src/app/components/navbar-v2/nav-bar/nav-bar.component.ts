import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports:[MatSidenavModule, MatListModule, MatIconModule, RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent implements OnInit {
  


  userPhoto = 'path/to/user/photo.jpg'; // Replace with actual path
  userName = 'John Doe'; // Replace with actual user name

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch user info if needed
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
