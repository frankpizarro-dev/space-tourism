import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './views/destination/destination.component';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { DestinationImageComponent } from './components/destination-image/destination-image.component';


@NgModule({
  declarations: [
    DestinationComponent,
    DestinationDetailComponent,
    DestinationImageComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule
  ]
})
export class DestinationModule { }
