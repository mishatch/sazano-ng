import { TranslateModule } from '@ngx-translate/core';
import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageClassDirective } from '../../../../shared/directives/language-class.directive';
import { LanguageService } from '../../../../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnDestroy {
  menuFoodUrl: string = '';
  menuDrinksUrl: string = '';
  private currentLanguage: string = '';
  private languageSubscription: Subscription;

  constructor(
    private modalService: NgbModal,
    private languageService: LanguageService
  ) {
    this.languageSubscription = this.languageService.language$.subscribe(
      (lang: string) => {
        this.currentLanguage = lang;
        this.updateMenuUrls();
      }
    );

    this.updateMenuUrls();
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  private updateMenuUrls() {
    if (this.currentLanguage === 'geo') {
      this.menuFoodUrl = 'assets/images/home/restaurant/menu_food_ge.webp';
      this.menuDrinksUrl = 'assets/images/home/restaurant/menu_drinks_ge.webp';
    } else {
      this.menuFoodUrl = 'assets/images/home/restaurant/menu_food_en.webp';
      this.menuDrinksUrl = 'assets/images/home/restaurant/menu_drinks_en.webp';
    }
  }

  openScrollableContent(longContent: TemplateRef<any>) {
    this.modalService.open(longContent, {
      scrollable: true,
      centered: true,
      size: 'lg',
    });
  }
}
