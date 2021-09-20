import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private _http: HttpClient, private _router: Router) { }
  empList: any = [];
  ngOnInit(): void {
    this._http.get("http://localhost:3000/employees").subscribe((data) => {
      this.empList = data;
    })
  }

  redirectToDetails(id: string, name: string) {
    debugger;
    this._router.navigate(['employeedetails', id, name]);
  }

}
