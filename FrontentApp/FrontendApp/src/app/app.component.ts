import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunicationService } from './services/communication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userNotLogedIn: boolean = false;
  isAdmin: boolean = false;
  isCook: boolean = false;
  isOrdinaryUser: boolean = false;
  userTypeToRegister: string = ""
  userSub: Subscription = new Subscription()
  constructor(private authService: AuthService, private router: Router, private communicationService: CommunicationService){
    this.communicationService.notifyParent$.subscribe(()=>{
      this.UpdateMenu()
    })
  }
  ngOnInit(): void {
    this.UpdateMenu()
  }
  UpdateMenu(){
    this.isAdmin = false
    this.isCook = false
    this.isOrdinaryUser = false
    this.userNotLogedIn = false
    this.authService.logInAuto()
    this.userSub = this.authService.user.subscribe({
      next: (data) => {
        if(data == null){
          this.userNotLogedIn = true
          this.userTypeToRegister = "user"
          return;
        }
        else if(data?.userRoles.at(0) == 'Admin'){
          this.isAdmin = true
          this.userTypeToRegister = "cook"
        }
        else if(data?.userRoles.at(0) == 'User'){
          this.isOrdinaryUser = true
        }
        else if(data?.userRoles.at(0) == 'Cook'){
          this.isCook = true          
        }
      }
    })
  }
  LogOut(){
    this.authService.logOut()
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/login']);
      this.UpdateMenu()
    }); 
  }
}
