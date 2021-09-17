import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { EmployeeModelComponent } from './employees/employee-model/employee-model.component';
import { EmployeeCountComponent } from './employees/employee-count/employee-count.component';
import { EmployeeHttpComponent } from './employees/employee-http/employee-http.component';
import { HttpClientModule } from "@angular/common/http";
import { FilterFunctionsComponent } from './employees/filter-functions/filter-functions.component';
import { TransformPipe } from "./pipes/transform-value.pipe";
import { FilterEmployeesComponent } from './employees/filter-employees/filter-employees.component';
import { EmployeeFilterPipe } from "./pipes/employee-filter.pipe";
import { DelayRenderingDirective } from "./directives/delay-rendering.directive";
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { ParentOutputComponent } from './communication/parent-output/parent-output.component';
import { ChildOutputComponent } from './communication/child-output/child-output.component';
import { ParentLifecycleComponent } from './lifecycle/parent-lifecycle/parent-lifecycle.component';
import { ChildLifecycleComponent } from './lifecycle/child-lifecycle/child-lifecycle.component';
import { ReactiveFormComponent } from './reactive/reactive-form/reactive-form.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
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
        EmployeeListComponent,
        EmployeeModelComponent,
        EmployeeCountComponent,
        EmployeeHttpComponent,
        FilterFunctionsComponent,
        TransformPipe,
        FilterEmployeesComponent,
        EmployeeFilterPipe,
        DelayRenderingDirective,
        ParentComponent,
        ChildComponent,
        ParentOutputComponent,
        ChildOutputComponent,
        ParentLifecycleComponent,
        ChildLifecycleComponent,
        ReactiveFormComponent
    ],
    bootstrap: [ ReactiveFormComponent ]
})
export class AppModule {}