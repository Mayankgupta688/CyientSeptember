import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ContainerComponent } from "./companyPage/containerComponent/container.component";
import { ContentComponent } from "./companyPage/contentComponent/content.component";
import { FooterComponent } from "./companyPage/footerComponent/footer.component";
import { HeaderComponent } from "./companyPage/headerComponent/header.component";
import { AppComponent } from "./components/app.component";
import { SecondComponent } from "./components/second.component";
import { ThirdComponent } from "./components/third.component";
import { EventBindingComponent } from './containers/event-binding/event-binding.component';
import { ImplementBootstrapComponent } from './containers/implement-bootstrap/implement-bootstrap.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ 
        AppComponent, 
        SecondComponent, 
        ThirdComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        ContainerComponent,
        EventBindingComponent,
        ImplementBootstrapComponent,
        EmployeeListComponent
    ],
    bootstrap: [ EmployeeListComponent ]
})
export class AppModule {}