import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Input('someAlias') element: {name: string};

  @Output() itemAdded = new EventEmitter<{itemName: string}>();
  constructor() { }

  ngOnInit() {
  }


  onAddItem(){
    this.itemAdded.emit({itemName: "Duplicate"});
  }

}
