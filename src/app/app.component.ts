import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'colorsnap';
  constructor()
  {
    
    
    // this._commonService.loginMethod('authenticate',{"username": "admin","password": "admin"}).subscribe(result=>{
    //   console.log('Result----------',result);
    //   let res=result
    //   if(res)
    //   sessionStorage.setItem('TOKEN',JSON.stringify(result['data'].token_id));
    // })  
  }
}
