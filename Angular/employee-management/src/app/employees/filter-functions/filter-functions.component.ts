import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-functions',
  templateUrl: './filter-functions.component.html',
  styleUrls: ['./filter-functions.component.css']
})
export class FilterFunctionsComponent implements OnInit {

  userName: string = "May@ank_Gup,ta";
  salary: number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
