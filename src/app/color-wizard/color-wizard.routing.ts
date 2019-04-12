import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillcolorComponent } from './fillcolor/fillcolor.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { ColorpaletteComponent } from './colorpalette/colorpalette.component';
import { WizardComponent } from './wizard.component';
import { PaintpredefinedComponent } from './paintpredefined/paintpredefined.component';


const routes: Routes = [

  {
    path:'',
    component:WizardComponent,
    children:[
      {
        path: '',
        component: PaintpredefinedComponent
      },
        {
            path: 'fill-color',
            component: FillcolorComponent
          },
          {
            path: 'inspiration',
            component: InspirationComponent
          },
          {
            path: 'palette',
            component: ColorpaletteComponent
          },
          {
            path: 'select-part',
            component: PaintpredefinedComponent
          },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorWRoutingModule { }
