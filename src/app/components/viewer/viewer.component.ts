import { Component, OnInit, Input } from '@angular/core';

import { ComicBoxComponent } from '../comic-box/comic-box.component';

import { Comic } from '../../models/comic.model';

import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  comics: Comic[];

  constructor(private comicServ: ComicService) { }

  ngOnInit() {
    this.comics = this.comicServ.getComics();
    this.comicServ.comicsChanged.subscribe(
      (comics: Comic[]) => {
        this.comics = comics;
      } 
    )
  }

}
