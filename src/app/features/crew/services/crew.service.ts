import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrewModel, CrewRole } from '../models/crew.model';

@Injectable({
  providedIn: 'root'
})
export class CrewService {


  private crewState: BehaviorSubject<CrewModel> = new BehaviorSubject<CrewModel>({
    rol: CrewRole.Commander,
    name: "DOUGLAS HURLEY",
    information: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    order: 1,
    image: "assets/imgs/image-douglas-hurley-1.png"
  });

  constructor() { }

  get getCrewState$(): Observable<CrewModel> {
    return this.crewState.asObservable();
  }

  setCrewState(crew: CrewModel) {
    this.crewState.next(crew);
  }
}
