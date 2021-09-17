import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  eventNotifier = new EventEmitter()

  userInfo = {
    name: "TechnoFunnel",
    existence: "1",
    designation: "Organisation"
  }

  constructor() {
    this.eventNotifier.subscribe(() => {
      debugger;
      this.updateData();
    })
  }

  updateData() {
    debugger;
    this.userInfo = {
      name: "Mayank Gupta",
      existence: "33",
      designation: "Indivisual"
    }
  }


}
