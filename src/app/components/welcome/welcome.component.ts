import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Skits Comic Strips';

  constructor(private authService: AuthService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() { }

  checkUserName() {
    if(this.authService.userName.length<1) {
      return true;
    } else {
      return false;
    }
  }

  onCreate() {
    this.router.navigate(['creator/editor'], {relativeTo: this.route});
  }

}
