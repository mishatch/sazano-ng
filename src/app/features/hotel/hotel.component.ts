import { Component } from '@angular/core';
import {LanguageClassDirective} from "../../shared/directives/language-class.directive";
import {TranslateModule} from "@ngx-translate/core";
import {RoomsComponent} from "./components/rooms/rooms.component";

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [LanguageClassDirective, TranslateModule, RoomsComponent],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent {

}
