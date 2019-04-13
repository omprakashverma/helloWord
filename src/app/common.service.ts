import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient) { }
  getMethod(param){
  
    let headersuuu= new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+JSON.parse(sessionStorage.getItem('TOKEN'))
    })
    return this.http.get(environment.JSW+param,{headers:headersuuu})
  }
  postMethod(...param){
    
    let headers= new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': sessionStorage.getItem('TOKEN')
    })
  
    console.log("ssssssssssssssss",sessionStorage.getItem('TOKEN'));
    return this.http.post(environment.JSW+param[0],param[1],{headers:headers})
  }
  loginMethod(...param){
    let header=new HttpHeaders();
    header.append('Content-Type','application/json')
    return this.http.post(environment.JSW+param[0],param[1],{headers:header})
  }
  putMethod(param){
    let header=new HttpHeaders();
    header.append('Content-Type','application/json')
    header.append('Authorization','Bearer '+sessionStorage.getItem('TOKEN'))
    return this.http.put(environment.JSW+param[0],param[1],{headers:header})
  }
}
