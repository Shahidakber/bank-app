import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: any;
  constructor() { 
   this.getDetails()


  }
  accountDetails: any = {
    1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
    1002: { acno: 1002, name: "usertwo", balance: 3000, password: "user2" },
    1003: { acno: 1003, name: "userthree", balance: 3000, password: "user3" },
    1004: { acno: 1004, name: "userfour", balance: 3000, password: "user4" },
    1005: { acno: 1005, name: "userfive", balance: 3000, password: "user5" }
  }
  saveDetails(){
    localStorage.setItem("Accountdetails",JSON.stringify(this.accountDetails))
    localStorage.setItem("CurrentUser",JSON.stringify(this.currentUser))
  }
  getDetails()
  {
    this.accountDetails=localStorage.getItem("Accountdetails")
    this.currentUser=localStorage.getItem("CurrentUser")
  }



  register(acno: any, password: any) {
    if (acno in this.accountDetails) {
      alert("user exist")
      return false;
    }
    else {
      this.accountDetails[acno] = {
        acno,
        balance: 0,
        password
      }
      this.saveDetails();
      alert("Registration sucessful")
      console.log(this.accountDetails);
      return true;
    }
  }
  deposit(acno: any, pwd: any, amt: any) {
    var amount = parseInt(amt)
    let dataset = this.accountDetails;
    if (acno in dataset) {
      var pswd1 = dataset[acno].password

      if (pswd1 == pwd) {
        dataset[acno].balance += amount;
        alert("Account credited with amount: " + amount + " New balance is: " + dataset[acno].balance)
      }
      else {
        alert("Invalid Password")
      }
    }
    else {
      alert("INVALID DATA")
    }

  }
  login(accno: any, pwd: any) {
    let dataset = this.accountDetails;
    if (accno in dataset) {
      var pswd1 = dataset[accno].password
      this.currentUser = dataset[accno].name
      if (pswd1 == pwd) {
        alert("Login successful")
        return true
      }
      else {
        alert("Invalid Password")
        return false
      }
    }
    else {
      alert("INVALID DATA")
      return false
    }
  }
  withdraw(acno: any, pwd: any, amt: any) {
    var amount = parseInt(amt)
    let dataset = this.accountDetails;
    if (acno in dataset) {
      var pswd1 = dataset[acno].password

      if (pswd1 == pwd) {
        if (amount > dataset[acno].balance) {
          alert("Insufficient Balance")
        }
        else {
          dataset[acno].balance -= amount;
          alert("Account debited with amount: " + amount + " New balance is: " + dataset[acno].balance)
        }
      }
      else {
        alert("Invalid Password")
      }
    }
    else {
      alert("INVALID DATA")
    }

  }
}