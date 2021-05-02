import { Component } from '@angular/core';
import { SE } from './directives/scroll.directive';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
contactFabButton: any;
  bodyelement: any;
  sidenavelement: any;

  isActive = false;
  isActivefadeInDown = true;
  fixedTolbar = true;

	mobileQuery: any ;
username : any;
	counter = 0;

	

messageReceived: any;
        private subscriptionName: any; 
    constructor(
    public dialog: MatDialog, private router :Router) {
}

   

  ngOnInit(): void {
  	this.username = localStorage.getItem('username');
  	console.info("ccw");

  	    



  }

  public detectScroll(event: SE) {
    
    if (event.header) {
      this.isActive = false;
      this.isActivefadeInDown = true;
      this.fixedTolbar = true;
    }
    
    if (event.bottom) {
      this.isActive = true;
      this.isActivefadeInDown  = false;
      this.fixedTolbar = false;
    }
    
  }

   openDialog(): void {
    // const dialogRef = this.dialog.open(ContactDialogComponent, {
    //   width: '250px'
    // });
  }

  setToggleOn(){

    this.bodyelement = document.getElementById('nglpage');
    this.bodyelement.classList.add("scrollOff");
    this.contactFabButton = document.getElementById('contact-fab-button');
    this.contactFabButton.style.display = "none";
    
  }

  routeHome(){
        this.router.navigate(['home']);

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('confirmEmail');
    localStorage.removeItem('username');
	localStorage.removeItem('token');

    
    this.router.navigate(['login']);
    

  }
  goProfile(){
  	this.router.navigate(['profile']);
  }

  routeBack(){
  	//this.router.navigate(['login']);
  }

  setToggleOff(){
    
    this.bodyelement = document.getElementById('nglpage');
    this.bodyelement.classList.remove("scrollOff");
    this.contactFabButton = document.getElementById('contact-fab-button');
    this.contactFabButton.removeAttribute("style");

  }

  routeSignup(){
            this.router.navigate(['/signup']);

  }


  ngOnDestroy(): void {
  }}
