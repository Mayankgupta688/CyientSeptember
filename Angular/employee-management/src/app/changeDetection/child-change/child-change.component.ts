import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-change',
  templateUrl: './child-change.component.html',
  styleUrls: ['./child-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildChangeComponent implements OnInit {

  @Input() userDetails: any;

  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    alert(this.userDetails.name)
  }

}
