import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public service: EmployeeService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      Id: 0,
      FirstName: '',
      LastName: '',
      IsActive: true,
      DepartmentId: 1,
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putEmployee().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
