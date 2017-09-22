import { Component, OnInit } from '@angular/core';

import { Comic } from '../models/comic.model';

import { ComicService } from '../services/comic.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ComicService]
})
export class WelcomeComponent implements OnInit {
  title = 'Skits Comic Strips';
  comics: Comic[] = [];

  constructor(private comicServ: ComicService) { }

  ngOnInit() {
    this.comics = this.comicServ.comics;
  }

}
