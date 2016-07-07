import { RouterConfig } from '@angular/router';

import { ProfileComponent }   from './profile.component';
import { ProfileContentDetailComponent } from './profile-content-detail';
import { ProfileContentListComponent } from './profile-content-list';
import { AuthGuard } from './shared/auth.service';
// url: /profile
// url: /profile/detail
export const ProfileRoutes: RouterConfig = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', component: ProfileContentListComponent },
      { path: 'detail', component: ProfileContentDetailComponent, canActivate: [AuthGuard] }
    ]
  }
];
