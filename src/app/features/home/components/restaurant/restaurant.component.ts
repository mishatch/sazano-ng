import { TranslateModule } from '@ngx-translate/core';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
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
export class RestaurantComponent implements OnInit, OnDestroy {
  public menuFoodUrl: string = '';
  public menuDrinksUrl: string = '';

  private currentLanguage: string = '';
  private languageSubscription!: Subscription;

  constructor(
    private modalService: NgbModal,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.getLanguage();
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  public openScrollableContent(longContent: TemplateRef<any>) {
    this.modalService.open(longContent, {
      scrollable: true,
      centered: true,
      size: 'lg',
    });
  }

  private getLanguage() {
    this.languageSubscription = this.languageService.language$.subscribe(
      (lang: string) => {
        this.currentLanguage = lang;
        this.updateMenuUrls();
      }
    );
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
}
