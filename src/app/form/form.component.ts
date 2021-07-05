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
    if(data==""){
      alert("Please fill all field")
    }
    else{
      alert("Form submitted successfully")
  
      console.log(data)
  
      localStorage.setItem("name", data.name)
      localStorage.setItem("age", data.age)
      localStorage.setItem("email", data.email)
      localStorage.setItem("dob", data.dob)
      data.value=""
    }
  

  }
  
  resetfields($event:any){
    console.log("reset button")
  }

  ngOnInit(): void {
    // this.parentComponent.emit({
    //   name: 'data.name',
    //   age: 'data.age'
    // })
  }
}




