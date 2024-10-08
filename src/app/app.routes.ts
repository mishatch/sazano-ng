import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {AuthGuard} from "./core/guards/auth.guard";
import {AdminGuard} from "./features/admin/guards/admin.guard";
import {OrderDetailsComponent} from "./features/profile/components/order-details/order-details.component";

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
          import('./features/profile/components/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
      },
      { path: 'profile-info', loadComponent: () =>
          import('./features/profile/components/profile-info/profile-info.component').then(
            (m) => m.ProfileInfoComponent
          ),
      },
      { path: 'order/:id', loadComponent: () =>
          import('./features/profile/components/order-details/order-details.component').then(
            (m) => m.OrderDetailsComponent
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
      import('./features/auth/components/registration-successful/registration-successful.component').then(
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
      import('./features/admin/components/admin-products/admin-products.component').then(
        (m) => m.AdminProductsComponent
      ),
  },
  {
    path: 'admin/add-wine',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/components/add-wine/add-wine.component').then(
        (m) => m.AddWineComponent
      ),
  },
  {
    path: 'admin/wine/edit/:id',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/components/add-wine/add-wine.component').then(
        (m) => m.AddWineComponent
      ),
  },
  {
    path: 'admin/users-list',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/components/users-list/users-list.component').then(
        (m) => m.UsersListComponent
      ),
  },
  {
    path: 'admin/rooms',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/components/rooms/rooms.component').then(
        (m) => m.RoomsComponent
      ),
  },
  {
    path: 'admin/add-room',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/components/add-room/add-room.component').then(
        (m) => m.AddRoomComponent
      ),
  },
  {
    path: 'admin/edit-room/:id',
    canActivate: [AdminGuard, AuthGuard],
    loadComponent: () =>
      import('./features/admin/components/add-room/add-room.component').then(
        (m) => m.AddRoomComponent
      ),
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/buy-wine/components/checkout/checkout.component').then(
        (m) => m.CheckoutComponent
      ),
  },
  {
    path: 'checkout-success',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/buy-wine/components/checkout-success/checkout-success.component').then(
        (m) => m.CheckoutSuccessComponent
      ),
  },
  {
    path: 'admin/orders',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'pending', loadComponent: () =>
          import('./features/admin/components/admin-orders/pending-orders/pending-orders.component').then(
            (m) => m.PendingOrdersComponent
          ),
      },
      { path: 'completed', loadComponent: () =>
          import('./features/admin/components/admin-orders/completed-orders/completed-orders.component').then(
            (m) => m.CompletedOrdersComponent
          ),
      },
      ],
    loadComponent: () =>
      import('./features/admin/components/admin-orders/admin-orders.component').then(
        (m) => m.AdminOrdersComponent
      ),
  },
];
