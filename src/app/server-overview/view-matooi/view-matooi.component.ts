import { Component, OnInit, Input } from '@angular/core';
import { MatooiStatus, MatooiPing } from 'src/app/shared/model/matooiStatus';

@Component({
  selector: 'app-view-matooi',
  templateUrl: './view-matooi.component.html',
})
export class ViewMatooiComponent implements OnInit {

  constructor() { }

  @Input()
  public matooiPing: MatooiPing;

  ngOnInit() {

  }

}
