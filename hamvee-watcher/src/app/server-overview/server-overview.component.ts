import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/service/http.service';
import { Servers } from 'src/environments/servers';
import { ServerOverviewModel } from './serviceOverview.model';
import { HttpHeaders } from '@angular/common/http';
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

    for (let index: number = 0; index < Servers.SERVERS.length; index++) {
      const server: Server = Servers.SERVERS[index];

      this.httpService.get(server.matooiURL, this.headers(), false).subscribe((ping: MatooiPing) => {
        console.log(status);
        this.overviews[index].matooiPing = ping;
        console.log(this.overviews);
      });
      this.httpService.get(server.importerTaskURL, this.headers(), false).subscribe((status: ImporterStatus) => {
        console.log(status);
        this.overviews[index].importerStatus = status;
      });
      this.httpService.get(server.itemTaskURL, this.headers(), false).subscribe((status: ItemStatus) => {
        console.log(status);
        this.overviews[index].itemStatus = status;
      });

    }

  }

  headers(): HttpHeaders {
    return new HttpHeaders().append('Accept', 'application/json');
  }

}
