import { Component, OnInit } from '@angular/core';
import { Register } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register: Register = {

    name: "default",
    email: "default@test.com",
    pwd: "default@pwd.com"

  }
  constructor(){ }

  ngOnInit(): void {
   }

  onRegister(data:any){

      console.log(data.value)
      
    }

    

}
