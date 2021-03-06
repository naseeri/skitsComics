import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Comic } from '../../../../models/comic.model';

@Component({
  selector: 'app-comic-box',
  templateUrl: './comic-box.component.html',
  styleUrls: ['./comic-box.component.css']
})
export class ComicBoxComponent implements OnInit {
  @Input() comic: Comic;

  constructor() { }
  
  ngOnInit() { }

  imageAddress(img:string) {
    const address = "http://10.133.168.234:9999/";
    return address + img;
  }

}
