import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  data:any=[
    {
      "name":"Harsha",
      "Designation" : "Software Engineer",
      "Salary" : 25000
    },
    {
      "name":"Rahul",
      "Designation" : "Software Developer",
      "Salary" : 35000
    },
    {
      "name":"Rupesh",
      "Designation" : "HR",
      "Salary" : 50000
    },
    {
      "name":"Arya",
      "Designation" : "Software Engineer",
      "Salary" : 25000
    },
    {
      "name":"Veena",
      "Designation" : "Software Engineer",
      "Salary" : 25000
    },
    {
      "name":"Veena",
      "Designation" : "Software Engineer",
      "Salary" : 25000
    },
    {
      "name":"Veena",
      "Designation" : "Software Engineer",
      "Salary" : 25000
    }
  ]

}