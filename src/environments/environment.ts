import { Server } from 'src/app/shared/model/server';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: any = {
  production: false,

  // login: 'server-watcher',
  // password: 'pw_server-watcher_01',

  login: 'user',
  password: 'user',

  brentcrossMatooiUrl: 'https://uat-bx.matooi.com/m2b/matooi/rest/ping',
  brentcrossItemTaskUrl: 'http://uat-bx.matooi.com:5001/actuator/importerstatus',
  brentcrossImporterUrl : 'http://uat-bx.matooi.com:5000/actuator/importerstatus',

  bullringMatooiUrl: 'https://uat-bullring.matooi.com/m2b/matooi/rest/ping',
  bullringItemTaskUrl: 'http://uat-bullring.matooi.com:5001/actuator/importerstatus',
  bullringImporterUrl : 'http://uat-bullring.matooi.com:5000/actuator/importerstatus',

  placedeshallesMatooiUrl: 'https://uat-placedeshalles.matooi.com/m2b/matooi/rest/ping',
  placedeshallesItemTaskUrl: 'http://uat-placedeshalles.matooi.com:5001/actuator/importerstatus',
  placedeshallesImporterUrl : 'http://uat-placedeshalles.matooi.com:5000/actuator/importerstatus',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
