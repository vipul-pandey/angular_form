import { Component, OnInit } from '@angular/core';

export class MyItems {
  Value: string;
  constructor(Value: string) {
    this.Value = Value;
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  myItems: MyItems[] = new Array();
  name = localStorage.getItem("name")
  age = localStorage.getItem("age")
  email = localStorage.getItem("email")
  dob = localStorage.getItem("dob")


  constructor() {
  }

  ngOnInit(): void {
  }

  getVal() {
    return this.name, this.age, this.email, this.dob
  }
}
