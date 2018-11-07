import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServersComponent } from './view-servers.component';

describe('ViewServersComponent', () => {
  let component: ViewServersComponent;
  let fixture: ComponentFixture<ViewServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
