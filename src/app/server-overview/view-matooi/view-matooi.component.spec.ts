import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatooiComponent } from './view-matooi.component';

describe('ViewMatooiComponent', () => {
  let component: ViewMatooiComponent;
  let fixture: ComponentFixture<ViewMatooiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMatooiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatooiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
