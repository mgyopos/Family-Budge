import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  async submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    try {
      this.message = "Try to register!";
      await this.authService.register(this.user);
      console.log("User következik");
      console.log(this.user);
      this.router.navigate([this.authService.redirectUrl || '/mytransactions']);
    }
    catch (err) {
      this.message = "register failed!";
      console.log(err);
    }
  }


}
///////////////////////////////////////////////////
