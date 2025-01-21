import { Component, Input, OnInit } from '@angular/core';
import { Destination } from '../../models/destination.enum';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {

  @Input()
  currentDestination!: Destination;

  Destination = Destination;

  constructor() {

  }

  ngOnInit(): void {

  }

}
