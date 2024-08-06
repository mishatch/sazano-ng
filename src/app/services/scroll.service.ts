import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {}

  scrollToElementById(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToHomeAndScroll(id: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToElementById(id);
      }, 50);
    });
  }
}
