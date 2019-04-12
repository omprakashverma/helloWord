import { Component, OnInit,   ViewChild, ElementRef } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
declare function getPalletdata(data:any):any


@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {
  color: "red";
color1='Blue'
color2='green'
color3='yellow'
color4='Blue'
imageColors=[]
imgColors=[]
@ViewChild('mysvg')mysvg:ElementRef;
  @ViewChild('canvasval')canvasval:ElementRef;
  @ViewChild('colboxval')colboxval:any;
  @ViewChild('myimage')myimage:ElementRef;
  @ViewChild('svg')svg:ElementRef;
constructor(){
  
}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
   /*  console.log("Mycolors:==",getPalletdata())
    this.imageColors=getPalletdata() */

    //  console.log("SVGGGGGGGGGGGGGGGGGG=",d3.selectAll("#D5").select('path').node().getBBox());
    // var main =<HTMLCanvasElement> document.getElementById("main");
    // var zoom =<HTMLCanvasElement> document.getElementById("zoom");
    // var ctx = main.getContext("2d")
    // var zoomCtx = zoom.getContext("2d");
    // var img = new Image();
    // img.src = "http://astrobioloblog.files.wordpress.com/2011/10/duck-1.jpg"
    // img.onload = run;
    
    // function run(){
    //     ctx.drawImage(img,0,0);
    // }
    
    // main.addEventListener("mousemove", function(e){
    //     console.log("Positttttttttttttttttttttttttttt",e);
    //     zoomCtx.fillStyle = "white";
    //     //zoomCtx.clearRect(0,0, zoom.width, zoom.height);
    //     //zoomCtx.fillStyle = "transparent";
    //     zoomCtx.fillRect(0,0, zoom.width, zoom.height);
    //     zoomCtx.drawImage(main, e.x, e.y, 200, 100, 0,0, 400, 200);
    //     console.log(zoom.style);
    //     zoom.style.top = e.pageY + 10 + "px"
    //     zoom.style.left = e.pageX + 10 + "px"
    //     zoom.style.display = "block";
    // });
    
    // main.addEventListener("mouseout", function(){
    //     zoom.style.display = "none";
    // });
    
  }  
  getMyPalletdata(data){
    this.imageColors=getPalletdata(data)

    this.imgColors=[]
    getPalletdata(data).forEach(element => {
      let obj={
        x:12,
        y:12,
        color:element
      }
      this.imgColors.push(obj)
    });

      
    console.log("aaaaaaaaaaaaaaaa",this.imageColors);
  }
 
  
  url;
  displayData=false;
  displayCol=false;
  private _canvas;
  private _ctx:CanvasRenderingContext2D;
  private _img;
  private _colbox;
  private _hexval='';
  private _rgbaval;
 
 
  readUrl(event:any) {
    this.displayData=true;
    this.displayCol=true;
    if (event.target.files && event.target.files[0])  {
     var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url = event.target.result;
        var image = new Image()
        image.src=event.target.result;
        
        //  console.log("ALL COLORSSSSSSSSSSSSSSS",getPalletdata(this.url));
      
         this.getimg(this.url);
  
         function loaded() {
          // woo yey image loaded
          if(image.complete){
            console.log("image.complete=====",image.complete)
            // getPalletdata(this.url)
          }
     
        }
        
        if (image.complete) {
          loaded();
        }
        else {
          console.log("image.complete=====Not Complete",)
          image.addEventListener('load', loaded);
        }
      }
        reader.readAsDataURL(event.target.files[0]);
  
    }
  }
  getData(){
    console.log("ALL COLORSSSSSSSSSSSSSSS",getPalletdata(this.url));
  }
  
  getimg(url:string)
  {
   if(this.colboxval)
  this._colbox=this.colboxval.nativeElement;
  this._colbox.style.cssText = "--bgcolorval:rgba(0,0,0,0)";
  this._hexval="";
  this._rgbaval="";
  this._canvas = this.canvasval.nativeElement;
    this._ctx = this._canvas.getContext("2d");
    this._img=document.createElement("img"),
    this._img.crossOrigin = 'anonymous';
    this._img.src = this.url;
    /* (new XMLSerializer).serializeToString(this._img) */

  /*   var svg = document.getElementById('tmpSvg')
    var blueCircle = (new XMLSerializer).serializeToString(svg);
    var img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + blueCircle;
    context.drawImage(img, 0, 0);
    
    redCircle = blueCircle.replace(/#3080d0/g, '#e05030');
    img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + redCircle;
    context.drawImage(img, 10, 10); */


    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._img.onload=(()=>
          this._ctx.drawImage(this._img, 0, 0,this._img.width,this._img.height,0, 0,this._canvas.width, this._canvas.height));
          // var px=this._ctx.getImageData(x,y,1,1);



          let blockSize = 5;
          let i = -4,
          length,
          rgb = {r:0,g:0,b:0},
          count = 0;
         let  data = this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
         length = data.data.length;
    
         while ( (i += blockSize * 4) < length ) {
             ++count;
             rgb.r += data.data[i];
             rgb.g += data.data[i+1];
             rgb.b += data.data[i+2];
         }
         
         // ~~ used to floor values
         rgb.r = ~~(rgb.r/count);
         rgb.g = ~~(rgb.g/count);
         rgb.b = ~~(rgb.b/count);
       
       
  }
  getPixel(event,sourse,id)
  {
    this.getData() 
    var boundingRect=this._canvas.getBoundingClientRect();
    var x=event.clientX-boundingRect.left;
    var y=event.clientY-boundingRect.top;
    console.log("X====",x)
    console.log("y====",y)
    var px=this._ctx.getImageData(x,y,1,1);
    var data_array=px.data;

    var pixelColor="rgba("+data_array[0]+","+data_array[1]+","+data_array[2]+","+data_array[3]+")";
    this._rgbaval=pixelColor;
    var dColor = data_array[2] + 256 * data_array[1] + 65536 * data_array[0];
    this._hexval=('#'+dColor.toString(16));
    if(sourse=='click'&&this.imageColors.length<7){
      if(this.imageColors.filter(color=>color==this._hexval).length==0){
        this.imageColors.push(this._hexval)
        let obj={
          x:x,
          y:y,
          id:id,
          color:this._hexval
        }
        this.imgColors.push(obj)
        // this.placeDiv(obj.id,obj.id.x, obj.id.y,obj.color)
      }

    }
    this._colbox.style.cssText = "--bgcolorval:"+pixelColor;
  }

  onDragEnded(event) {
    var elem = document.getElementById("overlay");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));        
    
  }
  getPosition(el) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }

  deleteColor(selsectedColor){
    this.imageColors=this.imageColors.filter(color=>color!=selsectedColor);
    this.imgColors=this.imgColors.filter(item=>item.color!=selsectedColor);
  }


   placeDiv(id,x_pos, y_pos,color) {
     console.log("data=====",id,x_pos, y_pos,color);
    let d = <HTMLElement>document.getElementById(id);
    d.style.position = "absolute";
    d.style.left = x_pos+'px';
    d.style.top = y_pos+'px';
    d.style.background = color;
  }

  testhtml=`<div #dragElement *ngFor="let point of imgColors;let i=index" id="pt{{i}}" class="example-box"  (click)="getPixel($event,'drag',dragElement.id); "
  (cdkDragEnded)="onDragEnded($event)" cdkDragBoundary=".example-boundary" cdkDrag
  style="height:15px;width:15px;border: 1px solid;border-radius: 10px"
  [style.background]="_hexval!=='' ? _hexval : ''">
</div>`
}
