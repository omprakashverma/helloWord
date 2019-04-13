import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ColorpalletService {

constructor(private http:HttpClient) { }
getcolorPallets(param){
    let headers= new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+JSON.parse(sessionStorage.getItem('TOKEN'))
  })
  return this.http.get(environment.JSW+param,{headers:headers})
}
getcolorSections(param){
  let headers= new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+JSON.parse(sessionStorage.getItem('TOKEN'))
  })
  return this.http.get(environment.JSW+param,{headers:headers})
}

}
