import { Component, OnInit } from '@angular/core';
import { ImageTechnologyType, TechnologyModel } from '../../models/technology.model';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  currentTechnology!: TechnologyModel;
  imageTechnologyType !: ImageTechnologyType;
  imageSelected!: string;

  constructor(private technologyService: TechnologyService) {

  }

  ngOnInit(): void {
    this.currentTechnology = this.technologyService.getTechnologyList[0];

    this.selectImageTechnology();

    window.onresize = (ev) => {
      this.selectImageTechnology();
    }
  }

  ngOnDestroy() {
    window.onresize = null;
  }

  selectImageTechnology(): void {
    if (window.innerWidth >= 1140) {
      this.imageTechnologyType = ImageTechnologyType.Portrait;
    }

    if (window.innerWidth < 1140) {
      this.imageTechnologyType = ImageTechnologyType.Landscape;
    }

    if (window.innerWidth <= 480) {
      this.imageTechnologyType = ImageTechnologyType.Portrait;
    }

    this.imageSelected =
      this.imageTechnologyType === ImageTechnologyType.Portrait
        ? this.currentTechnology.imagePortrait
        : this.currentTechnology.imageLandscape;
  }

  onChangeTechnology(technology: TechnologyModel): void {
    this.currentTechnology = technology;
    this.selectImageTechnology();
  }

}
