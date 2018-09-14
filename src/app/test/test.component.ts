import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  a_number : number = 10;
  val_x : number = 5;
  val_y : number = 20;
  disable_btn : boolean = true;

  a_function() {
    return this.a_number * 100;
  }

  constructor(){
    setTimeout(() => {
      this.disable_btn = false;
    }, 5000)
  }

}
