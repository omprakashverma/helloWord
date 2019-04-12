import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { WizardComponent } from '../wizard.component';

@Component({
  selector: 'app-paintpredefined',
  templateUrl: './paintpredefined.component.html',
  styleUrls: ['./paintpredefined.component.scss']
})

export class PaintpredefinedComponent implements OnInit {
  allimages = [
    {
      type: 'KITCHEN',
      image: '', 
      imgId: '1',

    },
    {
      type: 'KITCHEN',
      image: '',
       imgId: '2'
    },
    {
      type: 'KITCHEN',
      image: '', imgId: '3'
    },
    {
      type: 'KITCHEN',
      image: '', imgId: '4'
    },
    {
      type: 'KITCHEN',
      image: '', imgId: '5'
    },
    {
      type: 'KITCHEN',
      image: '', imgId: '6'
    },
    {
      type: 'BEDROOM',
      image: '', imgId: '1'
    },
    {
      type: 'BEDROOM',
      image: '', imgId: '2'
    },
    {
      type: 'BEDROOM',
      image: '', imgId: '3'
    },
    {
      type: 'BEDROOM',
      image: '', imgId: '4'
    },
    {
      type: 'BEDROOM',
      image: '', imgId: '5'
    },
    {
      type: 'BEDROOM',
      image: '', imgId: '6'
    },
    {
      type: 'BEDROOM',
      image: '', imgId: '7'
    },
    {
      type: 'DINING',
      image: '', imgId: '1'
    },
    {
      type: 'DINING',
      image: '', imgId: '2'
    },
    {
      type: 'DINING',
      image: '', imgId: '3'
    },
    {
      type: 'DINING',
      image: '', imgId: '4'
    },
    {
      type: 'DINING',
      image: '', imgId: '5'
    },
    {
      type: 'DINING',
      image: '', imgId: '6'
    },
    {
      type: 'DINING',
      image: '', imgId: '7'
    },
    {
      type: 'DINING',
      image: '', imgId: '8'
    },
    {
      type: 'BATHROOM',
      image: '', imgId: '1'
    },

    {
      type: 'BATHROOM',
      image: '', imgId: '2'
    },

    {
      type: 'STUDY',
      image: '', imgId: '1'
    },

    {
      type: 'STUDY',
      image: '', imgId: '2'
    },

    {
      type: 'COMMON',
      image: '', imgId: '1'
    },

    {
      type: 'COMMON',
      image: '', imgId: '2'
    },

    {
      type: 'COMMON',
      image: '', imgId: '3'
    },

  ]
  imagesTypes = [
    {
      type: 'ALL',
      label: 'All'
    },
    {
      type: 'KITCHEN',
      label: 'Kitchen'
    },
    {
      type: 'DINING',
      label: 'Dining'
    },
    {
      type: 'BEDROOM',
      label: 'Bedroom'
    },
    {
      type: 'BATHROOM',
      label: 'Bathroom'
    },
    {
      type: 'STUDY',
      label: 'Study'
    },
    {
      type: 'COMMON',
      label: 'Common'
    },
  ]
  images = []
  selectedType: string = 'ALL';
  selectedImage:any;
  constructor(private router:Router,private snackbar:MatSnackBar,private  wizardComponent:WizardComponent) {
    this.images = this.allimages.filter(item => item);
  }
  ngOnInit() {
   this.wizardComponent.progressMethod('first')
  }

  selectType(type) {
    this.selectedType = type
    if (type == 'ALL') {
      this.images = this.allimages.filter(item => item);
    } else {
      this.images = this.allimages.filter(item => item.type == this.selectedType);
    }
  }
  selectImage(img) {
    this.selectedImage=img;
  }
  nextStep(){
    if(this.selectedImage){
     
      this.router.navigate(["color/palette"])
    }else{
      this.snackbar.open("Please select image", 'Ok', {
        duration: 2000,
      });
    }
  }
}
