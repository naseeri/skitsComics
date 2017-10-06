import { Component, OnInit, Input } from '@angular/core';

import { ComicBoxComponent } from './comic-box/comic-box.component';
import { Comic } from '../../../models/comic.model';
import { ComicService } from '../../../services/comic.service';
import { ComicsService } from '../../../services/server/comics.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  comics: Comic[];

  constructor(private comicServ: ComicService, private comicsServ: ComicsService ) { }

  ngOnInit() {
    this.comicsServ.getComics().subscribe(
      (response) => {
        console.log(response);
      }, 
      (error) => {
        console.log(error);
      }
    );

    this.comics = this.comicServ.getComics();
    this.comicServ.comicsChanged.subscribe(
      (comics: Comic[]) => {
        this.comics = comics;
      } 
    )
  }

}
