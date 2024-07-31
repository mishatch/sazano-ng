import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./shared/nav/nav.component";
import {PreloaderComponent} from "./shared/preloader/preloader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, PreloaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ethno-sazano';
}
