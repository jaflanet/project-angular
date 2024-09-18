import { Injectable } from '@angular/core';
import { userDataPublic } from '../../app/user.data';
import { DataUser } from '../../app/app.entity';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  userData = userDataPublic;

  constructor() {}

  getUser() {
    return this.userData;
  }

  addUser(data: DataUser) {
    this.userData.push(data);
  }
}
