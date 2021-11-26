import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Certingon task';
  employees: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    // this.getEmployees();
  }

  // getEmployees() {
  //   this.http.get('https://localhost:44313/api/employees').subscribe(
  //     (response) => {
  //       this.employees = response;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
