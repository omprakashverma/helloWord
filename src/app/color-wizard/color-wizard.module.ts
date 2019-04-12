import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WizardComponent } from './wizard.component';
import { FillcolorComponent } from './fillcolor/fillcolor.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { ColorpaletteComponent } from './colorpalette/colorpalette.component';
import { ColorWRoutingModule } from './color-wizard.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaintpredefinedComponent } from './paintpredefined/paintpredefined.component';


@NgModule({
  declarations: [
    WizardComponent,
    FillcolorComponent,
    InspirationComponent,
    ColorpaletteComponent,
    PaintpredefinedComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ColorWRoutingModule,
    CommonModule
  ]
})
export class ColorWizardModule { }
