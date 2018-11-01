import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ItemStatus } from 'src/app/shared/model/itemStatus';
import { StatusCalculatorService, ServiceStatus } from '../service/statusCalculator.service';

@Component({
  selector: 'app-view-itemtask',
  templateUrl: './view-itemtask.component.html',
})
export class ViewItemtaskComponent implements OnChanges {

  constructor(private statusCalculationService: StatusCalculatorService) { }

  @Input()
  public itemStatus: ItemStatus;

  public serviceStatus: ServiceStatus = ServiceStatus.ERROR;

  ngOnChanges(): void {
    if (this.itemStatus) {
      this.serviceStatus = this.statusCalculationService.calculateStateForModelStatus(this.itemStatus);
    }
  }

}
