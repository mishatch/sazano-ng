import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'wines',
    loadComponent: () =>
      import('./features/wines/wines.component').then(
        (m) => m.WinesComponent
      ),
  },
  {
    path: 'hotel',
    loadComponent: () =>
      import('./features/hotel/hotel.component').then(
        (m) => m.HotelComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },
];
