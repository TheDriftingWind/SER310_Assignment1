import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetus',
  templateUrl: './meetus.component.html',
  styleUrls: ['./meetus.component.css']
})
export class MeetusComponent implements OnInit {
  teachersImg = '../assets/images/uateachers.png';

  studentsImg = '../assets/images/uastudents_small.png';
  studentsFull = '../assets/images/uastudents.png';
  constructor() { }

  ngOnInit() {
  }

}
