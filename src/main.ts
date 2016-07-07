import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { provide, PLATFORM_DIRECTIVES, enableProdMode } from '@angular/core';

import { AppComponent, environment, APP_ROUTER_PROVIDERS, APP_PROVIDERS } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,
  [
    ...APP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    provide(PLATFORM_DIRECTIVES,
      {
        useValue: [ROUTER_DIRECTIVES],
        multi: true
      })
  ]);

