import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {LanguageClassDirective} from "../../shared/directives/language-class.directive";

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [RouterLink, LanguageClassDirective],
  templateUrl: './wines.component.html',
  styleUrl: './wines.component.scss',
})
export class WinesComponent {}
