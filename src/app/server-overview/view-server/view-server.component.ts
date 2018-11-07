import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-server',
  templateUrl: './view-server.component.html',
  styleUrls: ['./view-server.component.css']
})
export class ViewServerComponent implements OnInit {

  private subsciption: Subscription;
  public serverName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.subsciption = this.route.params.subscribe((params: Params) => {
      this.serverName = params['server'];
    });

  }

}
