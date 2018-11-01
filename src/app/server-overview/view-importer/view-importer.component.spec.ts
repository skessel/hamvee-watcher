import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImporterComponent } from './view-importer.component';

describe('ViewImporterComponent', () => {
  let component: ViewImporterComponent;
  let fixture: ComponentFixture<ViewImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
