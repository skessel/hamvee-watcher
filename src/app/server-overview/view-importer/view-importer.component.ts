import { Component, OnInit, Input } from '@angular/core';
import { ImporterStatus } from 'src/app/shared/model/importerStatus';

@Component({
  selector: 'app-view-importer',
  templateUrl: './view-importer.component.html',
})
export class ViewImporterComponent implements OnInit {

  constructor() { }

  @Input()
  public importerStatus: ImporterStatus;

  ngOnInit() {
  }

}
