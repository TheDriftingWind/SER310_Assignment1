import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetusComponent } from './meetus.component';

describe('MeetusComponent', () => {
  let component: MeetusComponent;
  let fixture: ComponentFixture<MeetusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
