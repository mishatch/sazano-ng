import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {AuthGuard} from "./core/guards/auth.guard";
import {AdminGuard} from "./features/admin/guards/admin.guard";

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
    children: [
      { path: 'orders', loadComponent: () =>
          import('./features/profile/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
      },
      { path: 'profile-info', loadComponent: () =>
          import('./features/profile/profile-info/profile-info.component').then(
            (m) => m.ProfileInfoComponent
          ),
      },
      { path: 'address', loadComponent: () =>
          import('./features/profile/address/address.component').then(
            (m) => m.AddressComponent
          ),
      },
    ],
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
    path: 'shopping-cart',
    loadComponent: () =>
      import('./features/buy-wine/components/shopping-cart/shopping-cart.component').then(
        (m) => m.ShoppingCartComponent
      ),
  },
  {
    path: 'admin/products',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/admin-products/admin-products.component').then(
        (m) => m.AdminProductsComponent
      ),
  },
  {
    path: 'admin/add-wine',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/add-wine/add-wine.component').then(
        (m) => m.AddWineComponent
      ),
  },
  {
    path: 'admin/wine/edit/:id',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/add-wine/add-wine.component').then(
        (m) => m.AddWineComponent
      ),
  },
  {
    path: 'admin/users-list',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/users-list/users-list.component').then(
        (m) => m.UsersListComponent
      ),
  },
];
