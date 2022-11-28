import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  name=""
  Designation=""
  Salary=""


  readValues=()=>
  {
    let data:any={
      "name":this.name,
      "Designation" :this.Designation,
      "Salary" :this.Salary
    }
    console.log(data)
  }

}
