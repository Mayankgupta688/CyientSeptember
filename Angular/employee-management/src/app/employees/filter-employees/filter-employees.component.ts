import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-employees',
  templateUrl: './filter-employees.component.html',
  styleUrls: ['./filter-employees.component.css']
})
export class FilterEmployeesComponent implements OnInit {
  empList : any = [];
  filterText: string = "";
  constructor(private _dataService: DataService) { 
    this.empList = this._dataService.employeeList;
  }

  ngOnInit(): void {
  }

}
