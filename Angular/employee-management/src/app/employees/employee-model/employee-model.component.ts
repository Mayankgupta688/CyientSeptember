import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-employee-model',
  templateUrl: './employee-model.component.html',
  styleUrls: ['./employee-model.component.css']
})
export class EmployeeModelComponent {

  dataObservable = new Observable((observers) => {
    setInterval(() => {
      observers.next(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
    }, 1000)
  })

  currentTime: string = "";

  constructor(private _dataService: DataService) {

    var getObservable = this._dataService.getData();

    debugger;
    console.log("sdaydiasyd")
    
    
    getObservable.subscribe((data: any) => {
      debugger;
      this.empMasterList = data;
      this.empList = [...data];
    });

    this._dataService.listUpdatedEventEmitter.subscribe((eventName) => {
      this.empMasterList = this._dataService.employeeList;
      this.empList = [...this.empMasterList];
    })

    this.dataObservable.subscribe((data: any) => {
      this.currentTime = data;
    })

    this.dataObservable.subscribe((data: any) => {
      console.log(data);
    })
  }

  imageUrl: string = "https://images.unsplash.com/photo-1579256945823-f007794790df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wbG95ZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80;"
  imageTitle = "TechnoFunnel";
  imageAlTText = "Some Image";

  imageClass = "card-img-top";

  empMasterList: any[] = [];
  empList: any[] = [];

  filterText: string = "";
  filterTextOther: string = "";

  getInfo(updatedText: string) {
    this.filterText = updatedText;

    this.empList = this.empMasterList.filter((employee) => {
      return employee.name.indexOf(this.filterText) > -1;
    })
  }

  deleteEmployee(empId: any) {
    this._dataService.deleteEmployee(empId);
  }

  getChange() {
    alert(this.filterTextOther)
  }

}
