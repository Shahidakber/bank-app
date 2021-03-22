import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

accno="Enter account number"
pwd=""


  constructor(private router:Router,private dataservice:DataService)
     { }

  ngOnInit(): void {
  }
  // getUsername(event:any)
  // {
  //    this.accno = event.target.value
  //    console.log(this.accno);
     
  // }
  // getPassword(event:any)
  // {
  //   this.pwd=event.target.value
  //   console.log(this.pwd);
    
  // }
login()
{
  
  {
   
    var accno =this.accno // var accno =this.uname
    let pwd = this.pwd   //let pwd = this.pwd
    var dataset=this.dataservice.accountDetails
    if (accno in dataset) {
      var pwd1=dataset[accno].password
      if(pwd1==pwd)
      {
        alert("login successful")
        this.router.navigateByUrl("dashboard")
      }
        
        else {
            alert("invalid password")
        }
      }
    else{
         alert("Invalid login details")
        }
    }

  
}
}
