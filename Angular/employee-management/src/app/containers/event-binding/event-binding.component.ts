import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  currentTime: string = "";
  currentCount: number = 0;

  constructor() {
    setInterval(() => {
        this.getTime();
    }, 1000)
  }

  getTime(){
      this.currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
  } 

  incrementCounter(event: any) {
    event.target.style.color = "red";
    this.currentCount = this.currentCount + 1;
  }

}
