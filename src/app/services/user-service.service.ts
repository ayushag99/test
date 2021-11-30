import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../models/interface/UserInterface';
import ServerConfig from '../config/server';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn = true;
  isAdmin = true;
  user: UserInterface | null = null;
  createUserEvent = new EventEmitter<UserInterface>();
  updateUserEvent = new EventEmitter<UserInterface>();
  loginEvent = new EventEmitter<{ isLoggedIn: boolean; isAdmin: boolean }>();
  logoutEvent = new EventEmitter<UserInterface>();

  constructor(private http: HttpClient) {
    // this.url = ServerConfig.userService;
  }

  registerNewUser(user: UserInterface) {
    return this.http.post(ServerConfig.users.registerUser(), sendingUser(user));
  }
  updateUser(user: UserInterface) {
    return this.http.patch(ServerConfig.users.updateUser(), sendingUser(user));
  }
  getUser(userId: number) {
    return this.http.get(ServerConfig.users.getUserById(userId));
  }
  deleteUser(userId: number) {
    return this.http.delete(ServerConfig.users.deleteUser(userId));
  }
  loginUser(data: { email_id: string; password: string }) {
    return this.http.post(ServerConfig.users.loginUser(), data);
  }
  adminLoginUser(data: { email_id: string; password: string }) {
    return this.http.post(ServerConfig.users.loginAdmin(), data);
  }

  //  User Login
  adminLoginHandler(user: UserInterface) {
    this.isLoggedIn = true;
    this.isAdmin = true;
    this.user = user;
    console.log(this.isLoggedIn);
    this.loginEvent.emit({
      isLoggedIn: this.isLoggedIn,
      isAdmin: this.isAdmin,
    });
  }
  loginHandler(user: UserInterface) {
    this.isLoggedIn = true;
    this.user = user;
    console.log(this.isLoggedIn);
    this.loginEvent.emit({
      isLoggedIn: this.isLoggedIn,
      isAdmin: this.isAdmin,
    });
  }
  logoutHandler() {
    this.isAdmin = false;
    this.isLoggedIn = false;
    this.loginEvent.emit({
      isLoggedIn: this.isLoggedIn,
      isAdmin: this.isAdmin,
    });
  }
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => [
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 800),
    ]);
    return promise;
  }
}

const sendingUser = (user: UserInterface) => {
  let newUser: {
    firstName: string;
    lastName: string;
    emailId: string;
    mobileNumber: number;
    password: string;
    nationality: string;
    passportNumber: string;
    permanentAddress: string;
    officeAddress: string;
    personalIdentificationNumber: number;
  } = {
    firstName: user.first_name,
    lastName: user.last_name,
    emailId: user.email_id,
    mobileNumber: user.mobile_number,
    password: user.password,
    nationality: user.nationality,
    passportNumber: user.passport_number,
    permanentAddress: user.permanent_address,
    officeAddress: user.Office_address,
    personalIdentificationNumber: user.personal_identification_number,
  };
  return newUser;
};
