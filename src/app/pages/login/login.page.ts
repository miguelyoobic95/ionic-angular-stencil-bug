import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {
    this.router.navigateByUrl('tabs/(home:home)');
  }

  ngOnInit() {
  }

  login() {
  }
}
