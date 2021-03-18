import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno=""
  pwd=""

  constructor(private dataservice:DataService,private router:Router ) { }

  ngOnInit(): void {
  }
  register()
  {
    var result=this.dataservice.register(this.acno,this.pwd)
    if(result)
    {
      this.router.navigateByUrl("")
    }
    else
    {
      this.router.navigateByUrl("")
    }
  }


}
