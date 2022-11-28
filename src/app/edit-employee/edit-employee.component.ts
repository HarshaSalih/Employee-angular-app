import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  code=""

  readValues=()=>
  {
    let data:any={"code":this.code}
    console.log(data)
  }

}
