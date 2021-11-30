import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';
import { UserInterface } from '../../../models/interface/UserInterface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() user!: UserInterface | null;
  isCreating = false;
  hide = true;

  userForm!: FormGroup;
  isAddressSame: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (!this.user) {
      this.isCreating = true;
    }
    this.userForm = new FormGroup({
      user_id: new FormControl(this.user ? this.user.user_id : ''),
      first_name: new FormControl(this.user ? this.user.first_name : '', [
        Validators.required,
      ]),
      last_name: new FormControl(this.user ? this.user.last_name : '', [
        Validators.required,
      ]),
      email_id: new FormControl(this.user ? this.user.email_id : '', [
        Validators.required,
        Validators.email,
      ]),
      mobile_number: new FormControl(this.user ? this.user.mobile_number : '', [
        Validators.required,
      ]),
      password: new FormControl(this.user ? this.user.password : '', [
        Validators.required,
      ]),
      nationality: new FormControl(this.user ? this.user.nationality : '', [
        Validators.required,
      ]),
      passport_number: new FormControl(
        this.user ? this.user.passport_number : '',
        [Validators.required]
      ),
      permanent_address: new FormControl(
        this.user ? this.user.permanent_address : '',
        [Validators.required]
      ),
      Office_address: new FormControl(
        this.user ? this.user.Office_address : '',
        [Validators.required]
      ),
      personal_identification_number: new FormControl(
        this.user ? this.user.personal_identification_number : '',
        [Validators.required]
      ),
    });
    this.userForm.controls['user_id'].disable();
  }

  onSubmit() {
    let user = new User(
      this.userForm.get('user_id')?.value,
      this.userForm.get('first_name')?.value,
      this.userForm.get('last_name')?.value,
      this.userForm.get('email_id')?.value,
      this.userForm.get('mobile_number')?.value,
      this.userForm.get('password')?.value,
      this.userForm.get('nationality')?.value,
      this.userForm.get('passport_number')?.value,
      this.userForm.get('permanent_address')?.value,
      this.userForm.get('Office_address')?.value,
      this.userForm.get('personal_identification_number')?.value
    );
    if (this.isCreating) {
      this.userService.createUserEvent.emit(user);
    } else if (!this.isCreating) {
      this.userService.updateUserEvent.emit(user);
    }
    // console.log(this.userForm);
  }
}
