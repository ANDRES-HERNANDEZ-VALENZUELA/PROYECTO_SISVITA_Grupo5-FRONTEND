import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  studentName: string | null='';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.studentName = localStorage.getItem('studentName') || 'Estudiante';
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
