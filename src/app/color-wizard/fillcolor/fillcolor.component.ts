import { Component, OnInit } from '@angular/core';
import { WizardComponent } from '../wizard.component';
import { MatSnackBar } from '@angular/material';
/* import * from 'jquery'; */

declare var $: any;
var selectedColor: any;

@Component({
  selector: 'app-fillcolor',
  templateUrl: './fillcolor.component.html',
  styleUrls: ['./fillcolor.component.scss']
})
export class FillcolorComponent implements OnInit {
  colorArray = [];
  typeOfFillColor: any = 'ALL';
  typeOfErraseColor: any = '';
  constructor(private snackBar: MatSnackBar,private wizardComponent:WizardComponent) { }
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
		  duration: 2000,
		});
	  }
  ngOnInit() {
    this.wizardComponent.progressMethod('fifth')
    this.initializeColors();

    if (sessionStorage.getItem("selectedColors")) {
      this.selectedColors = JSON.parse(sessionStorage.getItem("selectedColors"))
    }
  }
  initializeColors() {
    let selectedColor = this.selectedColor;

    $('.mySvg').find('polygon').mouseover(function () {
      $(this).attr('stroke', 'blue');
      $(this).attr('stroke-width', '2');
    })
    $('.mySvg').find('polygon').mousedown(function () {
      $(this).attr('fill-opacity', '1');
      $(this).attr('fill', selectedColor);
    })

    $('.mySvg').find('polygon').mouseout(function () {
      $(this).attr('stroke-width', '0');
    })

    $('.mySvg').find('path').mouseover(function () {
      $(this).attr('stroke', 'blue');
      $(this).attr('stroke-width', '2');
    })

    $('.mySvg').find('path').mousedown(function () {
      $(this).attr('fill-opacity', '1');
      $(this).attr('fill', selectedColor);
    })

    $('.mySvg').find('path').mouseout(function () {
      $(this).attr('stroke-width', '0');
    })
  }
  selectedColor: any
  selectedColorCode() {
    return this.selectedColor;
  }
  selecteColorIS(event) {
    this.initializeColors();
  }
  selectedColors = []
  deleteColor(color) {
    this.selectedColors = this.selectedColors.filter(item => item.rgb != color.rgb)
    sessionStorage.setItem("selectedColors", JSON.stringify(this.selectedColors))
  }

  chooseColor(color) {
    $('#erase').css('background-color', '#e2e2e2')
    $('#reset').css('background-color', '#e2e2e2')
    this.selectedColor = this.rgb(color.rgb);
    if (this.typeOfFillColor == 'ALL') {
      this.initializeColors()
      let selectedColor = this.selectedColor;
      $('.mySvg').find('polygon').attr('fill-opacity', 1)
      $('.mySvg').find('polygon').attr('fill', selectedColor)
      $('.mySvg').find('path').attr('fill-opacity', 1)
      $('.mySvg').find('path').attr('fill', selectedColor)
    } else {
      this.initializeColors()
    }
  }
  eraseColor(value) {
    if (value == 'erase' && this.selectedColor) {
      
 $('#erase').css('background-color', '#8d8a8a')
      $('#paint').css('background-color', '#e2e2e2')
      $('#reset').css('background-color', '#e2e2e2')
      $('.mySvg').find('polygon').mousedown(function () {
        $(this).attr('fill-opacity', '0');
 })
      $('.mySvg').find('path').mousedown(function () {
        $(this).attr('fill-opacity', '0');
      })
   
    } else if (value == 'reset' && this.selectedColor ) {

  $('#reset').css('background-color', '#e2e2e2')
      $('#erase').css('background-color', '#e2e2e2')
      $('#paint').css('background-color', '#e2e2e2')
      $('.mySvg').find('polygon').attr('fill-opacity', 0);
      $('.mySvg').find('path').attr('fill-opacity', 0)
      $('#reset').css('background-color', '#8d8a8a')
   } else  {
    this.openSnackBar("Please select and fill color from pallets",'ok')
      $('#paint').css('background-color', '#8d8a8a');
      $('#reset').css('background-color', '#e2e2e2');
      $('#erase').css('background-color', '#e2e2e2');
      this.typeOfFillColor = 'ALL';
    }
  }


  rgb(color) {
    return 'rgb(' + color + ')'
  }

}
