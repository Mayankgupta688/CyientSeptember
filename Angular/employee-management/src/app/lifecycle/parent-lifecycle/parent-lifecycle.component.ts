import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-lifecycle',
  templateUrl: './parent-lifecycle.component.html',
  styleUrls: ['./parent-lifecycle.component.css']
})
export class ParentLifecycleComponent implements OnInit {

  constructor() { 
    debugger;
  }

  userName: string = "Mayank Gupta";
  userAge = "10";
  userDesignation = "Developer";

  updateData() {
    this.userName = "Anshul Gupta"
    this.userAge = "20"
  }

  ngOnChanges(changes) {
    debugger;
  }

  ngOnInit(): void {
    debugger;
  }

}
