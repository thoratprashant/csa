import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

  gotoTop() {
    const content = document.getElementsByClassName('csa--wrapper')[0]
    content.scrollTo(0,0);
  }
  

}
