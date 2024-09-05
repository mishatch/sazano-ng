import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {AuthGuard} from "./core/guards/auth.guard";

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
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },
  {
    path: 'registration-successful',
    loadComponent: () =>
      import('./features/auth/registration-successful/registration-successful.component').then(
        (m) => m.RegistrationSuccessfulComponent
      ),
  },
  {
    path: 'buy-wine',
    loadComponent: () =>
      import('./features/buy-wine/buy-wine.component').then(
        (m) => m.BuyWineComponent
      ),
  },
  {
    path: 'add-wine',
    loadComponent: () =>
      import('./features/admin/add-wine/add-wine.component').then(
        (m) => m.AddWineComponent
      ),
  },
  {
    path: 'shopping-cart',
    loadComponent: () =>
      import('./features/buy-wine/components/shopping-cart/shopping-cart.component').then(
        (m) => m.ShoppingCartComponent
      ),
  },
  {
    path: 'admin-products',
    loadComponent: () =>
      import('./features/admin/admin-products/admin-products.component').then(
        (m) => m.AdminProductsComponent
      ),
  },
];
