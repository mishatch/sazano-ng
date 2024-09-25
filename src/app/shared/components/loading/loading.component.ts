import { Component } from '@angular/core';
import {LoadingService} from "../../../core/services/loading.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  public isLoading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
