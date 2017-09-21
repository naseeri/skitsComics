import { Component, OnInit } from '@angular/core';

import { Comic } from '../explorer/comic.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Skits Comic Strips';
  comics: Comic[] = [
    new Comic("Rick n Morty", 'This is a test', 'http://2.bp.blogspot.com/-3tcNICbBDjA/VdRWmBoz2OI/AAAAAAAOsI4/UKNg-5LM5-k/s1600/11_01.jpg'),
    new Comic("Gravity Falls", 'This is yet another test', 'http://vignette4.wikia.nocookie.net/gravityfalls/images/f/f2/Gravity_Falls_Cinestory_Comic.jpg/revision/latest?cb=20160125235628')
  ];

  onComicAdded(data:Comic) {
    console.info(data);
    this.comics.push(data);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
