import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno=""
  pwd=""

  constructor() { }

  ngOnInit(): void {
  }
  register()
  {
    alert("succesful")
    console.log(this.acno,this.pwd);
    
  }


}
