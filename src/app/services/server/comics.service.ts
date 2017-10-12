import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Comic } from '../../models/comic.model';

const serverAddresses = {
  'main': "http://10.133.168.234:9999/"
};

const services = {
  "comics": "comic"
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
export class ComicsService {
  constructor(private http: Http) { }

  getComics() {
    return this.http.get(address(services.comics), {headers: headers})
      .map(
        (response: Response) => {
          const data: Comic[] = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw(error);
        }
      );
  }

  saveComic(name, description, imgData) {
    let data = {"name": name, "description": description, "imgData": imgData};
    return this.http.post(address(services.comics), data, {headers: headers});
  }
}
