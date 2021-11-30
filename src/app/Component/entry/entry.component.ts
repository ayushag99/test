import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/interface/UserInterface';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  loading = false;
  constructor(private userService: UserService, private router: Router) {
    this.userService.createUserEvent.subscribe((user: UserInterface) => {
      this.registerNewUser(user);
    });
  }

  ngOnInit(): void {}

  registerNewUser(user: UserInterface) {
    this.loading = true;
    this.userService.registerNewUser(user).subscribe(
      (respose) => {
        console.log('User Successfully Registered');
        this.userService.loginHandler(user);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log('User registration failed');
      }
    );
    this.loading = false;
  }
}
