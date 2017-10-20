import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

const serverAddresses = {
  'main': "http://localhost:9999/"
};

const services = {
  "signup": "signup",
  "signin": "signin"

};

const address = function(service) {
  return serverAddresses.main + service;
}

const headers = new Headers(
  {
    'Content-Type': 'application/json'
  }
);

@Injectable()
export class AuthentService {
  constructor(private http: Http) { }

  signupUser(email: string, password: string) {
    let data = {"email": email, "password": password};
    return this.http.post(address(services.signup), data, {headers: headers});
  }

  signinUser(email: string, password: string) {3
    let data = {"email": email, "password": password};
    this.http.post(address(services.signup), data, {headers: headers})
    .map(
      (response: Response) => {
        console.log(response.json());
      }
    ).catch(
      (error: Response) => {
        console.log(error);
        return Observable.throw(error);
      }
    );
  }

}
