import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-http',
  templateUrl: './employee-http.component.html',
  styleUrls: ['./employee-http.component.css']
})
export class EmployeeHttpComponent {
  empList: any = [];

  newUserName: string = "";
  newUserId: string = "";

  constructor(private _httpClient: HttpClient) { 
  }

  ngOnInit() {
    this._httpClient.get("http://localhost:3000/employees").subscribe((data) => {
      this.empList = data;
    })
  }
  
  imageClass = "card-img-top";

  deleteEmployee(empId: any) {
    this._httpClient.delete("http://localhost:3000/employees/" + empId).subscribe(() => {
      alert(`Employee with Id: ${empId} Deleted from the Database....`);
      this._httpClient.get("http://localhost:3000/employees").subscribe((data) => {
        this.empList = data;
      })
    })
  }

  addEmployee() {
    debugger;
    this._httpClient.post("http://localhost:3000/employees/", {
      name: this.newUserName,
      id: this.newUserId,
      createdAt: "Today",
      avatar: "None"
    }).subscribe(() => {
      this._httpClient.get("http://localhost:3000/employees").subscribe((data) => {
        this.empList = data;
      })
    })
  }

}
