import { Component, OnInit } from '@angular/core';
/* import * from 'jquery'; */

declare var $: any;
var selectedColor: any;

@Component({
  selector: 'app-fillcolor',
  templateUrl: './fillcolor.component.html',
  styleUrls: ['./fillcolor.component.scss']
})
export class FillcolorComponent implements OnInit {
colorArray=[];
  constructor() { }
  ngOnInit() {
    this.initializeColors();
  }

  initializeColors(){
    let selectedColor=this.selectedColor;
    $('.mySvg').find('polygon').mouseover(function(){
      $(this).attr('stroke', 'blue');
      $(this).attr('stroke-width', '2');
      })
      
      $('.mySvg').find('polygon').mousedown(function(){
      $(this).attr('fill-opacity', '1');
      $(this).attr('fill', selectedColor);
      })
      
      $('.mySvg').find('polygon').mouseout(function(){
      $(this).attr('stroke-width', '0');
      })
      
      $('.mySvg').find('path').mouseover(function(){
      $(this).attr('stroke', 'blue');
      $(this).attr('stroke-width', '2');
      })
      
      $('.mySvg').find('path').mousedown(function(){
      $(this).attr('fill-opacity', '1');
      $(this).attr('fill', selectedColor);
      })
      
      $('.mySvg').find('path').mouseout(function(){
      $(this).attr('stroke-width', '0');
      })
  }
  selectedColor:any
  selectedColorCode(){
return this.selectedColor;
  }

  
  selecteColorIS(event){
    this.initializeColors();
  }
  

}
