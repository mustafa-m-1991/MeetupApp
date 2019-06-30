import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service' ;
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.model).subscribe( next => {
      this.alertifyService.success('Logged in successfully');

    }, error => {
      this.alertifyService.error(error);
    }, () => {
      this.router.navigate(['/events']);

    });
  }

  loggedIn() {
    return this.authService.loggedIn();

  }

  loggedOut() {
    const token = localStorage.removeItem('token');
    this.alertifyService.message('Logged out');
    this.router.navigate(['/']);
  }





}
