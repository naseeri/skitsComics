import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  userName = "TestUser";

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          console.log('Auth', this.userName);
          resolve(this.userName.length>0);
        }, 1000);
      }
    );

    return promise;
  }

}
