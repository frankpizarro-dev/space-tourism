import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewRoutingModule } from './crew-routing.module';
import { CrewComponent } from './views/crew/crew.component';
import { CrewDetailComponent } from './components/crew-detail/crew-detail.component';
import { CrewImageComponent } from './components/crew-image/crew-image.component';


@NgModule({
  declarations: [
    CrewComponent,
    CrewDetailComponent,
    CrewImageComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule
  ]
})
export class CrewModule { }
