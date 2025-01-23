import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TechnologyModel } from '../../models/technology.model';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.scss']
})
export class TechnologyDetailComponent implements OnInit {

  @Input()
  currentTechnology!: TechnologyModel

  @Output()
  technologyEmitter: EventEmitter<TechnologyModel> = new EventEmitter<TechnologyModel>;

  constructor(public technologyService: TechnologyService) {

  }

  ngOnInit(): void {

  }

  onChangeTechnology(order: number): void {
    const technologySelected = this.technologyService.getTechnologyList.find((technology) => technology.order === order);
    this.technologyEmitter.emit(technologySelected)
  }


}
