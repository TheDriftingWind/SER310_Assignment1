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

  the_text : string = '';

  the_color : string = '';

  newFruit : string = '';
  list = ["apples", "oranges", "bananas", "pear"];

  serverName : string = '';
  servers = [{name: 'string'}];

  a_function() {
    return this.a_number * 100;
  }

  addNewFruit(){
    this.list.push(this.newFruit);
    this.newFruit = '';
  }

  addServer(){
    this.servers.push({name: this.serverName});
    this.serverName = '';
  }

  getColor(color){
    if(color != 'red' && color != 'blue' && color != 'yellow'){
      return 'gray'
    } else {
      return color
    }
  }

  constructor(){
    setTimeout(() => {
      this.disable_btn = false;
    }, 5000)
  }

}
