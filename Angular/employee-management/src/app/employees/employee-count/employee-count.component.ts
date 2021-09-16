import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  empCount: number = 0;

  constructor(private _dataService: DataService) { 
    this.empCount = this._dataService.employeeList.length;

    this._dataService.listUpdatedEventEmitter.subscribe((eventName) => {
      this.empCount = this._dataService.employeeList.length;
    })
  }

  ngOnInit(): void {
  }

}
