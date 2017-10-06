import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const serverAddress = "http://localhost:9000/";
const serverAddressNode = "http://localhost:80/";
const services = {
  "comics": "comics",
  "test": "test"
};

const address = function(service) {
  let server = serverAddress;
  return server + service;
}

@Injectable()
export class ComicsService {
  constructor(private http: Http) { }

  getComics() {
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      });
    return this.http.get(address(services.comics), {headers: headers});
  }
}
