import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  code=""

  readValues=()=>
  {
    let data:any={"code":this.code}
    console.log(data)
  }

}
