import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/service/http.service';
import { Servers } from 'src/environments/servers';
import { ServerOverviewModel } from './model/serviceOverview.model';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Server } from '../shared/model/server';
import { MatooiStatus, MatooiPing } from '../shared/model/matooiStatus';
import { ImporterStatus } from '../shared/model/importerStatus';
import { ItemStatus } from '../shared/model/itemStatus';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class ServerOverviewComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {}
}
