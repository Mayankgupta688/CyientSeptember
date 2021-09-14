import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContainerComponent } from "./companyPage/containerComponent/container.component";
import { ContentComponent } from "./companyPage/contentComponent/content.component";
import { FooterComponent } from "./companyPage/footerComponent/footer.component";
import { HeaderComponent } from "./companyPage/headerComponent/header.component";
import { AppComponent } from "./components/app.component";
import { SecondComponent } from "./components/second.component";
import { ThirdComponent } from "./components/third.component";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ 
        AppComponent, 
        SecondComponent, 
        ThirdComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        ContainerComponent
    ],
    bootstrap: [ ContainerComponent ]
})
export class AppModule {}