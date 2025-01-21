import { Component, Input, OnInit } from '@angular/core';
import { CrewModel } from '../../models/crew.model';

@Component({
  selector: 'app-crew-image',
  templateUrl: './crew-image.component.html',
  styleUrls: ['./crew-image.component.scss']
})
export class CrewImageComponent implements OnInit {

  @Input()
  currentCrew !: CrewModel

  constructor() {

  }

  ngOnInit(): void {

  }
}
