import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isActiveToggleTextPassword: Boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goRegister(){
    this.router.navigate(['/signup']);
  }

  golanguage(){
    this.router.navigate(['/language']);
  }

  changePasswordText(){
    console.log("AAAAAAA")
  }

  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
  }
}
