import { Component, OnInit } from '@angular/core';
import { ServerOverviewModel } from '../model/serviceOverview.model';
import { HttpService } from 'src/app/shared/service/http.service';
import { Servers } from 'src/environments/servers';
import { Server } from 'src/app/shared/model/server';
import { MatooiPing } from 'src/app/shared/model/matooiStatus';
import { ImporterStatus } from 'src/app/shared/model/importerStatus';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ItemStatus } from 'src/app/shared/model/itemStatus';

@Component({
  selector: 'app-view-servers',
  templateUrl: './view-servers.component.html',
})
export class ViewServersComponent implements OnInit {

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
        this.overviews[index].importerStatus.lastFinishTime = new Date(status[0].lastFinishTime);
      });
      this.httpService.get(server.itemTaskURL, this.headers(), false).subscribe((status: Array<ItemStatus>) => {
        this.overviews[index].itemStatus = status[0];
        this.overviews[index].itemStatus.lastFinishTime = new Date(status[0].lastFinishTime);
      }, (error: HttpErrorResponse) => {

      });
    });

    console.log(this.overviews);
  }

  headers(): HttpHeaders {
    return new HttpHeaders();
  }
}
