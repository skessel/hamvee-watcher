import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatooiStatus, MatooiPing } from 'src/app/shared/model/matooiStatus';
import { StatusCalculatorService, ServiceStatus } from '../service/statusCalculator.service';

@Component({
  selector: 'app-view-matooi',
  templateUrl: './view-matooi.component.html',
})
export class ViewMatooiComponent implements OnChanges {

  constructor(private statusCalculationService: StatusCalculatorService) { }

  public serviceStatus: ServiceStatus = ServiceStatus.ERROR;

  @Input()
  public matooiPing: MatooiPing;

  ngOnChanges(): void {
    this.serviceStatus = this.matooiPing ? ServiceStatus.OK : ServiceStatus.ERROR;
  }

}
