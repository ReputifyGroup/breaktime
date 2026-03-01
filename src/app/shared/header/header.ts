import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isHeaderVisible = true;
  private lastScrollY = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - this.lastScrollY;

    // Hide header when scrolling down more than 10px
    if (scrollDelta > 10 && currentScrollY > 100) {
      this.isHeaderVisible = false;
    } 
    // Show header when scrolling up more than 10px
    else if (scrollDelta < -10) {
      this.isHeaderVisible = true;
    }

    this.lastScrollY = currentScrollY;
  }
}
