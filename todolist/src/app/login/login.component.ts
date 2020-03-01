import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ="";
  password:string ="";
  msg:string ="";
  status:boolean = true;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  handlelogin(){
    if (this.username === "prasad" && this.password === "prasad@123") {
          this.status=true;
          this.route.navigate(["welcome",this.username]);  
      
    } else {
      this.status=false;
      this.msg="username and password went wrong";
    }

  }
}
