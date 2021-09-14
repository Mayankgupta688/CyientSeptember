import { Component } from "@angular/core";

@Component({
    selector: "app-second-component",
    template: "<h3>This is second Angular Component</h3><app-third-component></app-third-component>"
})
export class SecondComponent { }