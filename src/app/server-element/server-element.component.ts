import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,AfterViewInit {

  @Input('srvElement') element: {i:number; type: string; name: string, content: string};
  @Output() deleteElement = new EventEmitter();
  @ViewChild('heading', {static: true}) heading;
  @ContentChild ('contentParagraph', {static: true}) contentParagraph : ElementRef;
   constructor() { }

  ngOnInit(): void {
    console.log('Content : ', this.heading.nativeElement.textContent);
    console.log('Content : ', this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('Content : ', this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('Content : ', this.heading.nativeElement.textContent);
  }


  Delete($event){
    this.deleteElement.emit();
  }

}
