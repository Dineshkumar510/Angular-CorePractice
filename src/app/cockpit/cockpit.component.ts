import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //newServerName = '';
  //newServerContent = '';

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('inputServerContent', {static: true}) inputServerContent: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput : HTMLInputElement) {
    //console.log(nameInput.value)
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.inputServerContent.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.inputServerContent.nativeElement.value,
    });
  }
}
