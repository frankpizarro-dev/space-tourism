import { Component, Input, OnInit } from '@angular/core';
import { Destination } from '../../models/destination.enum';

@Component({
  selector: 'app-destination-image',
  templateUrl: './destination-image.component.html',
  styleUrls: ['./destination-image.component.scss']
})
export class DestinationImageComponent implements OnInit {

  @Input()
  currentDestionation !: Destination

  Destination = Destination

  constructor() {

  }

  ngOnInit(): void {

  }

}
