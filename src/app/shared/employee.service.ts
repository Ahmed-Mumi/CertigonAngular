import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDto } from './employee-dto';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  formData: Employee;
  readonly rootURL = 'https://localhost:44313/api';
  list: EmployeeDto[];
  constructor(private http: HttpClient) {}

  postEmployee() {
    this.formData.DepartmentId = 1;
    return this.http.post(this.rootURL + '/employees', this.formData);
  }

  putEmployee() {
    this.formData.DepartmentId = 1;
    return this.http.put(this.rootURL + '/employees', this.formData);
  }
  deleteEmployee(id) {
    return this.http.delete(this.rootURL + '/employees/' + id);
  }
  refreshList() {
    this.http
      .get(this.rootURL + '/employees')
      .toPromise()
      .then((res) => (this.list = res as EmployeeDto[]));
  }
  getAllInActiveUsers(active: boolean) {
    this.http
      .get(this.rootURL + '/employees/' + active)
      .toPromise()
      .then((res) => (this.list = res as EmployeeDto[]));
  }
}
