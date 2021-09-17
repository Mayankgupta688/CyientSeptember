import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-lifecycle',
  templateUrl: './child-lifecycle.component.html',
  styleUrls: ['./child-lifecycle.component.css']
})
export class ChildLifecycleComponent implements OnInit {

  @Input() userName: string;
  @Input() userAge: string;
  constructor() { 
    debugger;
  }

  ngOnInit(): void {
    debugger;
  }

  ngOnChanges(changes) {
    debugger;
  }

}
