import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor(private route: ActivatedRoute) { }
  value : string = '';
  ngOnInit() {
    this.value = this.route.snapshot.params['value']
  }

}
