import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[delayRendering]'
})
export class DelayRenderingDirective {
    constructor(private _container: ViewContainerRef, private _template: TemplateRef<any>) {}
    
    ngOnInit() {
        debugger;
        setTimeout(() => {
            debugger;
            this._container.createEmbeddedView(this._template);
        }, 15000)
    }

}