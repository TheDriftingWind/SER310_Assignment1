

import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './students.component.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class StudentsComponent {
  myThumbnail = '../assets/images/Deku.png'
  Bakugo = '../assets/images/students/bakugo_fighting.jpg'
  images = ["../assets/images/students/deku_fights_muscular.gif", "../assets/images/students/bakugo_escape.gif", "../assets/images/students/todoroki_fights_stain.gif", "../assets/images/students/iida_kick.gif"];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }


}
