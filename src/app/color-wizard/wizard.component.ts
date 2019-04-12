import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  currentComp = 'first'
  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('tabIndex')){
      this.progressMethod(sessionStorage.getItem('tabIndex'))
    }
  }
  progressMethod(currentComp) {
    this.currentComp = currentComp
    console.log("current component     =-=-=-=-",this.currentComp)
  //  sessionStorage.setItem('tabIndex',currentComp)
    switch (currentComp) {
      case 'first': {
        this.router.navigate(['color/select-part'])
      } break;
      case 'second': {
        console.log("currentComp==", currentComp)
        this.router.navigate(['color/palette'])
      } break;
      case 'fifth': {
        this.router.navigate(['color/fill-color'])
      } break;
    }
  }
}
