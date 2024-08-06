import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'wines',
    loadComponent: () =>
      import('./components/wines/wines.component').then((m) => m.WinesComponent),
  },
  {
    path: 'hotel',
    loadComponent: () =>
      import('./components/hotel/hotel.component').then((m) => m.HotelComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then((m) => m.ContactComponent),
  },
];
