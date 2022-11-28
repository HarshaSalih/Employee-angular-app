import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  code=""
  name=""
  Designation=""
  Salary=""
  phone=""
  email=""
  companyWebsite=""
  yearOfExperience=""


  readValues=()=>
  {
    let data:any={"code":this.code,"name":this.name,"Designation":this.Designation,"Salary":this.Salary,"phone":this.phone,"email":this.email,"companyWebsite":this.companyWebsite,"yearOfExperience":this.yearOfExperience}
    console.log(data)
  }

}
