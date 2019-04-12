function getPalletdata(url){
    'use strict';
    let colors=[]

    /* let _img=document.createElement("img")
    _img.crossOrigin = 'anonymous';
    _img.src =url; */
    var image = new Image()
    image.crossOrigin='anonymous'
    image.src=url
 
    var img =image /* document.getElementById('PalletImage') */,
        list = document.querySelector('ul'),
        section = document.querySelector('section'),
        paletteReady = false;
       
        if(img)
    img.addEventListener('load', function() {
        if ( !paletteReady )
            getPalette();
    });
    
    if (!paletteReady)
        getPalette();
    
    function getPalette() {
        paletteReady = true;
        var vibrant = new Vibrant(img),
            swatches = vibrant.swatches(),
            listFragment = new DocumentFragment();
        
            colors=[]
        for ( var swatch in swatches ) {
         /*    console.log("swatch============",swatch) */
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) { 
             
                var li = document.createElement('li'),
                    p = document.createElement('p'),
                    small = document.createElement('small');
                
                p.textContent = swatches[swatch].getHex();
                p.style.color = swatches[swatch].getTitleTextColor();
                small.textContent = swatch;
                small.style.color = swatches[swatch].getBodyTextColor();
                li.style.backgroundColor = swatches[swatch].getHex();
                li.appendChild(p);
                li.appendChild(small);
                listFragment.appendChild(li);
                colors.push(swatches[swatch].getHex())
            }
        }
        
        // list.appendChild(listFragment);
        
        if (swatches['DarkVibrant']) {
            // section.style.backgroundColor = swatches['DarkVibrant'].getHex();
        }
    }
     return colors;
} 