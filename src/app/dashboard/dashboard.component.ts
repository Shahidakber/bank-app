import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno="username"
 // private login:LoginComponent
  constructor() { }

  ngOnInit(): void {
  }
  //acno=this.login.accno
  


}
