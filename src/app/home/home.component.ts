import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showHistory = false;
  toggleHistory(){
    if(this.showHistory == false){
      this.showHistory = true;
    } else {
      this.showHistory = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
