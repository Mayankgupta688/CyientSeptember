import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-change',
  templateUrl: './parent-change.component.html',
  styleUrls: ['./parent-change.component.css']
})
export class ParentChangeComponent implements OnInit {

  userDetails = {
    name: "Mayank Gupta",
    age: 33,
    designation: "Developer"
  }

  changeUserName() {
    this.userDetails.name = "Anshul Gupta"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
