import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'destination',
    loadChildren: () => import("./features/destination/destination.module").then(m => m.DestinationModule)
  },
  {
    path: 'crew',
    loadChildren: () => import("./features/crew/crew.module").then(m => m.CrewModule)
  },
  {
    path: 'technology',
    loadChildren: () => import("./features/technology/technology.module").then(m => m.TechnologyModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
