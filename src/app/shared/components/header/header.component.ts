import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes: any[] = [
    {
      number: '00',
      name: 'home',
      route: '/home'
    },
    {
      number: '01',
      name: 'destination',
      route: '/destination'
    },
    {
      number: '02',
      name: 'crew',
      route: '/crew'
    },
    {
      number: '03',
      name: 'technology',
      route: '/technology'
    }
  ];

  showModalList: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  goToHome(): void {
    this.router.navigate(['/home'])
  }

  onShowModalList(display: boolean){
    this.showModalList = display;
  }

}
