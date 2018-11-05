import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../shared/service/security/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(public securityService: SecurityService) { }

  ngOnInit() {
  }

}
