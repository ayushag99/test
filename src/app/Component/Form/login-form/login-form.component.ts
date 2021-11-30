import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from 'src/app/models/interface/UserInterface';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  hide = true;
  errorMessage: string = '';
  loginForm!: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email_id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    let data = {
      email_id: this.loginForm.get('email_id')?.value,
      password: this.loginForm.get('password')?.value,
    };
    if (this.route.snapshot.routeConfig!.path === 'admin') {
      this.userService.adminLoginUser(data).subscribe((response) => {
        let user = response as UserInterface;
        if (user != null) {
          this.userService.adminLoginHandler(user);
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.errorMessage = 'Incorrect User Name or Password';
        }
      });
    } else {
      this.userService.loginUser(data).subscribe((response) => {
        let user = response as UserInterface;
        if (user != null) {
          this.userService.loginHandler(user);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Incorrect User Name or Password';
        }
      });
    }
  }
}
