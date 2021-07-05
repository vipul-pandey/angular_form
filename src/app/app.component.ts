import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  parentComponent(data:any){
    console.log(data)
    console.log(localStorage.getItem("name"))
  }
  // getUserValue(data:any)
  // {
  //   console.log(data.email)
  // }

}



