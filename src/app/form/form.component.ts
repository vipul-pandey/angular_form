import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // @Output() parentComponent: EventEmitter<any> = new EventEmitter()

  constructor() { }

  getUserValue(data: any) {
    console.log(data)

    localStorage.setItem("name", data.name)
    localStorage.setItem("age", data.age)
    localStorage.setItem("email", data.email)
    localStorage.setItem("dob", data.dob)

  }

  ngOnInit(): void {
    // this.parentComponent.emit({
    //   name: 'data.name',
    //   age: 'data.age'
    // })
  }
}




