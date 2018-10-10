import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  pageTitle : string = "About U.A. Academy";
  currentCard : number = 1;

  prevPage() {
    this.currentCard = this.currentCard <= 1 ? 1 : this.currentCard -= 1;
  }

  nextPage() {
    this.currentCard = this.currentCard >= 4 ? 4 : this.currentCard += 1;
  }

}
