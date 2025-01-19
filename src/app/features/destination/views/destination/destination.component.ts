import { Component, OnInit } from '@angular/core';
import { Destination } from '../../models/destination.enum';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  currentDestination: Destination = Destination.Moon
  destinationList: Destination[] = [
    Destination.Moon,
    Destination.Mars,
    Destination.Europa,
    Destination.Titan,
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

  onSelectDestination(destination: Destination): void {
    this.currentDestination = destination
  }

}
