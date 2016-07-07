import { provideRouter, RouterConfig } from '@angular/router';
import { ProfileComponent } from './profile';

import { ProfileRoutes } from './profile/profile.routes';
import { ProductRoutes } from './product';
export const routes: RouterConfig = [
  ...ProfileRoutes,
  ...ProductRoutes,
  {
    path: '',
    redirectTo: 'profile'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
