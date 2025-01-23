import { Injectable } from '@angular/core';
import { TechnologyModel } from '../models/technology.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private technologyList: TechnologyModel[] = [
    {
      order: 1,
      name: 'LAUNCH VEHICLE',
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      imagePortrait: "assets/imgs/image-launch-vehicle-portrait.jpg",
      imageLandscape: "assets/imgs/image-launch-vehicle-landscape.jpg",
    },
    {
      order: 2,
      name: 'SPACEPORT',
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      imagePortrait: "assets/imgs/image-spaceport-portrait.jpg",
      imageLandscape: "assets/imgs/image-spaceport-landscape.jpg",
    },
    {
      order: 3,
      name: 'SPACE CAPSULE',
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      imagePortrait: "assets/imgs/image-space-capsule-portrait.jpg",
      imageLandscape: "assets/imgs/image-space-capsule-landscape.jpg"
    }
  ]

  constructor() { }

  get getTechnologyList(): TechnologyModel[] {
    return this.technologyList;
  }


}
