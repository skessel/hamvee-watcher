import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImporterStatus } from 'src/app/shared/model/importerStatus';
import { StatusCalculatorService, ServiceStatus } from '../service/statusCalculator.service';

@Component({
  selector: 'app-view-importer',
  templateUrl: './view-importer.component.html',
})
export class ViewImporterComponent implements OnChanges {

  constructor(private statusCalculationService: StatusCalculatorService) { }

  @Input()
  public importerStatus: ImporterStatus;

  public serviceStatus: ServiceStatus = ServiceStatus.ERROR;

  ngOnChanges(): void {
    if (this.importerStatus) {
      this.serviceStatus = this.statusCalculationService.calculateStateForModelStatus(this.importerStatus);
    }
  }

}
