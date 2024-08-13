import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wines.component.html',
  styleUrl: './wines.component.scss',
})
export class WinesComponent {
  http = inject(HttpClient);

  logout() {
    console.log('log out');
  }
}
