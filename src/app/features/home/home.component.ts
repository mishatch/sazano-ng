import { Component } from '@angular/core';
import { PreloaderComponent } from '../../shared/components/preloader/preloader.component';
import { WineryComponent } from './components/winery/winery.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HotelComponent } from './components/hotel/hotel.component';
import {HeroComponent} from "./components/hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PreloaderComponent,
    WineryComponent,
    HotelComponent,
    RestaurantComponent,
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
