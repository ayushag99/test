import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/interface/UserInterface';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  constructor(private userService: UserService, private route: Router) {
    this.isLoggedIn = this.userService.isLoggedIn
    this.isAdmin = this.userService.isAdmin
    this.userService.loginEvent.subscribe(
      (loginStatus: { isLoggedIn: boolean; isAdmin: boolean }) => {
        this.isLoggedIn = loginStatus.isLoggedIn;
        this.isAdmin = loginStatus.isAdmin;
        // this.ngOnInit();
      }
    );
  }

  ngOnInit(): void {}

  logout() {
    this.userService.logoutHandler();
    this.route.navigate(['']);
  }
}
