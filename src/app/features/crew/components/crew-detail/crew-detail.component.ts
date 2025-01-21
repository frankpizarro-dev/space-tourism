import { Component, Input, OnInit } from '@angular/core';
import { CrewModel, CrewRole } from '../../models/crew.model';
import { CrewService } from '../../services/crew.service';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.scss']
})
export class CrewDetailComponent implements OnInit {

  @Input()
  currentCrew!: CrewModel;

  crewDetails: CrewModel[] = [];
  pointSelected: number = 1;

  constructor(private crewService: CrewService) {

  }

  ngOnInit(): void {
    this.crewDetails = [
      {
        rol: CrewRole.Commander,
        name: "DOUGLAS HURLEY",
        information: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        order: 1,
        image: "assets/imgs/image-douglas-hurley-1.png"
      },
      {
        rol: CrewRole.MissionSpecialist,
        name: "MARK SHUTTLEWORTH",
        information: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        order: 2,
        image: "assets/imgs/image-mark-shuttleworth-2.png"
      },
      {
        rol: CrewRole.Pilot,
        name: "Victor Glover",
        information: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        order: 3,
        image: "assets/imgs/image-victor-glover-3.png"
      },
      {
        rol: CrewRole.FlightEngineer,
        name: "Anousheh Ansari",
        information: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        order: 4,
        image: "assets/imgs/image-anousheh-ansari-4.png"
      },
    ]
  }

  onChangeCrew(order: number) {
    this.pointSelected = order;
    const newCrew = this.crewDetails.find((crew: CrewModel) => crew.order === order) as CrewModel;
    this.crewService.setCrewState(newCrew);
  }

}
