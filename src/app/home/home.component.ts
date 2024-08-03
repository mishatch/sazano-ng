import { Component } from '@angular/core';
import {PreloaderComponent} from "../shared/preloader/preloader.component";
import {HeaderComponent} from "./header/header.component";
import {WineryComponent} from "./winery/winery.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {HotelComponent} from "./hotel/hotel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PreloaderComponent, HeaderComponent, WineryComponent, HotelComponent,RestaurantComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
