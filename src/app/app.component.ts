import { Component } from '@angular/core';
import { UserInterface } from './models/interface/UserInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ftr-frontend';
  user: UserInterface;

  constructor() {
    this.user = {
      user_id: 1,
      first_name: 'Ayush',
      last_name: 'Agrawal',
      email_id: 'ayuh@mail.com',
      mobile_number: 789798,
      password: '4444',
      nationality: 'Indian',
      passport_number: 'dfsdfd',
      permanent_address: 'dsfsdffs',
      Office_address: 'dfsdfsdf',
      personal_identification_number: 4878,
    };
  }
}
