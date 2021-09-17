import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() existence: string;
  @Input() designation: string;
  @Input() notifier: EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {
  }

  notifyParent() {
    this.notifier.emit()
  }

}
