import { Observable } from "rxjs";
import { SalaryService } from "./../salary.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  leaves: Observable<Leave[]>;

  constructor(private leaveService: LeaveService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }


/*    reloadData() {
 this.salaryService.getSalariesList()
    .subscribe(
      data => {
        this.salaries=data;
        console.log(data);
          },
      error => console.log(error));
    
  }  */


  reloadData() {
    this.leaves = this.leaveService.getLeavesList()
    
  }

  deleteLeave(id: number) {
    this.leaveService.deleteLeave(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 
  leaveDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateLeave(id: number){
    this.router.navigate(['update', id]);
  }
 
}
