import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'

import { AuthentService } from '../../../services/server/authent.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authentService:AuthentService, private router: Router ) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authentService.signupUser(email, password)
    .subscribe(
      (response: any) => {
        console.log("ServerResponse", response);
        this.router.navigate(['/']);
      }
    );
  }

}
