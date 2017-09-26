import { Injectable, EventEmitter } from '@angular/core';

import { Comic } from '../models/comic.model';
import { LoggingService } from './logging.service';

@Injectable()
export class ComicService {
  comicsChanged = new EventEmitter<Comic[]>();

  private comics: Comic[] = [
    new Comic("Rick n Morty", 'This is a test', 'http://2.bp.blogspot.com/-3tcNICbBDjA/VdRWmBoz2OI/AAAAAAAOsI4/UKNg-5LM5-k/s1600/11_01.jpg'),
    new Comic("Gravity Falls", 'This is yet another test', 'http://vignette4.wikia.nocookie.net/gravityfalls/images/f/f2/Gravity_Falls_Cinestory_Comic.jpg/revision/latest?cb=20160125235628')
  ];

  constructor(private logging: LoggingService) { }

  getComics() {
    return this.comics.slice();
  }

  addComic(data:Comic) {
    this.logging.log("Comic Created");
    
    this.comics.push(data);
    this.comicsChanged.emit(this.comics.slice());
  }

}
