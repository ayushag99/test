import { UserInterface } from './interface/UserInterface';

export class User implements UserInterface {
  user_id: number;
  first_name: string;
  last_name: string;
  email_id: string;
  mobile_number: number;
  password: string;
  nationality: string;
  passport_number: string;
  permanent_address: string;
  Office_address: string;
  personal_identification_number: number;

  constructor(
    user_id: number,
    first_name: string,
    last_name: string,
    email_id: string,
    mobile_number: number,
    password: string,
    nationality: string,
    passport_number: string,
    permanent_address: string,
    Office_address: string,
    personal_identification_number: number
  ) {
    this.user_id = user_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email_id = email_id;
    this.mobile_number = mobile_number;
    this.password = password;
    this.nationality = nationality;
    this.passport_number = passport_number;
    this.permanent_address = permanent_address;
    this.Office_address = Office_address;
    this.personal_identification_number = personal_identification_number;
  }

}
