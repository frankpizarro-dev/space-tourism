import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './views/technology/technology.component';
import { TechnologyDetailComponent } from './components/technology-detail/technology-detail.component';
import { TechnologyImageComponent } from './components/technology-image/technology-image.component';


@NgModule({
  declarations: [
    TechnologyComponent,
    TechnologyDetailComponent,
    TechnologyImageComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
