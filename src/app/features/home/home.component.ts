import { Component } from '@angular/core';
import { PreloaderComponent } from '../../shared/components/preloader/preloader.component';
import { HeaderComponent } from './components/header/header.component';
import { WineryComponent } from './components/winery/winery.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PreloaderComponent,
    HeaderComponent,
    WineryComponent,
    HotelComponent,
    RestaurantComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
