import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

  @Input() existence: string;
  @Input() designation: string;
  @Output() notifier: EventEmitter<any> = new EventEmitter();

  constructor() { 
    debugger;
  }

  ngOnInit(): void {
    debugger;
  }

  notifyChild() {
    debugger;
    this.notifier.emit({
      name: "Ankit Gupta",
      existence: "33",
      designation: "Indivisual"
    });
  }

}
