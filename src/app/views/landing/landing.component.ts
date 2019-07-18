import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotoTop() {
    const content = document.getElementsByClassName('csa--wrapper')[0]
    content.scrollTo(0,0);
  }
}
