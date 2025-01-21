import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CrewModel } from '../../models/crew.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  currentCrew!: CrewModel;
  private currentCrewSubscription!: Subscription;

  constructor(private crewService: CrewService) {

  }

  ngOnInit(): void {
    this.currentCrewSubscription = this.crewService.getCrewState$
      .pipe()
      .subscribe({
        next: (currentCrew: CrewModel) => {
          this.currentCrew = currentCrew;
        },
        error: () => {

        },
      })
  }

  ngOnDestroy() {
    this.currentCrewSubscription.unsubscribe();
  }

}
