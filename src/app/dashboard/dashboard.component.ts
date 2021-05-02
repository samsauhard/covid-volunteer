import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	listhelp : any;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
 this.appService.getAllHelp().subscribe((data: any)=>{
 		this.listhelp = data;
            	console.info(data);
            },(error: any)=>{
            	console.info(error);
            });


  }

    routeHome(){
  	        this.router.navigate(['home']);

  }

}
