import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemtaskComponent } from './view-itemtask.component';

describe('ViewItemtaskComponent', () => {
  let component: ViewItemtaskComponent;
  let fixture: ComponentFixture<ViewItemtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItemtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
