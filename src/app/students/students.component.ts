

import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './students.component.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class StudentsComponent {
  images = ["../assets/images/students/deku_punch_robot.jpg", "../assets/images/students/bakugo_fighting.jpg", "../assets/images/students/todoroki_rescue.png", "../assets/images/students/Recipro_Kick.gif"];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
