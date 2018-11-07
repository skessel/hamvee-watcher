import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { SecurityService } from './service/security/security.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
      CommonModule,
  ],
  providers: [HttpService],
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                HttpService,
                SecurityService,
            ]
        };

    }

}
