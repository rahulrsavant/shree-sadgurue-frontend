import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { EmployeeService } from '../employee.service';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.css']
})

export class CreateLeaveComponent implements OnInit {

  employees: Observable<Employee[]>;
  leaves: Observable<Leave[]>;
  employee: Employee = new Employee();

  leave: Leave = new Leave();



  submitted = false;
  test: String = "test";


  constructor(private leaveService: LeaveService,
    private router: Router, private employeeService: EmployeeService) { }


  ngOnInit() {
    this.employees = this.employeeService.getEmployeesList();
  }


  reloadData() {
    this.employees = this.employeeService.getEmployeesList();

  }

  newSalary(): void {
    this.submitted = false;
    this.employee = new Employee();

    this.leave = new Leave();
  }

  save() {
   // this.salary.employee = this.employee;
   this.leave.employeeId = this.employee.id;
    this.leaveService.createLeave(this.leave)
      .subscribe(data => 
        { 
          console.log(data) //,
         // this.employee.salaries.concat(this.salary) 
        },

        error => console.log(error));
    this.gotoList();
  }

  employeeChanged(id: number): void {
    this.employeeService.getEmployee(id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;        
      }, error => console.log(error));
       console.log(this.leave);
  }



  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/leaves']);
  }
}

