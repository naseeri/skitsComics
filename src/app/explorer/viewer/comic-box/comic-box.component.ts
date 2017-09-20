import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../comic.model';

@Component({
  selector: 'app-comic-box',
  templateUrl: './comic-box.component.html',
  styleUrls: ['./comic-box.component.css']
})
export class ComicBoxComponent implements OnInit {
  @Input() comic: Comic;

  constructor() { }
  
  ngOnInit() {
  }

}