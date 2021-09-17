import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userDetailsForm = new FormGroup({
    userName: new FormControl("Mayank Gupta", Validators.required),
    userId: new FormControl("101", [Validators.required, Validators.min(103)])
  });

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submitData() {

    debugger;

    this._httpClient.post("http://localhost:3000/employees/", {
      name: this.userDetailsForm.get("userName").value,
      id: this.userDetailsForm.controls.userId.value,
      createdAt: "Today",
      avatar: "None"
    }).subscribe(() => {
      alert("Employee Added...")
    }, () => {
      alert("Not a Unique Id");
    })
  }

}
