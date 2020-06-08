import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn: boolean;
  user: User;
  admin: Admin;
  constructor() { }

  loginUser(user: User){
    this.user = user;
    this.loggedIn = true;
  }

  loginAdmin(admin: Admin){
    this.admin = admin;
    this.loggedIn = true;
  }
}
