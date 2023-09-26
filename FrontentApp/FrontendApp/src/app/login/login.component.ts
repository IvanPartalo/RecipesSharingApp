import { Component, Output, EventEmitter } from '@angular/core';
import { AuthResponse, AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommunicationService } from '../services/communication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  username: string = "";
  password: string = "";
  constructor(private authService: AuthService, private router: Router, private communicationService: CommunicationService){}
  LogIn(){
    this.authService.login({username: this.username, password: this.password}).subscribe({
      next: (data: AuthResponse) => {
        this.router.navigate(['/recipes']);
        this.communicationService.notifyParent()
      },
      error: (errorData) =>{
        alert('Wrong username and/or password')
      }
    })
  }
}
