import {
  Directive,
  ElementRef,
  Renderer,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective implements OnInit {
  @Input() defaultWidth: string = "10px";
  @Input() defaultHeight: string = "10px";
  @Input() zoomtWidth: string = "20px";
  @Input() zoomHeight: string = "20px";

  @HostBinding('style.width') width: string = this.defaultWidth;
  @HostBinding('style.height') height: string = this.defaultHeight;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.width = this.defaultWidth;
    this.height = this.defaultHeight;
  }

  @HostListener('click') click(eventData: Event) {
    this.width = this.zoomtWidth;
    this.height = this.zoomHeight;
  }

  @HostListener('document: click', ['$event', '$event.target']) documentClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.width = this.defaultWidth;
      this.height = this.defaultHeight;
    }
  }

}
