import { Component, OnInit } from '@angular/core';
import { EmployeeDto } from 'src/app/shared/employee-dto';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(public service: EmployeeService) {}
  employee: Employee;
  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(employeeDto: EmployeeDto) {
    this.employee = {
      Id: employeeDto.id,
      FirstName: employeeDto.firstName,
      LastName: employeeDto.lastName,
      IsActive: employeeDto.isActive,
      DepartmentId: employeeDto.departmentId,
    };
    this.service.formData = Object.assign({}, this.employee);
  }
  onDelete(id) {
    if (confirm('Are you sure?')) {
      this.service.deleteEmployee(id).subscribe(
        (res) => {
          this.service.refreshList();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  getAllActive(active) {
    this.service.getAllInActiveUsers(active);
  }
  getAllInactive(active) {
    this.service.getAllInActiveUsers(active);
  }
}
