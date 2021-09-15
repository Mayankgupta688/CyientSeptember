import { Component } from "@angular/core";

@Component({
    templateUrl: "container.component.html",
    selector: "container-component",
    styleUrls: ["container.component.css", "container.component.other.css"],
    styles: ["b {color: green}", "p { color: aqua }"]
})
export class ContainerComponent {
    companyName: string = "SpringPeople";
    userName: string = "Mayank Gupta";
    currentTime: string = ""

    constructor() {
        setInterval(() => {
            this.getTime();
        }, 1000)
    }

    getTime(){
        this.currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
}