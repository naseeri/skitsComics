import { Component, OnInit, Input } from '@angular/core';

import { ComicBoxComponent } from './comic-box/comic-box.component';

import { Comic } from '../comic.model';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @Input() comics: Comic[];

  constructor() { }

  ngOnInit() {
  }

}
