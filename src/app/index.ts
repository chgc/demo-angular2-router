export * from './environment';
export * from './app.component';
export * from './app.routes';

import { AuthGuard } from './profile/shared/auth.service';

// Application wide providers
export const APP_PROVIDERS = [
  AuthGuard
];