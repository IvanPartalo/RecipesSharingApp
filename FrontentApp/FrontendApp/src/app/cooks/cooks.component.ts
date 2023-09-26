import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CookRow } from '../model/cook-row.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cooks',
  templateUrl: './cooks.component.html',
  styleUrls: ['./cooks.component.css']
})
export class CooksComponent implements OnInit{
  displayedColumns: string[] = ['username', 'firstname', 'lastname', 'recipes', 'action'];
  cooks: CookRow[]=[]
  constructor(private userService: UserService, private router: Router){}
  ngOnInit(): void {
    this.getCooks()
  }
  getCooks(){
    this.userService.getCooks().subscribe((responseData : CookRow[]) =>{
      this.cooks = responseData;
    });
  }
  goToCook(username: string){
    this.router.navigate(['/cook', username]);
  } 
}
