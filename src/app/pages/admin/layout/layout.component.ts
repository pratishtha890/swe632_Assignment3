import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
constructor(private router: Router){}
logout(){
  const confirmed = window.confirm('Do you really want to log out?');
  if (confirmed) {
    this.router.navigateByUrl('/login');
  }
}
OnContact(){
  this.router.navigate(['/landing']);
}
}
