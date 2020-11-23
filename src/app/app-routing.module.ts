import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { SalaryListComponent } from './salary-list/salary-list.component';
import { CreateSalaryComponent } from './create-salary/create-salary.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { UsersComponent } from './admin/users/users.component';
import { BooksComponent } from './admin/books/books.component';
import { ShopbookComponent } from './shopbook/shopbook.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '', redirectTo: 'salary', pathMatch: 'full' },
  { path: '', redirectTo: 'leave', pathMatch: 'full' },
  
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },

  { path: 'salaries', component: SalaryListComponent },  
  { path: 'addsalary', component: CreateSalaryComponent },

  { path: 'leaves', component: LeaveListComponent },  
  { path: 'addleave', component: CreateLeaveComponent },

  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  // { path: 'admin', component: BoardAdminComponent },

  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/books', component: BooksComponent },
  { path: 'shop', component: ShopbookComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
