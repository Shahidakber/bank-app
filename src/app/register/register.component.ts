import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
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
registerform=this.fb.group({ //formgroup
  acno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(5)]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  
})
  constructor(private dataservice:DataService,private router:Router ,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registers()
  {
    //if(this.registerform.get('acno')?.errors)
      if(this.registerform.valid)
      {
        var result=this.dataservice.register(this.registerform.value.acno,this.registerform.value.pwd)
        if(result)
        {
          this.router.navigateByUrl("")
        }
        else
        {
          this.router.navigateByUrl("")
        }
      }
    
    
      
      else
      {
        alert("invalid Forms")
      }

    //console.log(this.registerform.value);//to get value
  }
   
}
