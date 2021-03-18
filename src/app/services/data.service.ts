import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  accountDetails:any = {
    1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
    1002: { acno: 1002, name: "usertwo", balance: 3000, password: "user2" },
    1003: { acno: 1003, name: "userthree", balance: 3000, password: "user3" },
    1004: { acno: 1004, name: "userfour", balance: 3000, password: "user4" },
    1005: { acno: 1005, name: "userfive", balance: 3000, password: "user5" }
}
}
