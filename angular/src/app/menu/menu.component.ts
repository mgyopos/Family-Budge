import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/mainpage']);
    }
    catch (err) {
      console.log(err);
    }
  }

}