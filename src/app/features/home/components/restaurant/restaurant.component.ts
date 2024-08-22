import { TranslateModule } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageClassDirective } from '../../../../shared/directives/language-class.directive';
import {LanguageService} from "../../../../core/services/language.service";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss',
})
export class RestaurantComponent {
  private modalService = inject(NgbModal);
  private currentLanguage: string = this.languageService.getCurrentLanguage();
  menuFoodUrl!: string;
  menuDrinksUrl!: string;
  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
      if(this.currentLanguage === 'geo') {
        this.menuFoodUrl = 'assets/images/home/restaurant/menu_food_ge.webp';
        this.menuDrinksUrl = 'assets/images/home/restaurant/menu_drinks_ge.webp';
      } else {
        this.menuFoodUrl = 'assets/images/home/restaurant/menu_food_en.webp';
        this.menuDrinksUrl = 'assets/images/home/restaurant/menu_drinks_en.webp';
      }
    });
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, centered: true, size: 'lg' });
  }
}
