import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/service/http.service';
import { Servers } from 'src/environments/servers';
import { ServerOverviewModel } from './serviceOverview.model';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Server } from '../shared/model/server';
import { MatooiStatus, MatooiPing } from '../shared/model/matooiStatus';
import { ImporterStatus } from '../shared/model/importerStatus';
import { ItemStatus } from '../shared/model/itemStatus';

@Component({
  selector: 'app-server-overview',
  templateUrl: './server-overview.component.html'
})
export class ServerOverviewComponent implements OnInit {

  public overviews: Array<ServerOverviewModel> = [];

  constructor(private httpService: HttpService) {

    for (const server of Servers.SERVERS) {
      this.overviews.push(new ServerOverviewModel(server.name));
    }

    console.log(this.overviews);
   }

  ngOnInit(): void {

    Servers.SERVERS.forEach((server: Server, index: number) => {

      this.httpService.get(server.matooiURL, this.headers(), false).subscribe((ping: MatooiPing) => {
        this.overviews[index].matooiPing = ping;
      });
      this.httpService.get(server.importerTaskURL, this.headers(), false).subscribe((status: Array<ImporterStatus>) => {
        this.overviews[index].importerStatus = status[0];
      });
      this.httpService.get(server.itemTaskURL, this.headers(), false).subscribe((status: Array<ItemStatus>) => {
        this.overviews[index].itemStatus = status[0];
      }, (error: HttpErrorResponse) => {

      });
    });

    console.log(this.overviews);
  }

  headers(): HttpHeaders {
    return new HttpHeaders();
  }

}
