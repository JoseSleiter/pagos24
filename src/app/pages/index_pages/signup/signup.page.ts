import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  segmentModel = ""

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(){
    this.router.navigate(['/login']);
  }

  segmentChanged(event:any){
    console.log(event)
  }

}
