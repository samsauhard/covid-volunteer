import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})

export class AppService {

	//private baseUri ="http://localhost:5000/";

	private baseUri="https://covid-volunteer-in.herokuapp.com/" ;
  constructor(private http: HttpClient) { }


   seekHelp(userDetail: any): Observable<any> {
    return this.http.post(this.baseUri + 'seekhelp', userDetail);

  }

  volunteer(userDetail: any): Observable<any> {
    return this.http.post(this.baseUri + 'volunteer', userDetail);

  }
  getAllHelp(): Observable<any> {
    return this.http.get(this.baseUri + 'getallhelp');

  }
getalloffer(): Observable<any> {
    return this.http.get(this.baseUri + 'getalloffer');

  }
  
  

}