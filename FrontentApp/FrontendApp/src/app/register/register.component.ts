import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { RegisterUser } from '../model/registeruser.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userTypeToRegister: string = "";
  sub: any
  username: string = "";
  firstName: string = "";
  lastName: string = "";
  password: string = "";
  confirmPassword: string = "";
  errorInfo: string = "";
  title: string = "Register"
  isRegisterCook: boolean = false
  isRegisterUser: boolean = false
  constructor(private activatedRoute: ActivatedRoute, private registerService: RegisterService, private router: Router){}
  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
    this.userTypeToRegister = params['userTypeToRegister'];
    if(this.userTypeToRegister == 'cook'){
      this.title = "Register cook"
      this.isRegisterCook = true
    }
    else{
      this.isRegisterUser = true
    }
    });
  }
  register() {
    this.errorInfo = ""
    if(!this.username){
      this.errorInfo = "username is required";
      return;
    }
    if(!this.firstName){
      this.errorInfo = "first name is required";
      return;
    }
    if(!this.lastName){
      this.errorInfo = "last name is required";
      return;
    }
    if(!this.password){
      this.errorInfo = "password is required";
      return;
    }
    if(!this.confirmPassword){
      this.errorInfo = "repeat password";
      return;
    }
    if(this.password != this.confirmPassword){
      this.errorInfo = "passwords must match"
      return;
    }
    if(this.isRegisterCook){
      this.registerCook()
    }
    else{
      this.registerUser()
    }
  }
  registerCook(){
    this.registerService.registerCook(new RegisterUser(this.username, this.firstName, this.lastName, this.password)).subscribe({
      next: (data) => {
        alert('Cook registered') 
        this.router.navigate(['recipes'])
      } ,
      error: (data) => {
        if(data.status == 500){
          this.errorInfo = "User with that username already exists, choose different one"
        }
        if(data.status == 400){
          this.errorInfo = "Password must contain at least 8 characters, including at least one letter, number and non aplhanumeric sign"
        }
      }
      })
  }
  registerUser(){
    this.registerService.registerUser(new RegisterUser(this.username, this.firstName, this.lastName, this.password)).subscribe({
      next: (data) => {
        alert('User registered you will be redirected to login page') 
        this.router.navigate(['login'])
      } ,
      error: (data) => {
        if(data.status == 500){
          this.errorInfo = "User with that username already exists, choose different one"
        }
        if(data.status == 400){
          this.errorInfo = "Password must contain at least 8 characters, including at least one letter, number and non aplhanumeric sign"
        }
      }
      })
  }
}
