import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.css']
})
export class ParentOutputComponent {

  userInfo = {
    name: "TechnoFunnel",
    existence: "1",
    designation: "Organisation"
  }

  constructor() { }

  updateData(inputData) {
    debugger;
    this.userInfo = inputData
  }

}
