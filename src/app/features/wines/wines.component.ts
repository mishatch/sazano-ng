import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {LanguageClassDirective} from "../../shared/directives/language-class.directive";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [RouterLink, LanguageClassDirective, TranslateModule],
  templateUrl: './wines.component.html',
  styleUrl: './wines.component.scss',
})
export class WinesComponent {
  scrollOnTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
