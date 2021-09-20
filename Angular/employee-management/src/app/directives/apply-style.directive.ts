import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[applyColor]"
})
export class ApplyStyleDirective {
    constructor(private element: ElementRef) {
        this.element.nativeElement.style.color = "red";
        this.element.nativeElement.style.border = "1px solid red";
        this.element.nativeElement.style.padding = "10px";
        this.element.nativeElement.style.margin = "20px";
    }
}