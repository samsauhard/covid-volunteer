import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent_ implements OnInit {

  constructor(route: ActivatedRoute,private router :Router) {
    
   }

  ngOnInit(): void {
  }

  dashBoard(){
        this.router.navigate(['dashboard']);

  }

  forHelpRoute(){
        this.router.navigate(['for-covidhelp']);

  }
  needHelpRoute(){
        this.router.navigate(['need-covidhelp']);

  }

  routeHome(){
  	        this.router.navigate(['home']);

  }

}
