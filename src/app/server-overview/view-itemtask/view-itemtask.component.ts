import { Component, OnInit, Input } from '@angular/core';
import { ItemStatus } from 'src/app/shared/model/itemStatus';

@Component({
  selector: 'app-view-itemtask',
  templateUrl: './view-itemtask.component.html',
})
export class ViewItemtaskComponent implements OnInit {

  constructor() { }

  @Input()
  public itemStatus: ItemStatus;

  ngOnInit() {
  }

}
