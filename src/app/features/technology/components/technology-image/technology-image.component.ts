import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-image',
  templateUrl: './technology-image.component.html',
  styleUrls: ['./technology-image.component.scss']
})
export class TechnologyImageComponent implements OnInit {

  @Input()
  imageSelected!: string;

  constructor() {

  }

  ngOnInit(): void {
  }
}
